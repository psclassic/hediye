const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Check if device is touch-enabled
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

yesBtn.addEventListener('click', () => {
    window.location.href = 'surprise.html';
});

// Desktop: move on hover
if (!isTouchDevice) {
    noBtn.addEventListener('mouseenter', () => {
        moveButton();
    });
}

// Desktop: move on click attempt
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveButton();
});

// Mobile/iPad: move on touch start
if (isTouchDevice) {
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });
    
    // Also move when finger gets close (touchmove)
    noBtn.addEventListener('touchmove', (e) => {
        e.preventDefault();
        moveButton();
    });
}

function moveButton() {
    const container = document.querySelector('.buttons-container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noBtn.getBoundingClientRect();
    
    // Ensure we have valid dimensions
    const buttonWidth = buttonRect.width || 100;
    const buttonHeight = buttonRect.height || 50;
    const containerWidth = containerRect.width || window.innerWidth;
    const containerHeight = containerRect.height || 300;
    
    // Calculate safe boundaries
    const maxX = Math.max(0, containerWidth - buttonWidth);
    const maxY = Math.max(0, containerHeight - buttonHeight);
    
    // Generate random position within bounds
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transform = 'translate(0, 0)';
    noBtn.style.transition = 'none'; // Remove transition for instant movement
    
    // Re-enable transition after a short delay for smooth hover effects
    setTimeout(() => {
        noBtn.style.transition = 'all 0.1s ease';
    }, 50);
}
