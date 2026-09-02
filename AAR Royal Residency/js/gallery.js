/* ================================================================
   AAR Royal Residency - Modern 5-Star Gallery Category Controller
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    initGallery();
});

function initGallery() {
    const tabs = document.querySelectorAll(".gallery-tab");
    const items = document.querySelectorAll(".gallery-item");
    
    // Category Tab Filtering
    if (tabs.length > 0 && items.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                
                const filterValue = tab.getAttribute("data-filter");
                
                items.forEach(item => {
                    if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                        item.classList.remove("hide");
                        item.style.opacity = "0";
                        item.style.transform = "scale(0.92)";
                        setTimeout(() => {
                            item.style.transition = "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
                            item.style.opacity = "1";
                            item.style.transform = "scale(1)";
                        }, 50);
                    } else {
                        item.classList.add("hide");
                    }
                });
            });
        });
    }
}
