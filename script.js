document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const lockedElement = document.getElementById('locked');
    const firstButton = document.getElementById('first-button');
    const muteBtn = document.querySelector('.click_for_sound');
    const volumeDiv = document.querySelector('.volume');
    const volumeOn = volumeDiv.querySelector('.volume-on');
    const volumeOff = volumeDiv.querySelector('.volume-off');
    const clickText = muteBtn.querySelector('.click-text');
    const tapText = muteBtn.querySelector('.tap-text');
    const playButton = document.querySelector('.play');
    const controls = document.querySelector('.controls');
    const fullscreenButton = document.getElementById('fullscreenButton');
    const fullscreenIcon = fullscreenButton.querySelector('.fullscreen');
    const exitFullscreenIcon = fullscreenButton.querySelector('.exit-fullscreen');
    const header = document.querySelector('header');

    function handleScroll() {
        if (window.scrollY > 1) { // Change 50 to the desired scroll position threshold
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the page is loaded with some scroll position
    handleScroll();

    // Check for video and locked elements
    if (video) {
        console.log('Video element found');
    } else {
        console.log('Video element not found');
    }

    if (lockedElement) {
        console.log('Locked element found');
    } else {
        console.log('Locked element not found');
    }

    // Time update event for the video
    video.addEventListener('timeupdate', () => {
        console.log(`Current time: ${video.currentTime} seconds`);

        if (video.currentTime >= 1) {
            console.log('1 seconds reached');
            lockedElement.style.cssText = '';
            lockedElement.classList.remove('locked-styled');
            firstButton.classList.remove('button-changed');
        }
    });

    // Handling click for sound/mute button
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        clickText.style.display = 'none';
        tapText.style.display = 'inline';
    } else {
        clickText.style.display = 'inline';
        tapText.style.display = 'none';
    }

    let audioContext;
    if (window.AudioContext || window.webkitAudioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const emptySource = audioContext.createBufferSource();
        emptySource.buffer = audioContext.createBuffer(1, 1, 22050);
        emptySource.connect(audioContext.destination);
        emptySource.start(0);
    }

    function playVideoWithSound() {
        video.muted = false;
        video.play();
        volumeDiv.style.display = 'flex';
        volumeOn.style.display = 'flex';
        volumeOff.style.display = 'none';
        muteBtn.style.display = 'none';
        playButton.style.display = 'none';
    }

    function toggleMute() {
        video.muted = !video.muted;
        volumeOn.style.display = video.muted ? 'none' : 'flex';
        volumeOff.style.display = video.muted ? 'flex' : 'none';
    }

    function togglePlayPause() {
        if (video.paused) {
            playVideoWithSound();
        } else {
            video.pause();
        }
    }

    // Apply the same functionality to all relevant elements
    function setupPlayAndSound() {
        playVideoWithSound();
        playButton.style.display = 'none';
        muteBtn.style.display = 'none';
        volumeDiv.style.display = 'flex';
    }

    // Event listeners for play functionality
    muteBtn.addEventListener('click', setupPlayAndSound);
    playButton.addEventListener('click', setupPlayAndSound);

    // Play/Pause video functionality on controls click
    controls.addEventListener('click', togglePlayPause);
    playButton.addEventListener('click', togglePlayPause);
    muteBtn.addEventListener('click', togglePlayPause);

    // Toggle mute when clicking on the volume div
    volumeDiv.addEventListener('click', toggleMute);

    // Fullscreen functionality
    function toggleFullscreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) { // Firefox
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) { // IE/Edge
            video.msRequestFullscreen();
        }
    }

    fullscreenButton.addEventListener('click', () => {
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
            document.exitFullscreen();
        } else {
            toggleFullscreen();
        }
    });

    // Optional: Handle fullscreen change
    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            fullscreenIcon.style.display = 'none';
            exitFullscreenIcon.style.display = 'block';
        } else {
            fullscreenIcon.style.display = 'block';
            exitFullscreenIcon.style.display = 'none';
        }
    });

    document.addEventListener('mozfullscreenchange', () => {
        if (document.mozFullScreenElement) {
            fullscreenIcon.style.display = 'none';
            exitFullscreenIcon.style.display = 'block';
        } else {
            fullscreenIcon.style.display = 'block';
            exitFullscreenIcon.style.display = 'none';
        }
    });

    document.addEventListener('webkitfullscreenchange', () => {
        if (document.webkitFullscreenElement) {
            fullscreenIcon.style.display = 'none';
            exitFullscreenIcon.style.display = 'block';
        } else {
            fullscreenIcon.style.display = 'block';
            exitFullscreenIcon.style.display = 'none';
        }
    });

    document.addEventListener('msfullscreenchange', () => {
        if (document.msFullscreenElement) {
            fullscreenIcon.style.display = 'none';
            exitFullscreenIcon.style.display = 'block';
        } else {
            fullscreenIcon.style.display = 'block';
            exitFullscreenIcon.style.display = 'none';
        }
    });

    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq_item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;

            if (answer && answer.classList.contains('faq_answer')) {
                const isVisible = answer.style.display === 'block';

                document.querySelectorAll('.faq_answer').forEach(otherAnswer => {
                    if (otherAnswer !== answer) {
                        otherAnswer.style.display = 'none';
                    }
                });

                answer.style.display = isVisible ? 'none' : 'block';
            }
        });
    });

    document.querySelectorAll('.faq_answer').forEach(answer => {
        answer.addEventListener('click', () => {
            answer.style.display = 'none';
        });
    });

    // New Date Functionality
    function getFormattedDate(date) {
        date = date || new Date();
        const day = date.getDate();
        const monthIndex = date.getMonth();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        const suffixes = ["st", "nd", "rd", "th"];
        let suffix;

        if (day >= 11 && day <= 13) {
            suffix = "th";
        } else {
            suffix = suffixes[(day - 1) % 10] || "th";
        }

        // Wrap suffix in <sup> tags
        suffix = `<sup>${suffix}</sup>`;

        return `${monthNames[monthIndex]} ${day}${suffix}`;
    }

    document.querySelectorAll('.today-suffix').forEach(function(selected){
        selected.innerHTML = getFormattedDate();
    });

    document.querySelectorAll('.days-21-suffix').forEach(function(selected){
        const today = new Date();
        const futureDate = new Date(today.getTime() + (21 * 24 * 60 * 60 * 1000));
        selected.innerHTML = getFormattedDate(futureDate);
    });
});
