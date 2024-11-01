document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const button = document.getElementById('first-button');

    // Enable the button when the video reaches the specified time
    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= 11.8) { // 4 minutes and 1 second
            button.disabled = false; // Enable the button
        }
    });

    // Add a click event listener to the button without navigating to the booking page
    button.addEventListener('click', function() {
        // Remove the line that redirects to the booking page
        // window.location.href = 'https://busybarbell.com/booking';
        
        // Optional: You can add other functionalities here, e.g., show a message or trigger another action
        console.log("Button clicked!"); // Placeholder action
    });
});
