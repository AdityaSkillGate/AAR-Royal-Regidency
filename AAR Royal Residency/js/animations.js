/* ================================================================
   AAR Royal Residency — 5-Star Interactive Animation Engine
   GSAP-Style Scroll Reveals, 3D Card Tilt, Parallax & Particles
   ================================================================ */

function initAnimations() {
    initScrollReveals();
    init3DCardTilt();
    initHeroParallax();
    initAmbientParticles();
}

/* 1. Scroll Entry & Staggered Reveal Observer */
function initScrollReveals() {
    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-zoom, .facility-card, .luxury-card, .room-row-card, .attraction-card, .offer-card, .mv-card, .why-card, .review-card, .rule-card"
    );

    if (!revealElements.length) return;

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.12
    };

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                setTimeout(() => {
                    entry.target.classList.add("active");
                    entry.target.style.opacity = "1";
                    if (entry.target.classList.contains("reveal-zoom")) {
                        entry.target.style.transform = "scale(1)";
                    } else if (entry.target.classList.contains("reveal-left") || entry.target.classList.contains("reveal-right")) {
                        entry.target.style.transform = "translateX(0)";
                    } else {
                        entry.target.style.transform = "translateY(0)";
                    }
                }, 40 * (idx % 4));

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        if (!el.classList.contains("active")) {
            el.style.opacity = "0";
            if (el.classList.contains("reveal-zoom")) {
                el.style.transform = "scale(0.92)";
            } else if (el.classList.contains("reveal-left")) {
                el.style.transform = "translateX(-35px)";
            } else if (el.classList.contains("reveal-right")) {
                el.style.transform = "translateX(35px)";
            } else {
                el.style.transform = "translateY(28px)";
            }
            el.style.transition = "opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)";
        }
        animationObserver.observe(el);
    });
}

/* 2. Interactive 3D Card Tilt Engine */
function init3DCardTilt() {
    // Only enable on pointer-supported desktop screens
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 992) return;

    const tiltCards = document.querySelectorAll(".luxury-card, .facility-card, .offer-card, .room-row-card, .mv-card, .counter-card, .rating-overview-card");

    tiltCards.forEach(card => {
        card.style.transformStyle = "preserve-3d";
        card.style.perspective = "1000px";

        let isHovered = false;

        card.addEventListener("mouseenter", () => {
            isHovered = true;
            card.style.transition = "transform 0.15s ease-out, box-shadow 0.3s ease";
        });

        card.addEventListener("mousemove", (e) => {
            if (!isHovered) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within card
            const y = e.clientY - rect.top;  // y position within card

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -7; // max 7 deg
            const rotateY = ((x - centerX) / centerX) * 7;  // max 7 deg

            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener("mouseleave", () => {
            isHovered = false;
            card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease";
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        });
    });
}

/* 3. Hero Section Mouse Parallax */
function initHeroParallax() {
    const hero = document.querySelector(".hero-slider, .hero-cinematic");
    if (!hero || window.innerWidth < 992) return;

    const parallaxLayers = hero.querySelectorAll("[data-parallax-depth]");
    const heroContent = hero.querySelector(".hero-content");

    hero.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const moveX = (clientX - centerX) / centerX;
        const moveY = (clientY - centerY) / centerY;

        if (heroContent) {
            heroContent.style.transform = `translate3d(${moveX * -8}px, ${moveY * -8}px, 0)`;
        }

        parallaxLayers.forEach(layer => {
            const depth = parseFloat(layer.getAttribute("data-parallax-depth")) || 10;
            layer.style.transform = `translate3d(${moveX * depth}px, ${moveY * depth}px, 0)`;
        });
    });

    hero.addEventListener("mouseleave", () => {
        if (heroContent) {
            heroContent.style.transform = "translate3d(0, 0, 0)";
            heroContent.style.transition = "transform 0.6s ease-out";
        }
        parallaxLayers.forEach(layer => {
            layer.style.transform = "translate3d(0, 0, 0)";
            layer.style.transition = "transform 0.6s ease-out";
        });
    });
}

/* 4. Ambient Floating Particle Canvas */
function initAmbientParticles() {
    const canvas = document.getElementById("hero-particles-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    window.addEventListener("resize", () => {
        if (!canvas.parentElement) return;
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
    });

    const particles = [];
    const particleCount = Math.min(width > 768 ? 40 : 18, 50);

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 2 + 1,
            color: i % 2 === 0 ? "rgba(13, 110, 253, 0.4)" : "rgba(255, 183, 3, 0.35)",
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4 - 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

document.addEventListener("DOMContentLoaded", initAnimations);
