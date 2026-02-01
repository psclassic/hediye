// Replace this URL with your App Store gift link
const APP_STORE_LINK = 'YOUR_APP_STORE_LINK_HERE';

const surpriseBtn = document.getElementById('surpriseBtn');
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Confetti particles
const confetti = [];

function createConfetti() {
    for (let i = 0; i < 150; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * confetti.length,
            color: ['#ffd700', '#ff6b6b', '#4facfe', '#f093fb', '#ffed4e'][Math.floor(Math.random() * 5)],
            tilt: Math.floor(Math.random() * 10) - 10,
            tiltAngleIncrement: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    confetti.forEach((c, i) => {
        ctx.beginPath();
        ctx.lineWidth = c.r / 2;
        ctx.strokeStyle = c.color;
        ctx.moveTo(c.x + c.tilt + c.r, c.y);
        ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
        ctx.stroke();
        
        c.tiltAngle += c.tiltAngleIncrement;
        c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
        c.tilt = Math.sin(c.tiltAngle - i / 3) * 15;
        
        if (c.y > canvas.height) {
            c.x = Math.random() * canvas.width;
            c.y = -20;
            c.tilt = Math.floor(Math.random() * 10) - 10;
        }
    });
    
    requestAnimationFrame(drawConfetti);
}

surpriseBtn.addEventListener('click', () => {
    // Create confetti explosion
    createConfetti();
    drawConfetti();
    
    // Add button animation
    surpriseBtn.style.animation = 'none';
    setTimeout(() => {
        surpriseBtn.style.animation = 'buttonPulse 0.5s ease';
    }, 10);
    
    // Redirect to game info page after a short delay for effect
    setTimeout(() => {
        window.location.href = 'game-info.html';
    }, 500);
});

// Start with some floating confetti
createConfetti();
drawConfetti();
