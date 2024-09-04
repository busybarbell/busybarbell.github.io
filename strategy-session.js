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
    let currentStep = 1;
    let step6Visited = false; // Track if step 6 has been visited
    let isForwardMove = true; // Track if the user is moving forward

    // Timer variables
    let timeRemaining = 9 * 60; // 9 minutes in seconds

    // Show the current step
    function showStep(step) {
        steps.forEach((stepDiv) => {
            const isActive = stepDiv.dataset.step == step;

            if (isActive) {
                stepDiv.style.display = 'flex'; // Ensure the active step is displayed
                stepDiv.classList.add('active');
                typeText(stepDiv); // Apply typing effect to the <p> tag

                // Apply color changes and show/hide elements for specific steps
                if (step === 6) {
                    innerBar.style.backgroundColor = '#ffa600'; // Change inner bar color
                    if (barAccent) {
                        barAccent.style.backgroundColor = '#ffb84d'; // Change bar accent color
                    }
                    const picture = document.querySelector('.picture');
                    if (picture) {
                        picture.src = 'https://i.postimg.cc/mD33VsKq/surprised.webp'; // Change image URL
                    }
                    if (motivation) {
                        if (!step6Visited) {
                            motivation.style.display = 'block'; // Show motivation element
                            step6Visited = true; // Mark step 6 as visited
                        }
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

        updateProgressBar();
        updateButtons();
    }

    // Update the progress bar
    function updateProgressBar() {
        const totalSteps = steps.length;
        const progress = currentStep === 1 ? 8 : ((currentStep - 1) / (totalSteps - 1)) * 92 + 8;
        innerBar.style.width = `${progress}%`;

        // Create a bubble effect at the end of the progress bar if moving forward
        if (isForwardMove) {
            createBubble();
        }
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
            nextButton.textContent = 'COMPLETE PROFILE & CONTINUE'; // Change button text on the last step
        } else {
            nextButton.textContent = 'CONTINUE'; // Default button text
        }

        nextButton.disabled = !isCurrentStepValid();
    }

    // Check if the current step is valid
    function isCurrentStepValid() {
        const currentStepDiv = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        return [...currentStepDiv.querySelectorAll('input, textarea')].every(input => input.value.trim() !== '');
    }

    // Handle previous button click
    prevButton.addEventListener('click', () => {
        if (currentStep > 1) {
            isForwardMove = false; // Moving backward
            currentStep--;
            showStep(currentStep);
        }
    });

    // Handle next button click
    nextButton.addEventListener('click', () => {
        if (isCurrentStepValid()) {
            if (currentStep < steps.length) {
                isForwardMove = true; // Moving forward
                currentStep++;
                showStep(currentStep);
            } else {
                form.submit(); // Submit the form if it’s the last step
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
            nextButton.click(); // Simulate a click on the next button
        }
    });

    // Handle viewport zoom prevention
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
    function typeText(stepDiv) {
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
                }
            }, 10); // Adjust typing speed here (in milliseconds)
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
            countdownElement.textContent = '00:00';
        } else {
            countdownElement.textContent = `${formatTime(timeRemaining)}`;
            timeRemaining--;
        }
    }

    // Initial countdown display
    countdownElement.textContent = `${formatTime(timeRemaining)}`;

    // Update the countdown every second
    const timerInterval = setInterval(updateCountdown, 1000);

    // Show the initial step
    showStep(currentStep);

    // Add number-only validation to the age input field in step 1
    const ageInput = document.querySelector('.form-step[data-step="1"] input[name="age"]');
    if (ageInput) {
        ageInput.addEventListener('input', (event) => {
            const value = event.target.value;
            event.target.value = value.replace(/[^0-9]/g, ''); // Allow only numbers
        });
    }
});