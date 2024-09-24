document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const lockedElement = document.getElementById('locked');
    const firstButton = document.getElementById('first-button');
    const playButton = document.querySelector('.play');
    const controls = document.querySelector('.controls');

    const acknowledgeBackground = document.querySelector('.acknowledge_background');
    const signWrap = document.querySelector('.sign_wrap');
    const body = document.body;
    const closeCartel = document.querySelector('.closecartel'); // Reference to close button
    
    // Variables to store scroll position
    let scrollTop = 0;
    
    // Function to disable scrolling and preserve scroll position
    function disableScroll() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        body.style.position = 'fixed';
        body.style.top = `-${scrollTop}px`;
        body.style.width = '100%'; // Prevent horizontal scroll bar appearance
    }
    
    // Function to enable scrolling and restore scroll position
    function enableScroll() {
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        window.scrollTo(0, scrollTop); // Restore scroll position
    }
    
    // Function to toggle visibility of signWrap
    function toggleSignWrap() {
        if (signWrap) {
            const isVisible = signWrap.classList.toggle('visible');
            console.log('signWrap toggled:', isVisible ? 'visible' : 'hidden');
    
            // Enable or disable scroll based on visibility
            if (isVisible) {
                disableScroll();
            } else {
                enableScroll();
            }
        }
    }
    
    // Toggle visibility of signWrap on firstButton click
    if (firstButton) {
        firstButton.addEventListener('click', () => {
            console.log('firstButton clicked');
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
    
    // Close signWrap when closeCartel is clicked
    if (closeCartel) {
        closeCartel.addEventListener('click', () => {
            console.log('closeCartel clicked');
            // Ensure it hides the signWrap by toggling its visibility
            toggleSignWrap();
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

    // Ensure acknowledgment background is hidden on page load
    if (acknowledgeBackground) acknowledgeBackground.style.display = 'none';

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