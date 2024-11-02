document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('first-button');
    
    window._wq = window._wq || [];
    _wq.push({ 
        id: "odeh9l3bfv",
        onReady: function(video) {
            video.bind("timechange", function(t) {
                if (t >= 30) {
                    button.disabled = false;
                }
            });

            button.addEventListener('click', function() {
                console.log("Button clicked!");
            });
        }
    });
});
