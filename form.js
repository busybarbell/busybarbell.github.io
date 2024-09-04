document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const form = document.getElementById('multiStepForm');
    const steps = document.querySelectorAll('.form-step');
    const innerBar = document.querySelector('.inner_bar');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentStep = 1;

    // Show the current step
    function showStep(step) {
        steps.forEach((stepDiv) => {
            const isActive = stepDiv.dataset.step == step;
            const isPrevious = stepDiv.classList.contains('active') && !isActive;

            if (isActive) {
                stepDiv.style.display = 'flex'; // Ensure the active step is displayed
                stepDiv.classList.add('active');
                focusFirstInput(stepDiv); // Focus the first input in the active step
            } else {
                stepDiv.classList.remove('active');
                if (isPrevious) {
                    stepDiv.classList.add('previous');
                    setTimeout(() => {
                        stepDiv.style.display = 'none';
                        stepDiv.classList.remove('previous');
                    }, 400); // Match the animation duration
                }
            }
        });

        updateProgressBar();
        updateButtons();
    }

    // Focus the first input element within a given step
    function focusFirstInput(stepDiv) {
        const firstInput = stepDiv.querySelector('input, textarea');
        if (firstInput) {
            firstInput.focus();
        }
    }

    // Update the progress bar
    function updateProgressBar() {
        const totalSteps = steps.length;
        const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
        innerBar.style.width = `${progress}%`;
    }

    // Update navigation buttons
    function updateButtons() {
        prevButton.disabled = currentStep === 1;
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
            currentStep--;
            showStep(currentStep);
        }
    });

    // Handle next button click
    nextButton.addEventListener('click', () => {
        if (isCurrentStepValid()) {
            if (currentStep < steps.length) {
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

    // Show the initial step
    showStep(currentStep);
});