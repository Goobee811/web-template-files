// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Get elements we'll work with
    const ctaButton = document.getElementById('cta-button');
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Add click event to the CTA button
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Thanks for your interest! This would normally navigate to more information.');
            
            // Change button text after click
            this.textContent = 'Thanks!';
            
            // Reset button text after 2 seconds
            setTimeout(() => {
                this.textContent = 'Learn More';
            }, 2000);
        });
    }
    
    // Add animation effects to feature cards
    featureCards.forEach((card, index) => {
        // Add a slight delay for each card to create a cascade effect
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            // Reset the styles in the stylesheet
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        }, index * 150);
        
        // Add hover sound effect (just a demonstration - uncomment if you want audio)
        /* 
        card.addEventListener('mouseenter', function() {
            const hoverSound = new Audio('hover.mp3');
            hoverSound.volume = 0.2;
            hoverSound.play();
        });
        */
    });
    
    // Simple theme toggle demonstration (light/dark mode)
    const createThemeToggle = () => {
        const footer = document.querySelector('footer');
        
        if (footer) {
            // Create toggle button
            const themeToggle = document.createElement('button');
            themeToggle.textContent = '🌙 Toggle Dark Mode';
            themeToggle.style.background = 'transparent';
            themeToggle.style.border = '1px solid #adb5bd';
            themeToggle.style.color = '#adb5bd';
            themeToggle.style.padding = '5px 10px';
            themeToggle.style.borderRadius = '4px';
            themeToggle.style.marginTop = '10px';
            themeToggle.style.cursor = 'pointer';
            
            // Add click handler for the toggle
            themeToggle.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
                
                // Update button text based on current mode
                if (document.body.classList.contains('dark-mode')) {
                    this.textContent = '☀️ Toggle Light Mode';
                    
                    // Add dark mode styles dynamically
                    const darkStyles = `
                        body.dark-mode {
                            background-color: #121212;
                            color: #e0e0e0;
                        }
                        
                        body.dark-mode .hero {
                            background-color: #1e1e1e;
                        }
                        
                        body.dark-mode .hero h2 {
                            color: #e0e0e0;
                        }
                        
                        body.dark-mode .feature-card {
                            background-color: #2d2d2d;
                            color: #e0e0e0;
                        }
                    `;
                    
                    // Add the styles to the document
                    if (!document.getElementById('dark-mode-styles')) {
                        const styleEl = document.createElement('style');
                        styleEl.id = 'dark-mode-styles';
                        styleEl.textContent = darkStyles;
                        document.head.appendChild(styleEl);
                    }
                } else {
                    this.textContent = '🌙 Toggle Dark Mode';
                }
            });
            
            footer.appendChild(themeToggle);
        }
    };
    
    createThemeToggle();
});