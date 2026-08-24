/* AAR Royal Residency - Gallery Category Filters & Lightbox modal controller */

document.addEventListener("DOMContentLoaded", () => {
    initGallery();
});

function initGallery() {
    const tabs = document.querySelectorAll(".gallery-tab");
    const items = document.querySelectorAll(".gallery-item");
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const modalCaption = document.getElementById("lightbox-caption");
    const modalClose = document.getElementById("lightbox-close");
    
    // Category Tab Filtering
    if (tabs.length > 0 && items.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                // Remove active class from all tabs
                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                
                const filterValue = tab.getAttribute("data-filter");
                
                items.forEach(item => {
                    if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                        item.classList.remove("hide");
                    } else {
                        item.classList.add("hide");
                    }
                });
            });
        });
    }

    // Lightbox modal opener
    if (items.length > 0 && modal && modalImg && modalCaption) {
        items.forEach(item => {
            item.addEventListener("click", () => {
                const img = item.querySelector("img");
                const title = item.querySelector(".gallery-overlay h4") ? item.querySelector(".gallery-overlay h4").innerText : "AAR Royal Residency";
                
                if (img) {
                    modalImg.src = img.src;
                    modalCaption.innerText = title;
                    modal.classList.add("show");
                }
            });
        });
        
        // Lightbox Close Trigger
        if (modalClose) {
            modalClose.addEventListener("click", () => {
                modal.classList.remove("show");
            });
        }
        
        // Close when clicking backdrop
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show");
            }
        });
    }
}
