document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const button = document.getElementById('first-button');

    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= 241.8) { // 4 minutes and 1 second
            button.disabled = false; // Enable the button
        }
    });

    button.addEventListener('click', function() {
        window.location.href = 'https://busybarbell.com/booking';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('first-button').addEventListener('click', function() {
        window.location.href = 'https://busybarbell.com/booking';
    });
});