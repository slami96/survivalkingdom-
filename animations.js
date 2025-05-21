// Animations and Interactive Elements

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Button hover effects
    const buttons = document.querySelectorAll('.button, .nav-button');
    
    buttons.forEach(button => {
        // Add touch and click effects
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.97) translateY(2px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1) translateY(-3px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
        
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.97) translateY(2px)';
        }, { passive: true });
        
        button.addEventListener('touchend', function() {
            this.style.transform = 'scale(1) translateY(-3px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        }, { passive: true });
        
        // Add ripple effect on click
        button.addEventListener('click', createRipple);
        button.addEventListener('touchend', createRipple, { passive: true });
    });
    
    // Animate sections when they come into view
    const animatedSections = document.querySelectorAll('.step, .museum-section');
    
    if (animatedSections.length > 0) {
        // Create IntersectionObserver to detect when sections come into view
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        
        // Observe each animated section
        animatedSections.forEach(section => {
            sectionObserver.observe(section);
        });
    }
    
    // Animate section links
    const sectionLinks = document.querySelectorAll('.section-link');
    
    sectionLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.paddingLeft = '4px';
            this.style.paddingRight = '4px';
        });
        
        link.addEventListener('mouseout', function() {
            this.style.paddingLeft = '';
            this.style.paddingRight = '';
        });
    });
    
    // Animate hero section elements
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('slide-in');
        }, 300);
    }
    
    // Animate social icons in footer
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.classList.add('scale-up');
        }, 300 + (index * 100));
    });
    
    // Add hover effect for logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        logo.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Feature image hover effects
    const featureImages = document.querySelectorAll('.feature-image');
    
    featureImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.03)';
            this.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)';
        });
        
        image.addEventListener('mouseout', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});

// Function to create ripple effect on buttons
function createRipple(event) {
    const button = event.currentTarget;
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    // Get the position for the ripple
    let x, y;
    
    if (event.type === 'touchend' && event.changedTouches && event.changedTouches.length > 0) {
        const touch = event.changedTouches[0];
        const rect = button.getBoundingClientRect();
        x = touch.clientX - rect.left;
        y = touch.clientY - rect.top;
    } else {
        const rect = button.getBoundingClientRect();
        x = event.clientX - rect.left;
        y = event.clientY - rect.top;
    }
    
    // Style the ripple effect
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${x - radius}px`;
    circle.style.top = `${y - radius}px`;
    circle.classList.add('ripple');
    
    // Remove existing ripples
    const ripple = button.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }
    
    // Add the ripple to the button
    button.appendChild(circle);
    
    // Remove the ripple after animation completes
    setTimeout(() => {
        if (circle) {
            circle.remove();
        }
    }, 600);
}

// Add CSS for ripple effect if not in the main CSS file
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .ripple {
            position: absolute;
            background-color: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .button, .nav-button {
            position: relative;
            overflow: hidden;
        }
    </style>
`);

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});
