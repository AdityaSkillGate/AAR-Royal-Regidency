/* AAR Royal Residency - FAQ Accordion Script */

function initFAQ() {
    const faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        if (question) {
            question.addEventListener("click", () => {
                const isActive = item.classList.contains("active");
                
                // Close other items in the same group
                const parentGroup = item.closest(".faq-group") || document;
                parentGroup.querySelectorAll(".faq-item").forEach(other => {
                    other.classList.remove("active");
                });

                if (!isActive) {
                    item.classList.add("active");
                }
            });
        }
    });

    // Category filter tabs on FAQ page
    const filterTabs = document.querySelectorAll(".faq-filter-tab");
    filterTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            filterTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const filter = tab.getAttribute("data-filter");

            document.querySelectorAll(".faq-group").forEach(group => {
                if (filter === "all" || group.getAttribute("data-category") === filter) {
                    group.style.display = "block";
                } else {
                    group.style.display = "none";
                }
            });
        });
    });

    // Search bar for FAQ
    const faqSearchInput = document.getElementById("faq-search");
    if (faqSearchInput) {
        faqSearchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            faqItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = "block";
                    if (query.length > 2) {
                        item.classList.add("active");
                    }
                } else {
                    item.style.display = "none";
                }
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", initFAQ);
