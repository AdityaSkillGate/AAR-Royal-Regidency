/* ================================================================
   AAR Royal Residency - Modern Apple-Style Lightbox Viewer
   ================================================================ */

let currentImageIndex = 0;
let galleryImages = [];

function initLightbox() {
    // Collect all gallery items
    const items = document.querySelectorAll(".gallery-item img, .room-row-img-wrapper img, .intro-img-card img, .luxury-card-img-wrapper img");
    if (!items.length) return;

    galleryImages = Array.from(items).map(img => ({
        src: img.getAttribute("src"),
        alt: img.getAttribute("alt") || "AAR Royal Residency"
    }));

    // Inject lightbox modal HTML if not already in DOM
    if (!document.getElementById("royal-lightbox")) {
        const modalHTML = `
            <div id="royal-lightbox" class="lightbox-modal">
                <button class="lightbox-close" id="lightbox-close" aria-label="Close">&times;</button>
                <button class="lightbox-arrow prev" id="lightbox-prev" aria-label="Previous">&#10094;</button>
                <div class="lightbox-content">
                    <img id="lightbox-img" src="" alt="Enlarged View">
                    <div id="lightbox-caption" class="lightbox-caption"></div>
                </div>
                <button class="lightbox-arrow next" id="lightbox-next" aria-label="Next">&#10095;</button>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", modalHTML);
    }

    const modal = document.getElementById("royal-lightbox");
    const modalImg = document.getElementById("lightbox-img");
    const modalCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");

    items.forEach((img, idx) => {
        const parent = img.closest(".gallery-item") || img.closest(".room-row-card") || img;
        parent.style.cursor = "pointer";
        parent.addEventListener("click", (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) return;
            currentImageIndex = idx;
            openLightbox(idx);
        });
    });

    function openLightbox(index) {
        if (!galleryImages[index]) return;
        modalImg.src = galleryImages[index].src;
        modalCaption.textContent = galleryImages[index].alt;
        modal.classList.add("active");
    }

    function showNext() {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        openLightbox(currentImageIndex);
    }

    function showPrev() {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        openLightbox(currentImageIndex);
    }

    if (closeBtn) closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    if (nextBtn) nextBtn.addEventListener("click", (e) => { e.stopPropagation(); showNext(); });
    if (prevBtn) prevBtn.addEventListener("click", (e) => { e.stopPropagation(); showPrev(); });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
    });

    document.addEventListener("keydown", (e) => {
        if (!modal.classList.contains("active")) return;
        if (e.key === "Escape") modal.classList.remove("active");
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
    });
}

document.addEventListener("DOMContentLoaded", initLightbox);
