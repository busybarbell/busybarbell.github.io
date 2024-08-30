document.addEventListener('DOMContentLoaded', () => {
    // References for acknowledgment background and wrap
    const continueButtons = document.querySelectorAll('.continue_button');
    const acknowledgeButtons = document.querySelectorAll('.button');
    const acknowledgeBackground = document.querySelector('.acknowledge_background');
    const acknowledgeWrap = document.querySelector('.acknowledge_wrap');
    const motivation = document.querySelector('.motivation');
    const soundEffect = document.getElementById('soundEffect');
    const innerBar = document.querySelector('.inner_bar');

    // References for video controls
    const video = document.getElementById('myVideo');
    const videoSource = document.getElementById('videoSource');
    const volumeDiv = document.querySelector('.volume');
    const volumeOn = volumeDiv.querySelector('.volume-on');
    const volumeOff = volumeDiv.querySelector('.volume-off');
    const timeline = document.querySelector('.timeline');
    const timelineWrap = document.querySelector('.timeline_wrap');

    let isDragging = false;
    let wasPlayingBeforeScrub = false;
    let hasSoundPlayed = false;
    let volumeHideTimeout;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    function updateVolumeUI() {
        if (video.muted) {
            volumeOn.style.display = 'none';
            volumeOff.style.display = 'flex';
        } else {
            volumeOn.style.display = 'flex';
            volumeOff.style.display = 'none';
        }
    }

    function updateTimeline() {
        const progress = (video.currentTime / video.duration) * 100;
        timeline.style.width = `${progress}%`;
        checkButtonState(); // Check button state each time the timeline updates
    }

    function handleScrubbing(event, isTouch = false) {
        const timelineRect = timelineWrap.getBoundingClientRect();
        const offsetX = isTouch ? event.touches[0].clientX - timelineRect.left : event.clientX - timelineRect.left;
        const timelineWidth = timelineWrap.clientWidth;
        const newTime = (offsetX / timelineWidth) * video.duration;
        video.currentTime = newTime;
        updateTimeline(); // Ensure timeline stays accurate
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

    // Toggle mute/unmute on video click or tap
    video.addEventListener('click', () => {
        video.muted = !video.muted;
        updateVolumeUI();
        showVolumeDiv();
    });

    // Toggle mute/unmute when pressing 'm' or spacebar
    document.addEventListener('keydown', (event) => {
        if (event.key === 'm') {
            video.muted = !video.muted;
            updateVolumeUI();
            showVolumeDiv();
        } else if (event.code === 'Space') {
            event.preventDefault(); // Prevent scrolling down
            video.muted = !video.muted;
            updateVolumeUI(); // Spacebar mutes/unmutes
            showVolumeDiv();
        }
    });

    // Toggle mute/unmute when clicking the volume div
    volumeDiv.addEventListener('click', () => {
        video.muted = !video.muted;
        updateVolumeUI();
        showVolumeDiv();
    });

    function setVideoSource() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 479) {
            videoSource.src = 'next_sabri.mp4';
        } else {
            videoSource.src = 'sabri.mp4';
        }

        video.load();
    }

    setVideoSource();
    window.addEventListener('resize', setVideoSource);

    // Show or hide volume div based on video playback state
    function handleVideoPlayback() {
        if (video.paused) {
            volumeDiv.style.display = 'none';
            clearTimeout(volumeHideTimeout); // Clear any existing timeout
        } else {
            volumeDiv.style.display = 'flex';
            updateVolumeUI();
            showVolumeDiv(); // Ensure volume div is visible when video plays
        }
    }

    function showVolumeDiv() {
        // Clear any existing timeout
        clearTimeout(volumeHideTimeout);

        // Show volume div and reset its opacity
        volumeDiv.style.display = 'flex';
        volumeDiv.style.opacity = 1;

        // Start timeout to hide volume div after 4 seconds
        volumeHideTimeout = setTimeout(() => {
            volumeDiv.style.transition = 'opacity .2s';
            volumeDiv.style.opacity = 0;
            setTimeout(() => {
                volumeDiv.style.display = 'none';
            }, 200); // Match this with opacity transition time
        }, 4000);
    }

    // Initial setup for volume div
    volumeDiv.style.display = 'none';

    // Handle video play/pause
    video.addEventListener('play', handleVideoPlayback);
    video.addEventListener('pause', handleVideoPlayback);

    // Mutation Observer to play the video and unmute it when the acknowledge background is hidden
    const acknowledgeObserver = new MutationObserver(() => {
        const isHidden = window.getComputedStyle(acknowledgeBackground).display === 'none';
        if (isHidden) {
            video.muted = false; // Unmute the video
            video.play(); // Play the video
        }
    });

    acknowledgeObserver.observe(acknowledgeBackground, { attributes: true, attributeFilter: ['style'] });

    // Function to show the acknowledgment background and disable scrolling with animation
    function showAcknowledgeBackground() {
        acknowledgeBackground.style.display = 'block';

        // Trigger the background transition
        requestAnimationFrame(() => {
            acknowledgeBackground.classList.add('visible');
        });

        // Delay the wrap animation until the background transition completes
        setTimeout(() => {
            acknowledgeWrap.style.display = 'flex';
            acknowledgeWrap.classList.add('animate-in');
        }, 500); // Match this with the background transition time

        motivation.style.display = 'none'; // Hide motivation when acknowledgment is visible
        document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    // Function to hide the acknowledgment background, enable scrolling, and adjust the bar width with animation
    function hideAcknowledgeBackground(button) {
        // Start animation for the wrap
        acknowledgeWrap.classList.remove('animate-in');
        acknowledgeWrap.classList.add('animate-out');

        // Wait for the wrap animation to complete before hiding the background
        acknowledgeWrap.addEventListener('transitionend', () => {
            if (acknowledgeWrap.classList.contains('animate-out')) {
                acknowledgeWrap.style.display = 'none';
                acknowledgeBackground.classList.remove('visible');
                setTimeout(() => {
                    acknowledgeBackground.style.display = 'none';
                }, 500); // Match this with the background transition time

                document.body.style.overflow = ''; // Enable scrolling
            }
        }, { once: true });

        // Start bar width expansion
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                motivation.style.display = 'block';
                innerBar.style.width = '75%';

                // Play sound effect only when expanding starts
                if (!hasSoundPlayed) {
                    soundEffect.pause();
                    soundEffect.currentTime = 0;
                    soundEffect.play();
                    hasSoundPlayed = true; // Ensure sound is played only once
                }
            });
        });
    }

    // Show the acknowledgment background with animation when the page loads
    showAcknowledgeBackground();

    // Add event listener to all buttons with the class "button" to hide the acknowledgment and start the expansion
    acknowledgeButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.pressed === 'false') {
                button.dataset.pressed = 'true'; // Update data attribute
            }
            hideAcknowledgeBackground(button);
        });
    });

    // Function to check and update the continue button state and text
    function checkButtonState() {
        const progress = video.currentTime / video.duration;
        const isReady = progress >= 0.8; // Check if video progress is at least 80%

        continueButtons.forEach(button => {
            if (isReady) {
                button.classList.remove('disabled');
            } else {
                button.classList.add('disabled');
            }
        });
    }

    // Initial check to ensure button state and text are correct on page load
    checkButtonState();
});
