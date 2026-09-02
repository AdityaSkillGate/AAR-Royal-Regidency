/* AAR Royal Residency - Animated Stat Counters */

function initCounters() {
    const counterElements = document.querySelectorAll(".counter-number");
    if (!counterElements.length) return;

    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counterElements.forEach(counter => {
                    const target = parseInt(counter.getAttribute("data-target"), 10);
                    const duration = 2000;
                    const stepTime = 20;
                    const totalSteps = duration / stepTime;
                    const increment = target / totalSteps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target.toLocaleString() + (counter.getAttribute("data-suffix") || "");
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current).toLocaleString() + (counter.getAttribute("data-suffix") || "");
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.2 });

    const counterSection = document.querySelector(".counter-section");
    if (counterSection) {
        observer.observe(counterSection);
    }
}

document.addEventListener("DOMContentLoaded", initCounters);
