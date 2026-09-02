/* AAR Royal Residency - Reviews Page Filter Controller */

function initReviewsFilter() {
    const filterBtns = document.querySelectorAll(".review-filter-btn");
    const reviewCards = document.querySelectorAll(".review-card");

    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.getAttribute("data-category");

            reviewCards.forEach(card => {
                const cardCategory = card.getAttribute("data-category");
                if (category === "all" || cardCategory === category) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

document.addEventListener("DOMContentLoaded", initReviewsFilter);
