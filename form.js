// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('multiStepForm');
    const steps = document.querySelectorAll('.form-step');
    const innerBar = document.querySelector('.inner_bar');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentStep = 1;

    function showStep(step) {
        steps.forEach((stepDiv) => {
            stepDiv.classList.toggle('active', stepDiv.dataset.step == step);
        });
        updateProgressBar();
        updateButtons();
    }

    function updateProgressBar() {
        const totalSteps = steps.length;
        const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
        innerBar.style.width = `${progress}%`;
    }

    function updateButtons() {
        prevButton.disabled = currentStep === 1;
        nextButton.disabled = !isCurrentStepValid();
    }

    function isCurrentStepValid() {
        const currentStepDiv = document.querySelector(`.form-step[data-step="${currentStep}"]`);
        return [...currentStepDiv.querySelectorAll('input, textarea')].every(input => input.value.trim() !== '');
    }

    prevButton.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    });

    nextButton.addEventListener('click', () => {
        if (isCurrentStepValid()) {
            if (currentStep < steps.length) {
                currentStep++;
                showStep(currentStep);
            } else {
                form.submit();
            }
        }
    });

    form.addEventListener('input', () => {
        updateButtons();
    });

    showStep(currentStep);
});