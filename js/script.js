document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const lockedElement = document.getElementById('locked');
    const firstButton = document.getElementById('first-button');
    const playButton = document.querySelector('.play');
    const controls = document.querySelector('.controls');

    const acknowledgeButtons = document.querySelectorAll('.keep-watching');
    const closeDiv = document.getElementById('close');
    const acknowledgeBackground = document.querySelector('.acknowledge_background');
    const acknowledgeWrap = document.querySelector('.acknowledge_wrap');
    const close2Div = document.getElementById('close2');
    const signWrap = document.querySelector('.sign_wrap');

    // Function to toggle visibility of signWrap
    function toggleSignWrap() {
        if (signWrap) {
            signWrap.style.display = signWrap.style.display === 'flex' ? 'none' : 'flex';
            console.log('signWrap toggled:', signWrap.style.display);
        }
    }

    // Toggle visibility of signWrap on firstButton click
    if (firstButton) {
        firstButton.addEventListener('click', () => {
            console.log('firstButton clicked');
            toggleSignWrap();
        });
    }

    // Toggle visibility of signWrap on close2Div click
    if (close2Div) {
        close2Div.addEventListener('click', () => {
            console.log('close2Div clicked');
            toggleSignWrap();
        });
    }

    // Toggle visibility of signWrap on click_for_sound buttons
    document.querySelectorAll('.click_for_sound').forEach(button => {
        button.addEventListener('click', () => {
            console.log('click_for_sound button clicked');
            toggleSignWrap();
        });
    });

    // Toggle visibility of signWrap on video-wrap elements
    document.querySelectorAll('.video-wrap').forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            console.log('video-wrap element clicked');
            toggleSignWrap();
        });
    });

    // Toggle visibility of signWrap on playButton click
    if (playButton) {
        playButton.addEventListener('click', () => {
            console.log('playButton clicked');
            toggleSignWrap();
        });
    }

    document.getElementById('phone')?.addEventListener('input', function(e) {
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
        if (acknowledgeBackground) acknowledgeBackground.style.display = 'flex';

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
            // Hide the wrap immediately after starting animation
            acknowledgeWrap.style.display = 'none';
        }

        // Hide the background immediately
        if (acknowledgeBackground) acknowledgeBackground.style.display = 'none';

        // Enable scrolling
        document.body.style.overflow = '';
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