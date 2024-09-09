document.addEventListener('DOMContentLoaded', () => {
    // Get the element where typing effect will be applied
    const typingElement = document.querySelector('.box'); // Adjust if necessary

    // Function to apply typing effect
    function typeText(element, callback) {
        const paragraph = element.querySelector('p');
        if (paragraph) {
            const text = paragraph.dataset.text; // Get the text from data-text attribute
            let index = 0;
            paragraph.textContent = ''; // Clear existing text
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

    // Apply the typing effect
    if (typingElement) {
        typeText(typingElement, () => {
            console.log('Typing effect finished!');
        });
    }
});