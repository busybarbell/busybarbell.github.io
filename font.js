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

        if (video.currentTime >= 10) {
            console.log('10 seconds reached');
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
});
