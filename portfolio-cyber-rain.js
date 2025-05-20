 // Matrix rain effect
        const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Characters for matrix rain
const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const fontSize = 12;
const columns = Math.floor(canvas.width / fontSize);

// Array to store drop positions
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    // Semi-transparent overlay to fade previous characters
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';
    
    // For each column draw a character
    for (let i = 0; i < drops.length; i++) {
        // Select random character
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Reset when height is reached and random factor
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        // Move drop
        drops[i]++;
    }
}

// Update every 35ms
setInterval(draw, 35);

// Add typed text animation for main title
document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('header h1');
    const originalText = title.textContent;
    title.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1000);
});

// Generate text for hacker-like console messages
const consoleMessages = [
    'Initiating system scan...',
    'Bypassing firewalls...',
    'Access granted to sector 7...',
    'Analyzing intrusion vectors...',
    'Downloading threat database...',
    'Deploying countermeasures...',
    'Breaching perimeter security...',
    'Decrypting classified files...',
    '[WARNING] Intrusion detected...',
    'Evading trace routines...',
    'System compromised successfully...',
    'Running rootkit installation...'
];

// Add console messages to the page
function addConsoleMessage() {
    const message = consoleMessages[Math.floor(Math.random() * consoleMessages.length)];
    const consoleOutput = document.createElement('div');
    consoleOutput.className = 'console-message';
    consoleOutput.style.cssText = `
        position: fixed;
        bottom: ${Math.random() * 40 + 10}px;
        left: ${Math.random() * 30 + 10}px;
        color: var(--primary-color);
        font-family: 'Courier New', monospace;
        font-size: 10px;
        opacity: 0;
        z-index: 1000;
        text-shadow: 0 0 3px var(--primary-color);
    `;
    consoleOutput.textContent = message;
    document.body.appendChild(consoleOutput);
    
    // Fade in
    setTimeout(() => {
        consoleOutput.style.transition = 'opacity 0.5s';
        consoleOutput.style.opacity = '1';
    }, 100);
    
    // Fade out and remove
    setTimeout(() => {
        consoleOutput.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(consoleOutput);
        }, 500);
    }, 3000);
}

// Add console messages periodically
setInterval(addConsoleMessage, 4000);

// Add glitch effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.transition = 'transform 0.1s';
        
        const glitchInterval = setInterval(() => {
            const randomX = (Math.random() * 6 - 3) + 'px';
            const randomY = (Math.random() * 6 - 3) + 'px';
            this.style.transform = `translateY(-5px) translate(${randomX}, ${randomY})`;
        }, 50);
        
        this.addEventListener('mouseout', function() {
            clearInterval(glitchInterval);
            this.style.transform = 'translateY(0)';
        }, { once: true });
    });
});

// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Store user preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        document.querySelector('.dark-mode-toggle svg').innerHTML = `
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        `;
    } else {
        localStorage.setItem('darkMode', 'disabled');
        document.querySelector('.dark-mode-toggle svg').innerHTML = `
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        `;
    }
}

// Check for saved user preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle svg').innerHTML = `
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;
}

// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Form submission handler
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission with artificial delay
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.disabled = true;
        submitButton.textContent = 'Đang gửi...';
        
        setTimeout(() => {
            // Reset form and show success message
            this.reset();
            submitButton.textContent = 'Đã gửi thành công!';
            
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            }, 2000);
            
            // Create success notification
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: var(--primary-color);
                color: black;
                padding: 15px 20px;
                border-radius: 0;
                font-family: 'Courier New', monospace;
                z-index: 1000;
                box-shadow: 0 0 15px var(--primary-color);
                transform: translateY(100px);
                transition: transform 0.3s;
            `;
            notification.textContent = 'Tin nhắn của bạn đã được gửi thành công!';
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.transform = 'translateY(0)';
            }, 100);
            
            setTimeout(() => {
                notification.style.transform = 'translateY(100px)';
                setTimeout(() => {
                    document.body.removeChild(notification);
                }, 300);
            }, 3000);
        }, 1500);
    });
}

// Add "SECTOR CLEAR" text that randomly appears on screen
function addRandomText() {
    if (Math.random() > 0.7) {
        const randomText = document.createElement('div');
        randomText.style.cssText = `
            position: fixed;
            top: ${Math.random() * 80 + 10}%;
            left: ${Math.random() * 80 + 10}%;
            color: var(--secondary-color);
            font-family: 'Courier New', monospace;
            font-size: ${Math.random() * 10 + 8}px;
            opacity: 0;
            z-index: -1;
            transform: rotate(${Math.random() * 20 - 10}deg);
            text-shadow: 0 0 5px var(--secondary-color);
        `;
        randomText.textContent = Math.random() > 0.5 ? 'SECTOR CLEAR' : 'SECURE ZONE';
        document.body.appendChild(randomText);
        
        // Fade in
        setTimeout(() => {
            randomText.style.transition = 'opacity 1s';
            randomText.style.opacity = '0.3';
        }, 100);
        
        // Fade out and remove
        setTimeout(() => {
            randomText.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(randomText);
            }, 1000);
        }, 3000);
    }
}

// Add random text periodically
setInterval(addRandomText, 2000);