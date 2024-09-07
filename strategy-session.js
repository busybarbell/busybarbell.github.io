document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const form = document.getElementById('multiStepForm');
    const steps = document.querySelectorAll('.form-step');
    const innerBar = document.querySelector('.inner_bar');
    const barAccent = document.querySelector('.bar_accent'); // Make sure you have this element
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const countdownElement = document.getElementById('countdown'); // Countdown element
    const motivation = document.querySelector('.motivation'); // Motivation element
    const clock = document.querySelector('.clock'); // Clock element
    const asking = document.querySelector('.asking'); // Element to keep visible
    const cta = document.getElementById('cta'); // Element to keep visible
    const ctaWrap = document.querySelector('.cta-wrap'); // Element for padding adjustments
    const formStep = document.querySelector('.form-step'); // Element for gap adjustments
    const header = document.querySelector('header'); // Header element

    // Audio element
    const audio = new Audio('progress.mp3'); // Replace with your audio file path

    let currentStep = 1;
    let step6Visited = false; // Track if step 6 has been visited
    let isForwardMove = true; // Track if the user is moving forward
    let typingEffectFinished = false; // Track if typing effect is finished

    // Timer variables
    let timeRemaining = 8 * 60; // 8 minutes in seconds
    let rotationDegree = 0; // Track the rotation angle
    let timerInterval; // Variable to store the timer interval ID

    // Default fill percentage for progress bar
    const initialFill = 0; // Adjust this value if you want an initial fill

    // Function to check if the device is mobile
    function isMobile() {
        return window.matchMedia('(max-width: 768px)').matches; // Adjust the width as needed
    }

    // Show the current step
    function showStep(step) {
        steps.forEach((stepDiv) => {
            const isActive = stepDiv.dataset.step == step;

            if (isActive) {
                stepDiv.style.display = 'flex'; // Ensure the active step is displayed
                stepDiv.classList.add('active');
                // Reset typing effect status and apply typing effect
                typingEffectFinished = false; 
                typeText(stepDiv, () => {
                    typingEffectFinished = true;
                    updateButtons(); // Enable the Next button when typing effect is finished
                });

                // Apply color changes and show/hide elements for specific steps
                if (step === 6) {
                    innerBar.style.backgroundColor = '#ffa600'; // Change inner bar color
                    if (barAccent) {
                        barAccent.style.backgroundColor = '#ffb84d'; // Change bar accent color
                    }
                    if (motivation) {
                        if (!step6Visited) {
                            motivation.style.display = 'block'; // Show motivation element
                            motivation.textContent = 'Great start!'; // Motivation text for step 6
                            step6Visited = true; // Mark step 6 as visited
                        }
                    }
                } else if (step === 10) {
                    if (motivation) {
                        motivation.style.display = 'block'; // Show motivation element
                        motivation.textContent = 'Doing great!'; // Motivation text for step 10
                    }
                } else if (step === 14) {
                    if (motivation) {
                        motivation.style.display = 'block'; // Show motivation element
                        motivation.textContent = 'Almost done!'; // Motivation text for step 14
                    }
                } else if (step === 18) {
                    if (motivation) {
                        motivation.style.display = 'block'; // Show motivation element
                        motivation.textContent = 'Last step!'; // Motivation text for step 18
                    }
                } else {
                    if (motivation) {
                        motivation.style.display = 'none'; // Hide motivation element for other steps
                    }
                }
            } else {
                stepDiv.style.display = 'none'; // Hide non-active steps immediately
                stepDiv.classList.remove('active');
            }
        });

        // Hide or show header based on the current step
        if (header) {
            if (currentStep <= 2) {
                header.style.display = 'none'; // Hide header for the first two steps
            } else {
                header.style.display = 'flex'; // Show header from the third step onward
            }
        }

        updateProgressBar();
        updateButtons();
    }

    // Update the progress bar
    function updateProgressBar() {
        const totalSteps = 19; // Total number of steps
        const stepsCompleted = currentStep - 1; // Steps completed before the current step

        // Calculate the progress excluding the initial fill
        let progress = ((stepsCompleted / (totalSteps - 1)) * (100 - initialFill)) + initialFill;

        // Set the progress bar width
        innerBar.style.width = `${progress}%`;

        // Create a bubble effect at the end of the progress bar if moving forward
        if (isForwardMove) {
            createBubble();
        }

        // Play sound when the inner bar grows
        audio.pause(); // Ensure audio is paused before setting it to start from the beginning
        audio.currentTime = 0;
        audio.play();
    }

    // Create a bubble animation at the end of the progress bar
    function createBubble() {
        // Remove any existing bubbles
        const existingBubbles = innerBar.querySelectorAll('.bubble');
        existingBubbles.forEach(bubble => bubble.remove());

        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Set the bubble's border color to match the inner bar's background color
        const innerBarColor = getComputedStyle(innerBar).backgroundColor;
        bubble.style.borderColor = innerBarColor;
        
        // Position the bubble at the end of the progress bar
        bubble.style.right = `0`;
        bubble.style.transform = `translateX(50%)`; // Center the bubble at the edge

        innerBar.appendChild(bubble);

        // Remove the bubble after animation to keep the DOM clean
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    // Update navigation buttons
    function updateButtons() {
        prevButton.disabled = currentStep === 1;

        if (currentStep === steps.length) {
            nextButton.textContent = 'CONTINUE'; // Default button text for the last step
        } else {
            nextButton.textContent = 'CONTINUE'; // Default button text
        }

        // Disable the Next button on the first two steps until typing effect is complete
        if (currentStep <= 2 && !typingEffectFinished) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = !isCurrentStepValid();
        }
    }

    // Check if the current step is valid
    function isCurrentStepValid() {
        const currentStepDiv = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        const inputs = [...currentStepDiv.querySelectorAll('input, textarea')];
        if (inputs.length === 0) {
            // If there are no inputs, the step is considered valid
            return true;
        }
        // Check if all required fields are filled (if there are any input fields)
        return inputs.every(input => {
            if (input.hasAttribute('required')) {
                return input.value.trim() !== ''; // Ensure value is not empty
            }
            return true;
        });
    }

    // Handle previous button click
    prevButton.addEventListener('click', () => {
        if (currentStep > 1) {
            isForwardMove = false; // Moving backward
            currentStep--;
            showStep(currentStep);
            typingEffectFinished = false; // Reset typing effect status
        }
    });

    // Handle next button click
    nextButton.addEventListener('click', () => {
        if (isCurrentStepValid()) {
            if (currentStep < steps.length) {
                isForwardMove = true; // Moving forward
                currentStep++;
                showStep(currentStep);
                typingEffectFinished = false; // Reset typing effect status
            } else {
                // Fill the progress bar to 100% before form submission
                innerBar.style.width = '100%';
                // Slight delay to ensure progress bar completes filling
                setTimeout(() => form.submit(), 500);
            }
        }
    });

    // Update buttons on input
    form.addEventListener('input', () => {
        updateButtons();
    });

    // Handle Enter key press
    form.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            nextButton.click(); // Trigger the Next button click
        }
    });

    // Update viewport zoom prevention for mobile
    function setViewportZoomPrevent() {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0');
        } else {
            const newViewportMeta = document.createElement('meta');
            newViewportMeta.name = 'viewport';
            newViewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0';
            document.head.appendChild(newViewportMeta);
        }
    }

    function resetViewport() {
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    }

    // Function to type text in the <p> tag
    function typeText(stepDiv, callback) {
        const paragraph = stepDiv.querySelector('p');
        if (paragraph) {
            const text = paragraph.dataset.text;
            let index = 0;
            paragraph.textContent = '';
            const interval = setInterval(() => {
                paragraph.textContent += text[index];
                index++;
                if (index >= text.length) {
                    clearInterval(interval);
                    if (callback) {
                        callback(); // Execute callback after typing effect is complete
                    }
                }
            }, 10); // Adjust typing speed here (in milliseconds)
        } else if (callback) {
            callback(); // Execute callback if there's no text to type
        }
    }

    // Countdown Timer
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        // Show "0:xx" format if minutes are zero
        return `${minutes === 0 ? '0' : String(minutes).padStart(1, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function updateCountdown() {
        // Ensure countdown doesn't go below zero and display 0:00
        if (timeRemaining <= 0) {
            countdownElement.textContent = '0:00';
            clearInterval(timerInterval); // Stop the timer
        } else {
            countdownElement.textContent = `${formatTime(timeRemaining)}`;
            timeRemaining--;
        }
    }

    function rotateClock() {
        if (timeRemaining > 0) {
            rotationDegree = (rotationDegree + 90); // Increment by 90 degrees and keep within 360 degrees
            if (clock) {
                clock.style.transform = `rotate(${rotationDegree}deg)`;
            }
        }
    }

    // Initial countdown display
    countdownElement.textContent = `${formatTime(timeRemaining)}`;

    // Update the countdown and rotate the clock every second
    timerInterval = setInterval(() => {
        updateCountdown();
        rotateClock();
    }, 1000);

    // Show the initial step
    showStep(currentStep);

    // Add number-only validation to the age input field in step 1
    const ageInput = document.querySelector('.form-step[data-step="1"] input[name="age"]');
    if (ageInput) {
        // Convert the input type to "text" and add validation for numeric input
        ageInput.setAttribute('type', 'text');
        ageInput.addEventListener('input', (event) => {
            const value = event.target.value;
            event.target.value = value.replace(/[^0-9]/g, ''); // Allow only numbers
        });
    }

    // Mobile-specific focus event handler
    if (isMobile()) {
        form.addEventListener('focusin', (event) => {
            // Check if the focused element is an input or textarea
            if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
                // Hide the header and <h2> elements
                if (header) {
                    header.style.display = 'none';
                }
                const h2Elements = document.querySelectorAll('h2');
                h2Elements.forEach(h2 => {
                    h2.style.display = 'none';
                });

                // Scroll the .asking and #cta into view
                if (asking && cta) {
                    // Get the height of the viewport excluding the keyboard
                    const viewportHeight = window.innerHeight;
                    // Calculate the required scroll position to keep .asking and #cta visible
                    const askingRect = asking.getBoundingClientRect();
                    const ctaRect = cta.getBoundingClientRect();

                    const scrollY = window.scrollY || window.pageYOffset;
                    const newScrollY = Math.max(
                        scrollY,
                        askingRect.top + scrollY - viewportHeight + askingRect.height,
                        ctaRect.top + scrollY - viewportHeight + ctaRect.height
                    );

                    window.scrollTo({ top: newScrollY, behavior: 'smooth' });
                }

                // Adjust the layout when the keyboard is open
                if (ctaWrap && formStep) {
                    // Check if the viewport height is reduced, indicating the keyboard is open
                    const vh = window.innerHeight * 0.01;
                    document.documentElement.style.setProperty('--vh', `${vh}px`);

                    if (window.innerHeight < document.documentElement.clientHeight) {
                        // Keyboard is open
                        ctaWrap.style.paddingTop = '1rem';
                        ctaWrap.style.paddingBottom = '1rem';
                        formStep.style.gap = '1rem';
                    } else {
                        // Keyboard is closed
                        ctaWrap.style.paddingTop = '';
                        ctaWrap.style.paddingBottom = '';
                        formStep.style.gap = '';
                    }
                }
            }
        });

        form.addEventListener('focusout', (event) => {
            // Check if the focused element is an input or textarea
            if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
                // Show the header and <h2> elements again
                if (header) {
                    header.style.display = 'flex';
                }
                const h2Elements = document.querySelectorAll('h2');
                h2Elements.forEach(h2 => {
                    h2.style.display = '';
                });
            }
        });
    }

    // Disable word suggestions and autocorrect on inputs
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.setAttribute('autocorrect', 'off');
        input.setAttribute('spellcheck', 'false');
    });

    // Call this function initially to prevent viewport zoom
    setViewportZoomPrevent();
});
