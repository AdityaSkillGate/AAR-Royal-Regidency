/* ================================================================
   AAR Royal Residency - Sticky Mobile Booking Bar & Floating Hub
   ================================================================ */

function initStickyBooking() {
    initFloatingHub();
}

function initFloatingHub() {
    // Inject floating actions if not present
    if (!document.getElementById("royal-floating-actions")) {
        const hubHTML = `
            <div id="royal-floating-actions" class="floating-actions">
                <a href="https://wa.me/919876543210?text=Hi%20AAR%20Royal%20Residency,%20I%20would%20like%20to%20book%20a%20stay" target="_blank" class="floating-btn whatsapp" aria-label="WhatsApp Booking" id="floating-wa-btn">
                    <svg viewBox="0 0 24 24"><path d="M12.031 0c-6.627 0-12.031 5.405-12.031 12.032 0 2.112.549 4.175 1.593 5.992l-1.593 5.976 6.12-1.606c1.742.946 3.714 1.446 5.911 1.446 6.627 0 12.031-5.405 12.031-12.032s-5.404-12.032-12.031-12.032zm6.656 17.382c-.282.793-1.656 1.531-2.281 1.625-.625.094-1.437.156-2.312-.281-.875-.438-3.031-1.125-5.781-3.625-2.75-2.5-4.594-5.969-4.75-6.219-.156-.25-1.125-1.5-1.125-2.875s.688-2.062 1-2.375c.312-.312.656-.375.875-.375.219 0 .438 0 .625.031.188.031.438-.094.688.531.25.625.875 2.125.938 2.25s.156.281.062.469c-.094.188-.125.281-.25.531-.125.25-.281.562-.375.688-.125.156-.25.312-.094.594.156.281.688 1.156 1.469 1.844 1.031.875 1.875 1.156 2.188 1.312.312.156.5.125.688-.062.188-.188.812-.938 1.031-1.25.219-.312.438-.25.719-.156.281.094 1.781.844 2.094 1 .312.156.5.25.594.406.094.156.094.875-.188 1.688z"/></svg>
                </a>
                <a href="tel:+919876543210" class="floating-btn call" aria-label="Call Front Desk">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </a>
                <button class="floating-btn back-to-top" id="back-to-top-btn" aria-label="Back to top">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                </button>
            </div>

            <!-- Sticky Mobile Booking Bar -->
            <div class="sticky-booking-bar">
                <div class="sticky-bar-info">
                    <span class="sticky-bar-title">AAR Royal Residency</span>
                    <span class="sticky-bar-price">From ₹1,499 / night</span>
                </div>
                <a href="rooms.html" class="btn btn-primary sticky-bar-btn" data-i18n="btn_book_now">Book Now</a>
            </div>
        `;
        document.body.insertAdjacentHTML("beforeend", hubHTML);
    }

    const backToTop = document.getElementById("back-to-top-btn");
    if (backToTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

document.addEventListener("DOMContentLoaded", initFloatingHub);
