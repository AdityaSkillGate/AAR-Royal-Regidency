/* AAR Royal Residency - Scroll Entry & Fade Reveal Animations */

function initAnimations() {
    // Add scroll reveal classes to HTML elements dynamically or target them directly
    const revealElements = document.querySelectorAll(".reveal, .luxury-card, .room-row-card, .facility-card, .attraction-card, .reveal-zoom");
    
    // Set initial transition styles
    revealElements.forEach(el => {
        el.style.opacity = "0";
        if (el.classList.contains("reveal-zoom")) { el.style.transform = "scale(0.8)"; } else { el.style.transform = "translateY(30px)"; }
        el.style.transition = "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    });

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                if (entry.target.classList.contains("reveal-zoom")) { entry.target.style.transform = "scale(1)"; } else { entry.target.style.transform = "translateY(0)"; }
                observer.unobserve(entry.target); // Stop tracking after it animates
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        animationObserver.observe(el);
    });
}

