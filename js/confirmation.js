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

    canvas = document.getElementById("confetticanvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cx = ctx.canvas.width / 2;
    cy = ctx.canvas.height / 2;

    let confetti = [];
    const confettiCount = 300;
    const gravity = 0.5;
    const terminalVelocity = 5;
    const drag = 0.075;
    const colors = [
        { front: '#ffbe0b', back: '#fb5607' }, // red
        { front: '#ff006e', back: '#8338ec' }, // orange
        { front: '#3a86ff', back: '#5390d9' }
    ];

    //-----------Functions--------------
    resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        cx = ctx.canvas.width / 2;
        cy = ctx.canvas.height / 2;
    }

    randomRange = (min, max) => Math.random() * (max - min) + min

    initConfetti = () => {
        for (let i = 0; i < confettiCount; i++) {
            confetti.push({
                color: colors[Math.floor(randomRange(0, colors.length))],
                dimensions: {
                    x: randomRange(10, 20),
                    y: randomRange(10, 30),
                },
                position: {
                    x: randomRange(0, canvas.width),
                    y: canvas.height - 1,
                },
                rotation: randomRange(0, 2 * Math.PI),
                scale: {
                    x: 1,
                    y: 1,
                },
                velocity: {
                    x: randomRange(-25, 25),
                    y: randomRange(0, -50),
                },
            });
        }
    }

    //---------Render-----------
    render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((confetto, index) => {
            let width = (confetto.dimensions.x * confetto.scale.x);
            let height = (confetto.dimensions.y * confetto.scale.y);

            // Move canvas to position and rotate
            ctx.translate(confetto.position.x, confetto.position.y);
            ctx.rotate(confetto.rotation);

            // Apply forces to velocity
            confetto.velocity.x -= confetto.velocity.x * drag;
            confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
            confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

            // Set position
            confetto.position.x += confetto.velocity.x;
            confetto.position.y += confetto.velocity.y;

            // Delete confetti when out of frame
            if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

            // Loop confetto x position
            if (confetto.position.x > canvas.width) confetto.position.x = 0;
            if (confetto.position.x < 0) confetto.position.x = canvas.width;

            // Spin confetto by scaling y
            confetto.scale.y = Math.cos(confetto.position.y * 0.1);
            ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

            // Draw confetto
            ctx.fillRect(-width / 2, -height / 2, width, height);

            // Reset transform matrix
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        });

        // Fire off another round of confetti
        //   if (confetti.length <= 10) initConfetti();

        window.requestAnimationFrame(render);
    }



    //----------Resize----------
    window.addEventListener('resize', function () {
        resizeCanvas();
    });

    // Confetti!!
    setTimeout(function () {
        initConfetti();
        render();
    }, 400);
});