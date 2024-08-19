document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const videoSource = document.getElementById('videoSource');
    const muteBtn = document.querySelector('.click_for_sound');
    const volumeDiv = document.querySelector('.volume');
    const volumeOn = volumeDiv.querySelector('.volume-on');
    const volumeOff = volumeDiv.querySelector('.volume-off');
    const timeline = document.querySelector('.timeline');
    const timelineWrap = document.querySelector('.timeline_wrap');
    const clickText = muteBtn.querySelector('.click-text');
    const tapText = muteBtn.querySelector('.tap-text');
    const carouselPage = document.querySelector('.carousel_page');

    // Set video source first
    function setVideoSource() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 479) {
            videoSource.src = 'sabri_mobile.mp4';
        } else {
            videoSource.src = 'sabri.mp4';
        }

        video.load();
    }

    setVideoSource();
    window.addEventListener('resize', setVideoSource);

    let isDragging = false;
    let wasPlayingBeforeScrub = false;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        clickText.style.display = 'none';
        tapText.style.display = 'inline';
    } else {
        clickText.style.display = 'inline';
        tapText.style.display = 'none';
    }

    function toggleMute() {
        video.muted = !video.muted;
        volumeDiv.style.display = 'flex';
        volumeOn.style.display = video.muted ? 'none' : 'flex';
        volumeOff.style.display = video.muted ? 'flex' : 'none';
        muteBtn.style.display = 'none';
    }

    muteBtn.style.display = 'flex';
    muteBtn.addEventListener('click', toggleMute);

    function updateTimeline() {
        const progress = (video.currentTime / video.duration) * 100;
        timeline.style.width = `${progress}%`;
    }

    function handleScrubbing(event, isTouch = false) {
        const timelineRect = timelineWrap.getBoundingClientRect();
        const offsetX = isTouch ? event.touches[0].clientX - timelineRect.left : event.clientX - timelineRect.left;
        const timelineWidth = timelineWrap.clientWidth;
        const newTime = (offsetX / timelineWidth) * video.duration;
        video.currentTime = newTime;
        updateTimeline();
    }

    function startScrubbing(event, isTouch = false) {
        isDragging = true;
        wasPlayingBeforeScrub = !video.paused;
        video.pause();
        handleScrubbing(event, isTouch);
        event.preventDefault();
    }

    function continueScrubbing(event) {
        if (isDragging) {
            handleScrubbing(event, event.type.includes('touch'));
            event.preventDefault();
        }
    }

    function endScrubbing() {
        if (isDragging) {
            if (wasPlayingBeforeScrub) {
                video.play();
            }
            isDragging = false;
        }
    }

    timelineWrap.addEventListener('mousedown', (event) => {
        startScrubbing(event);
    });
    document.addEventListener('mousemove', continueScrubbing);
    document.addEventListener('mouseup', endScrubbing);

    timelineWrap.addEventListener('touchstart', (event) => {
        startScrubbing(event, true);
    });
    document.addEventListener('touchmove', continueScrubbing);
    document.addEventListener('touchend', endScrubbing);

    video.addEventListener('timeupdate', updateTimeline);

    // Tap anywhere on the video area to mute/unmute
    video.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMute();
    });

    // Keyboard shortcuts for mute/unmute and spacebar handling
    document.addEventListener('keydown', (event) => {
        if (event.key === 'm') {
            toggleMute();
        } else if (event.code === 'Space') {
            event.preventDefault(); // Prevent scrolling down
            toggleMute(); // Spacebar mutes/unmutes just like "m"
        }
    });

    setTimeout(() => {
        carouselPage.style.transition = 'opacity .2s';
        carouselPage.style.opacity = 0;
    }, 4000);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(video);
});
