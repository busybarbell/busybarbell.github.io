document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const lockedElement = document.getElementById('locked');
    const firstButton = document.getElementById('first-button');

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

    video.addEventListener('timeupdate', () => {
        console.log(`Current time: ${video.currentTime} seconds`);

        if (video.currentTime >= 10) {
            console.log('10 seconds reached');
            lockedElement.style.cssText = '';
            lockedElement.classList.remove('locked-styled');
            firstButton.classList.remove('button-changed');
        }
    });
});
