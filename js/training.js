document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const lockedElement = document.getElementById('locked');
    const firstButton = document.getElementById('first-button');
    const muteBtn = document.querySelector('.click_for_sound');
    const volumeDiv = document.querySelector('.volume');
    const volumeOn = volumeDiv?.querySelector('.volume-on');
    const volumeOff = volumeDiv?.querySelector('.volume-off');
    const clickText = muteBtn?.querySelector('.click-text');
    const tapText = muteBtn?.querySelector('.tap-text');
    const playButton = document.querySelector('.play');
    const controls = document.querySelector('.controls');
    const fullscreenButton = document.getElementById('fullscreenButton');
    const fullscreenIcon = fullscreenButton?.querySelector('.fullscreen');
    const exitFullscreenIcon = fullscreenButton?.querySelector('.exit-fullscreen');

    const acknowledgeButtons = document.querySelectorAll('.keep-watching');
    const closeDiv = document.getElementById('close');
    const acknowledgeBackground = document.querySelector('.acknowledge_background');
    const acknowledgeWrap = document.querySelector('.acknowledge_wrap');
    const close2Div = document.getElementById('close2');
    const signWrap = document.querySelector('.sign_wrap');

    if (firstButton) {
        firstButton.addEventListener('click', () => {
            window.location.href = 'https://busybarbell.github.io/application';
        });
    }

    if (close2Div) {
        close2Div.addEventListener('click', () => {
            signWrap.style.display = signWrap.style.display === 'none' ? 'flex' : 'none';
        });
    }

    document.getElementById('phone')?.addEventListener('input', function (e) {
        let input = e.target.value;
        input = input.replace(/\D/g, ''); // Remove non-numeric characters

        if (input.length > 10) input = input.slice(0, 10); // Limit to 10 digits

        // Format the phone number
        if (input.length > 6) {
            e.target.value = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`;
        } else if (input.length > 3) {
            e.target.value = `(${input.slice(0, 3)}) ${input.slice(3)}`;
        } else {
            e.target.value = `(${input}`;
        }
    });

    // Flag to track if the acknowledgment background has been shown
    let hasAcknowledgmentBeenShown = false;

    // Function to show the acknowledgment background and disable scrolling
    function showAcknowledgeBackground() {
        if (hasAcknowledgmentBeenShown) return; // Exit if already shown

        hasAcknowledgmentBeenShown = true; // Set the flag to true

        // Make the background visible immediately
        if (acknowledgeBackground) {
            acknowledgeBackground.style.display = 'flex';
            // Use a timeout to allow the display change before applying the visible class
            setTimeout(() => {
                acknowledgeBackground.classList.add('visible');
            }, 10); // Small timeout to allow for rendering
        }

        // Make the wrap visible immediately
        if (acknowledgeWrap) {
            acknowledgeWrap.style.display = 'flex';
            acknowledgeWrap.classList.add('animate-in');
        }

        // Disable scrolling
        document.body.style.overflow = 'hidden';
    }

    // Function to hide the acknowledgment background and enable scrolling
    function hideAcknowledgeBackground() {
        // Start animation for the wrap
        if (acknowledgeWrap) {
            acknowledgeWrap.classList.remove('animate-in');
            acknowledgeWrap.classList.add('animate-out');

            // Hide the wrap after the exit animation completes
            acknowledgeWrap.addEventListener('animationend', () => {
                acknowledgeWrap.style.display = 'none';
            }, { once: true });
        }

        // Hide the background with a transition
        if (acknowledgeBackground) {
            acknowledgeBackground.classList.remove('visible');
            // Wait for the opacity transition to finish before hiding
            acknowledgeBackground.addEventListener('transitionend', () => {
                acknowledgeBackground.style.display = 'none';
            }, { once: true });
        }

        // Enable scrolling
        document.body.style.overflow = '';
    }

    // Function to toggle visibility of acknowledgeWrap
    function toggleAcknowledgeWrap() {
        if (acknowledgeWrap) {
            const isVisible = acknowledgeWrap.classList.toggle('visible');
            console.log('acknowledgeWrap toggled:', isVisible ? 'visible' : 'hidden');

            // Enable or disable scrolling based on visibility
            if (isVisible) {
                showAcknowledgeBackground();
            } else {
                hideAcknowledgeBackground();
            }
        }
    }

    // Ensure acknowledgment background is hidden on page load
    if (acknowledgeBackground) acknowledgeBackground.style.display = 'none';
    if (acknowledgeWrap) acknowledgeWrap.style.display = 'none';

    // Event listener for mouse leaving the viewport
    document.addEventListener('mouseout', (event) => {
        // Check if the mouse is leaving the viewport from the top edge
        if (event.clientY < 0) {
            showAcknowledgeBackground();
        }
    });

    // Add event listener to all buttons with the class "keep-watching"
    acknowledgeButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.pressed === 'false') {
                button.dataset.pressed = 'true'; // Update data attribute
            }
            hideAcknowledgeBackground();
        });
    });

    // Add event listener to the close div
    if (closeDiv) {
        closeDiv.addEventListener('click', () => {
            hideAcknowledgeBackground();
        });
    }

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

    // Handling click for sound/mute button
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (clickText && tapText) {
        if (isMobile) {
            clickText.style.display = 'none';
            tapText.style.display = 'inline';
        } else {
            clickText.style.display = 'inline';
            tapText.style.display = 'none';
        }
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
        if (video) {
            video.muted = false;
            video.play();
            if (volumeDiv) volumeDiv.style.display = 'flex';
            if (volumeOn) volumeOn.style.display = 'flex';
            if (volumeOff) volumeOff.style.display = 'none';
            if (muteBtn) muteBtn.style.display = 'none';
            if (playButton) playButton.style.display = 'none';
        }
    }

    function toggleMute() {
        if (video) {
            video.muted = !video.muted;
            if (volumeOn) volumeOn.style.display = video.muted ? 'none' : 'flex';
            if (volumeOff) volumeOff.style.display = video.muted ? 'flex' : 'none';
        }
    }

    function togglePlayPause() {
        if (video) {
            if (video.paused) {
                playVideoWithSound();
            } else {
                video.pause();
            }
        }
    }

    // Apply the same functionality to all relevant elements
    function setupPlayAndSound() {
        playVideoWithSound();
        if (playButton) playButton.style.display = 'none';
        if (muteBtn) muteBtn.style.display = 'none';
        if (volumeDiv) volumeDiv.style.display = 'flex';
    }

    // Event listeners for play functionality
    if (muteBtn) muteBtn.addEventListener('click', setupPlayAndSound);
    if (playButton) playButton.addEventListener('click', setupPlayAndSound);

    // Play/Pause video functionality on controls click
    if (controls) controls.addEventListener('click', togglePlayPause);
    if (playButton) playButton.addEventListener('click', togglePlayPause);
    if (muteBtn) muteBtn.addEventListener('click', togglePlayPause);

    // Toggle mute when clicking on the volume div
    if (volumeDiv) volumeDiv.addEventListener('click', toggleMute);

    // Fullscreen functionality
    function toggleFullscreen() {
        if (video) {
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
    }

    if (fullscreenButton) {
        fullscreenButton.addEventListener('click', () => {
            if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
                document.exitFullscreen();
            } else {
                toggleFullscreen();
            }
        });
    }

    // Optional: Handle fullscreen change
    document.addEventListener('fullscreenchange', () => {
        if (fullscreenIcon && exitFullscreenIcon) {
            if (document.fullscreenElement) {
                fullscreenIcon.style.display = 'none';
                exitFullscreenIcon.style.display = 'block';
            } else {
                fullscreenIcon.style.display = 'block';
                exitFullscreenIcon.style.display = 'none';
            }
        }
    });

    document.addEventListener('mozfullscreenchange', () => {
        if (fullscreenIcon && exitFullscreenIcon) {
            if (document.mozFullScreenElement) {
                fullscreenIcon.style.display = 'none';
                exitFullscreenIcon.style.display = 'block';
            } else {
                fullscreenIcon.style.display = 'block';
                exitFullscreenIcon.style.display = 'none';
            }
        }
    });

    document.addEventListener('webkitfullscreenchange', () => {
        if (fullscreenIcon && exitFullscreenIcon) {
            if (document.webkitFullscreenElement) {
                fullscreenIcon.style.display = 'none';
                exitFullscreenIcon.style.display = 'block';
            } else {
                fullscreenIcon.style.display = 'block';
                exitFullscreenIcon.style.display = 'none';
            }
        }
    });

    document.addEventListener('msfullscreenchange', () => {
        if (fullscreenIcon && exitFullscreenIcon) {
            if (document.msFullscreenElement) {
                fullscreenIcon.style.display = 'none';
                exitFullscreenIcon.style.display = 'block';
            } else {
                fullscreenIcon.style.display = 'block';
                exitFullscreenIcon.style.display = 'none';
            }
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

    document.querySelectorAll('.today-suffix').forEach(function (selected) {
        selected.innerHTML = getFormattedDate();
    });

    document.querySelectorAll('.days-21-suffix').forEach(function (selected) {
        const today = new Date();
        const futureDate = new Date(today.getTime() + (21 * 24 * 60 * 60 * 1000));
        selected.innerHTML = getFormattedDate(futureDate);
    });
});