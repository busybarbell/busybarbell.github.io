// Get the canvas element and context
const canvas = document.getElementById("confetticanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let cx = ctx.canvas.width / 2;
let cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 300;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
    { front: '#ffbe0b', back: '#fb5607' }, // yellow to red
    { front: '#ff006e', back: '#8338ec' }, // pink to purple
    { front: '#3a86ff', back: '#5390d9' }  // blue to light blue
];

//-----------Functions--------------
const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cx = ctx.canvas.width / 2;
    cy = ctx.canvas.height / 2;
}

const randomRange = (min, max) => Math.random() * (max - min) + min;

const initConfetti = () => {
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
const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach((confetto, index) => {
        let width = (confetto.dimensions.x * confetto.scale.x);
        let height = (confetto.dimensions.y * confetto.scale.y);

        // Move canvas to position and rotate
        ctx.save(); // Save the current context state
        ctx.translate(confetto.position.x, confetto.position.y);
        ctx.rotate(confetto.rotation);

        // Apply forces to velocity
        confetto.velocity.x -= confetto.velocity.x * drag;
        confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
        confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

        // Set position
        confetto.position.x += confetto.velocity.x;
        confetto.position.y += confetto.velocity.y;

        // Remove confetti that is out of view
        if (confetto.position.y >= canvas.height + height) {
            confetti.splice(index, 1);
        }

        // Loop confetto x position
        if (confetto.position.x > canvas.width) confetto.position.x = 0;
        if (confetto.position.x < 0) confetto.position.x = canvas.width;

        // Spin confetto by scaling y
        confetto.scale.y = Math.cos(confetto.position.y * 0.1);
        ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

        // Draw confetto
        ctx.fillRect(-width / 2, -height / 2, width, height);

        ctx.restore(); // Restore the context to the saved state
    });

    // Only continue rendering until all confetti pieces are gone
    if (confetti.length > 0) {
        window.requestAnimationFrame(render);
    } else {
        // Clear the canvas completely when confetti is gone
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

//----------Resize----------
window.addEventListener('resize', resizeCanvas);

// Confetti!!
setTimeout(() => {
    initConfetti();
    render();
}, 400);