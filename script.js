document.addEventListener('DOMContentLoaded', () => {
    // Background Particles
    createParticles();
    
    const entranceMessage = document.getElementById('entrance-message');
    const content = document.getElementById('content');
    
    // Elements for interactions
    const btnNo = document.getElementById('btn-no');
    const btnYes = document.getElementById('btn-yes');
    const noReactionMsg = document.getElementById('no-reaction-msg');
    
    // SVG Elements
    const eyesSad = document.getElementById('eyes-sad');
    const eyesHappy = document.getElementById('eyes-happy');
    const mouthSad = document.getElementById('mouth-sad');
    const mouthHappy = document.getElementById('mouth-happy');
    
    // Containers & Transitions
    const heartCard = document.getElementById('heart-card');
    const catWrapper = document.getElementById('cat-wrapper');
    const messageContainer = document.getElementById('message-container');
    const interactiveCard = document.getElementById('interactive-card');
    const finalMessage = document.getElementById('final-message');
    const buttonGroup = document.getElementById('button-group');
    
    // Entrance Sequence
    setTimeout(() => {
        entranceMessage.style.display = 'none';
        content.classList.remove('hidden');
        setTimeout(() => {
            content.classList.add('visible');
        }, 50);
    }, 4500); // After entrance message finishes

    // "NO" Button Logic
    let hoverCount = 0;
    const moveNoButton = () => {
        hoverCount++;
        const btnRect = btnNo.getBoundingClientRect();
        const containerRect = buttonGroup.getBoundingClientRect();
        
        // Calculate random position within the container bounds mostly, or slightly outside
        const maxMoveX = 80;
        const maxMoveY = 80;
        
        let moveX = (Math.random() - 0.5) * maxMoveX * 2;
        let moveY = (Math.random() - 0.5) * maxMoveY * 2;
        
        btnNo.style.position = 'absolute';
        btnNo.style.transform = `translate(${moveX}px, ${moveY}px)`;
        
        // Change cat expression to sadder
        noReactionMsg.classList.remove('hidden');
    };

    btnNo.addEventListener('mouseover', moveNoButton);
    btnNo.addEventListener('touchstart', (e) => {
        e.preventDefault(); // prevent click
        moveNoButton();
    });

    // "YES" Button Logic
    btnYes.addEventListener('click', () => {
        // Change Cat Expression
        eyesSad.classList.add('hidden');
        mouthSad.classList.add('hidden');
        
        eyesHappy.classList.remove('hidden');
        mouthHappy.classList.remove('hidden');
        
        // Add bounce
        catWrapper.classList.add('happy-bounce');
        
        // Flip Heart
        heartCard.classList.add('flipped');
        
        // Hide interactions, show final message
        messageContainer.classList.add('hidden');
        interactiveCard.classList.add('hidden');
        finalMessage.classList.remove('hidden');
        
        // Celebrate
        createCelebration();
    });
});

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const colors = ['#8ab4f8', '#b8d8ff', '#d0e3ff', '#ffffff'];
    const emojis = ['💙', '✨', '🤍', '🫧'];
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${5 + Math.random() * 10}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.fontSize = `${0.8 + Math.random() * 1.5}rem`;
        particlesContainer.appendChild(heart);
    }
}

function createCelebration() {
    const emojis = ['💙', '✨', '🎉', '💖'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.classList.add('sparkle');
            
            // Randomly use emoji or basic sparkle
            if (Math.random() > 0.5) {
                sparkle.innerText = emojis[Math.floor(Math.random() * emojis.length)];
                sparkle.style.background = 'transparent';
                sparkle.style.boxShadow = 'none';
                sparkle.style.fontSize = `${1 + Math.random()}rem`;
            } else {
                sparkle.style.width = `${5 + Math.random() * 10}px`;
                sparkle.style.height = sparkle.style.width;
            }

            sparkle.style.left = `${Math.random() * 100}vw`;
            sparkle.style.top = `-20px`;
            sparkle.style.animationDuration = `${1 + Math.random() * 2}s`;
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 3000);
        }, i * 50);
    }
}
