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

    const acknowledgeButtons = document.querySelectorAll('.keep-watching');
    const closeDiv = document.getElementById('close');
    const acknowledgeBackground = document.querySelector('.acknowledge_background');
    const acknowledgeWrap = document.querySelector('.acknowledge_wrap');

    const close2Div = document.getElementById('close2');
    const signWrap = document.querySelector('.sign_wrap');

    // Toggle visibility of signWrap on button click
    firstButton.addEventListener('click', () => {
        signWrap.style.display = signWrap.style.display === 'flex' ? 'none' : 'flex';
    });

    close2Div.addEventListener('click', () => {
        signWrap.style.display = signWrap.style.display === 'none' ? 'flex' : 'none';
    });

    document.getElementById('phone').addEventListener('input', function(e) {
        let input = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters

        if (input.length > 10) input = input.slice(0, 10); // Limit to 10 digits

        e.target.value = input.length > 6
            ? `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`
            : input.length > 3
                ? `(${input.slice(0, 3)}) ${input.slice(3)}`
                : `(${input}`;
    });

    const closeBtn = document.querySelector('.close-btn');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            signWrap.style.display = 'none';
        });
    }

    let hasAcknowledgmentBeenShown = false;

    function showAcknowledgeBackground() {
        if (hasAcknowledgmentBeenShown) return;

        hasAcknowledgmentBeenShown = true;
        acknowledgeBackground.style.display = 'flex';
        acknowledgeWrap.style.display = 'flex';
        acknowledgeWrap.classList.add('animate-in');
        document.body.style.overflow = 'hidden';
    }

    function hideAcknowledgeBackground() {
        acknowledgeWrap.classList.remove('animate-in');
        acknowledgeWrap.classList.add('animate-out');
        acknowledgeWrap.style.display = 'none';
        acknowledgeBackground.style.display = 'none';
        document.body.style.overflow = '';
    }

    acknowledgeBackground.style.display = 'none';
    acknowledgeWrap.style.display = 'none';

    document.addEventListener('mouseout', (event) => {
        if (event.clientY < 0) showAcknowledgeBackground();
    });

    acknowledgeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.dataset.pressed = 'true';
            hideAcknowledgeBackground();
        });
    });

    closeDiv.addEventListener('click', hideAcknowledgeBackground);

    // Video and locked elements logging
    if (video) console.log('Video element found');
    if (lockedElement) console.log('Locked element found');

    // Handling click for sound/mute button
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (clickText) clickText.style.display = isMobile ? 'none' : 'inline';
    if (tapText) tapText.style.display = isMobile ? 'inline' : 'none';

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
            volumeDiv.style.display = 'flex';
            volumeOn.style.display = 'flex';
            volumeOff.style.display = 'none';
            muteBtn.style.display = 'none';
            playButton.style.display = 'none';
        }
    }

    function toggleMute() {
        if (video) {
            video.muted = !video.muted;
            volumeOn.style.display = video.muted ? 'none' : 'flex';
            volumeOff.style.display = video.muted ? 'flex' : 'none';
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

    function setupPlayAndSound() {
        playVideoWithSound();
        playButton.style.display = 'none';
        muteBtn.style.display = 'none';
        volumeDiv.style.display = 'flex';
    }

    if (muteBtn) muteBtn.addEventListener('click', setupPlayAndSound);
    if (playButton) playButton.addEventListener('click', setupPlayAndSound);
    if (controls) controls.addEventListener('click', togglePlayPause);
    if (muteBtn) muteBtn.addEventListener('click', togglePlayPause);
    if (volumeDiv) volumeDiv.addEventListener('click', toggleMute);

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

    document.addEventListener('fullscreenchange', () => {
        if (fullscreenIcon && exitFullscreenIcon) {
            fullscreenIcon.style.display = document.fullscreenElement ? 'none' : 'block';
            exitFullscreenIcon.style.display = document.fullscreenElement ? 'block' : 'none';
        }
    });

    document.addEventListener('mozfullscreenchange', () => {
        if (fullscreenIcon && exitFullscreenIcon) {
            fullscreenIcon.style.display = document.mozFullScreenElement ? 'none' : 'block';
            exitFullscreenIcon.style.display = document.mozFullScreenElement ? 'block' : 'none';
        }
    });

    document.addEventListener('webkitfullscreenchange', () => {
        if (fullscreenIcon && exitFullscreenIcon) {
            fullscreenIcon.style.display = document.webkitFullscreenElement ? 'none' : 'block';
            exitFullscreenIcon.style.display = document.webkitFullscreenElement ? 'block' : 'none';
        }
    });

    document.addEventListener('msfullscreenchange', () => {
        if (fullscreenIcon && exitFullscreenIcon) {
            fullscreenIcon.style.display = document.msFullscreenElement ? 'none' : 'block';
            exitFullscreenIcon.style.display = document.msFullscreenElement ? 'block' : 'none';
        }
    });

    // FAQ functionality
    document.querySelectorAll('.faq_item').forEach(item => {
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

        suffix = `<sup>${suffix}</sup>`;

        return `${monthNames[monthIndex]} ${day}${suffix}`;
    }

    document.querySelectorAll('.today-suffix').forEach(selected => {
        selected.innerHTML = getFormattedDate();
    });

    document.querySelectorAll('.days-21-suffix').forEach(selected => {
        const today = new Date();
        const futureDate = new Date(today.getTime() + (21 * 24 * 60 * 60 * 1000));
        selected.innerHTML = getFormattedDate(futureDate);
    });
});