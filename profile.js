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

    // References for acknowledgment background and wrap
    const continueButtons = document.querySelectorAll('.continue_button');
    const acknowledgeButtons = document.querySelectorAll('.button');
    const acknowledgeBackground = document.querySelector('.acknowledge_background');
    const acknowledgeWrap = document.querySelector('.acknowledge_wrap');
    const innerBar = document.querySelector('.inner_bar');

    // Button with class "button-changed" in the CTA section
    const ctaButton = document.querySelector('#cta .button-changed');

    let hasSoundPlayed = false;
    let isDragging = false;
    let wasPlayingBeforeScrub = false;
    let volumeHideTimeout;

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

        // Check and update the continue button state and text
        checkButtonState();
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
                innerBar.style.width = '50%';

                // Play sound effect only when expanding starts
                if (!hasSoundPlayed) {
                    hasSoundPlayed = true; // Ensure sound is played only once
                }
            });
        });

        // Play the video
        playVideoWithSound();
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

    // Add event listener to change button class when video ends
    video.addEventListener('ended', () => {
        console.log('Video has ended');
        if (ctaButton) {
            ctaButton.classList.remove('button-changed');
            ctaButton.classList.add('button');
            ctaButton.style.pointerEvents = 'auto'; // Ensure the button is clickable
        }
    });
});
