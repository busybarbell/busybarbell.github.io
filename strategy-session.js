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

            if (isActive) {
                stepDiv.style.display = 'flex'; // Ensure the active step is displayed
                stepDiv.classList.add('active');
                focusFirstInput(stepDiv); // Focus the first input in the active step
                typeText(stepDiv); // Apply typing effect to the <p> tag
            } else {
                stepDiv.style.display = 'none'; // Hide non-active steps immediately
                stepDiv.classList.remove('active');
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

    function handleInputFocus(event) {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            setViewportZoomPrevent();
        }
    }

    function handleInputBlur(event) {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            resetViewport();
        }
    }

    // Attach event listeners
    document.addEventListener('focusin', handleInputFocus);
    document.addEventListener('focusout', handleInputBlur);

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

    // Show the initial step
    showStep(currentStep);
});