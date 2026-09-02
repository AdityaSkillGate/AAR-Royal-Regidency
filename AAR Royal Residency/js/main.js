/* ================================================================
   AAR Royal Residency - Master JavaScript Application Controller
   Dynamic Component Loader, Language Sync & Global Initialization
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
    // Load dynamic components (Navbar & Footer)
    loadComponent("navbar-container", "components/navbar.html", () => {
        if (typeof initNavbar === "function") initNavbar();
        highlightActiveLink();
        if (window.I18N) {
            I18N.applyTranslations();
            I18N.updateSwitcherUI();
        }
    });
    
    loadComponent("footer-container", "components/footer.html", () => {
        if (typeof initFooter === "function") initFooter();
        if (window.I18N) {
            I18N.applyTranslations();
        }
    });
    
    // Global Animations & Interactive Systems Init
    if (typeof initAnimations === "function") initAnimations();
    if (typeof initChatbot === "function") initChatbot();
    if (typeof initStickyBooking === "function") initStickyBooking();
});

// Fallback templates for local file:// execution without HTTP server
const fallbackComponents = {
    "components/navbar.html": `
        <div class="header-container">
            <div class="container">
                <header class="navbar">
                    <a href="index.html" class="brand-logo" aria-label="AAR Royal Residency Home">
                        <img src="assets/logo/aar-logo2.png" alt="AAR Royal Residency Logo">
                        <div class="brand-text">
                            <span class="brand-name">AAR Royal Residency</span>
                            <span class="brand-sub">★ ★ ★ ★ ★ Luxury Resort</span>
                        </div>
                    </a>
                    <nav id="main-nav" aria-label="Main Navigation">
                        <ul class="nav-menu">
                            <li><a href="index.html" class="nav-link" data-i18n="nav_home">Home</a></li>
                            <li><a href="about.html" class="nav-link" data-i18n="nav_about">About Us</a></li>
                            <li class="nav-item-dropdown">
                                <a href="rooms.html" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                                    <span data-i18n="nav_rooms">Rooms</span>
                                    <svg class="dropdown-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </a>
                                <ul class="nav-dropdown-menu">
                                    <li><a href="rooms.html" class="dropdown-item" data-i18n="nav_all_rooms">All Rooms & Suites</a></li>
                                    <li><a href="restaurant.html" class="dropdown-item" data-i18n="nav_restaurant">Restaurant & Dining</a></li>
                                    <li><a href="facilities.html" class="dropdown-item" data-i18n="nav_facilities">Facilities & Amenities</a></li>
                                </ul>
                            </li>
                            <li><a href="attractions.html" class="nav-link" data-i18n="nav_attractions">Attractions</a></li>
                            <li><a href="gallery.html" class="nav-link" data-i18n="nav_gallery">Gallery</a></li>
                           
                            <li><a href="reviews.html" class="nav-link" data-i18n="nav_reviews">Reviews</a></li>
                            <li><a href="contact.html" class="nav-link" data-i18n="nav_contact">Contact Us</a></li>
                
                        </ul>
                    </nav>
                    <div class="header-actions">
                        <div class="lang-switch-container" role="group" aria-label="Language Switcher">
                            <button class="lang-btn active" data-lang="en" aria-label="Switch to English" title="English">EN</button>
                            <span class="lang-divider">|</span>
                            <button class="lang-btn" data-lang="ta" aria-label="Switch to Tamil" title="தமிழ்">தமிழ்</button>
                        </div>
                        <div class="header-cta">
                            <a href="rooms.html" class="btn btn-primary btn-sm" data-i18n="btn_book_now">Book Now</a>
                        </div>
                    </div>
                    <button class="nav-toggle" aria-label="Toggle Menu" id="nav-toggle-btn" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </header>
            </div>
        </div>
    `,
    "components/footer.html": `
        <footer class="footer">
            <div class="footer-glow-mesh"></div>
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col footer-about">
                        <div class="footer-brand">
                            <img src="assets/logo/aar-logo2.png" alt="AAR Royal Residency" class="footer-logo">
                            <div>
                                <h4 data-i18n="footer_about_title">AAR Royal Residency</h4>
                                <span class="footer-stars">★★★★★ Luxury Resort</span>
                            </div>
                        </div>
                        <p data-i18n="footer_about_desc">Experience 5-star comfort, exquisite culinary delights, and unmatched royal hospitality in SankaranKovil. Your sanctuary of peace near Sri Sankaranarayanar Temple.</p>
                        <div class="footer-social">
                            <a href="https://wa.me/919876543210" class="social-icon" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 0c-6.627 0-12.031 5.405-12.031 12.032 0 2.112.549 4.175 1.593 5.992l-1.593 5.976 6.12-1.606c1.742.946 3.714 1.446 5.911 1.446 6.627 0 12.031-5.405 12.031-12.032s-5.404-12.032-12.031-12.032zm6.656 17.382c-.282.793-1.656 1.531-2.281 1.625-.625.094-1.437.156-2.312-.281-.875-.438-3.031-1.125-5.781-3.625-2.75-2.5-4.594-5.969-4.75-6.219-.156-.25-1.125-1.5-1.125-2.875s.688-2.062 1-2.375c.312-.312.656-.375.875-.375.219 0 .438 0 .625.031.188.031.438-.094.688.531.25.625.875 2.125.938 2.25s.156.281.062.469c-.094.188-.125.281-.25.531-.125.25-.281.562-.375.688-.125.156-.25.312-.094.594.156.281.688 1.156 1.469 1.844 1.031.875 1.875 1.156 2.188 1.312.312.156.5.125.688-.062.188-.188.812-.938 1.031-1.25.219-.312.438-.25.719-.156.281.094 1.781.844 2.094 1 .312.156.5.25.594.406.094.156.094.875-.188 1.688z"/></svg>
                            </a>
                            <a href="https://www.instagram.com/aarroyalresidency/" class="social-icon" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm8.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
                            </a>
                            <a href="https://www.facebook.com/aarroyalresidency/" class="social-icon" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.75l.5-3h-3.25V9.1c0-.87.24-1.6 1.65-1.6h1.75V4.82A23 23 0 0 0 14.35 4C11.86 4 10 5.52 10 8.3V11H7v3h3v8h3.5z"/></svg>
                            </a>
                            <a href="https://www.youtube.com/@aarroyalresidency" class="social-icon" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
                            </a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4 class="footer-title" data-i18n="footer_explore_title">Explore</h4>
                        <ul class="footer-links">
                            <li><a href="index.html" data-i18n="nav_home">Home</a></li>
                            <li><a href="about.html" data-i18n="nav_about">About Us</a></li>
                            <li><a href="rooms.html" data-i18n="nav_rooms">Rooms & Suites</a></li>
                            <li><a href="restaurant.html" data-i18n="nav_restaurant">Restaurant</a></li>
                            <li><a href="facilities.html" data-i18n="nav_facilities">Facilities</a></li>
                            <li><a href="offers.html" data-i18n="nav_offers">Special Offers</a></li>
                            <li><a href="reviews.html" data-i18n="nav_reviews">Guest Reviews</a></li>
                            <li><a href="attractions.html" data-i18n="nav_attractions">Attractions</a></li>
                            <li><a href="gallery.html" data-i18n="nav_gallery">Gallery</a></li>
                            <li><a href="faq.html" data-i18n="nav_faq">FAQ</a></li>
                            <li><a href="contact.html" data-i18n="nav_contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="footer-col footer-contact">
                        <h4 class="footer-title" data-i18n="footer_contact_title">Contact Us</h4>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            </div>
                            <div>
                                <span class="contact-lbl">Address</span>
                                <span data-i18n="footer_address">SankaranKovil, Tenkasi District, Tamil Nadu - 627756</span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            </div>
                            <div>
                                <span class="contact-lbl">Direct Reservations</span>
                                <span><a href="tel:+919876543210" data-i18n="footer_phone">+91 98765 43210</a></span>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
                                    <path d="M22 7L12 13 2 7"/>
                                </svg> 
                            </div>
                            <div>
                                <span class="contact-lbl">Email Support</span>
                                <span data-i18n="footer_email">reservations@aarroyalresidency.com</span>
                            </div>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4 class="footer-title" data-i18n="footer_location_title">Our Location</h4>
                        <div class="footer-map-preview">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7562373848714!2d77.53253537533979!3d9.17644789089087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0697c5e515f141%3A0xacbcb5bfaae263ca!2sAAR%20ROYAL%20RESIDENCY!5e0!3m2!1sen!2sin!4v1787547564498!5m2!1sen!2sin" width="100%" height="160" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                        </div>
                        <p style="font-size: 13px; color: rgba(255,255,255,0.6); margin-top: 10px;">📍 300 meters from Sri Sankaranarayanar Temple</p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-flex">
                        <p><span data-i18n="footer_copyright">© 2026 AAR Royal Residency. All Rights Reserved.</span></p>
                        <div class="footer-legal-links">
                            <a href="privacy.html" data-i18n="footer_privacy">Privacy Policy</a>
                            <span class="divider">•</span>
                            <a href="terms.html" data-i18n="footer_terms">Terms & Conditions</a>
                        </div>
                        <p class="footer-credit" data-i18n="footer_credit">Designed and Maintained by Aditya Skill Gate IT Solution</p>
                    </div>
                </div>
            </div>
        </footer>
    `
};

// Dynamic Component Injector
function loadComponent(containerId, filePath, callback) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // If opening via local file:// protocol, bypass fetch and inject fallback directly
    if (window.location.protocol === "file:") {
        if (fallbackComponents[filePath]) {
            container.innerHTML = fallbackComponents[filePath];
            if (callback) callback();
            return;
        }
    }
    
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status} for ${filePath}`);
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
            if (callback) callback();
        })
        .catch(error => {
            console.warn("Component fetch failed, using offline fallback:", error);
            if (fallbackComponents[filePath]) {
                container.innerHTML = fallbackComponents[filePath];
                if (callback) callback();
            } else {
                container.innerHTML = `<div class='error-msg' style='color:#0D6EFD; text-align:center; padding: 20px;'>Component loaded</div>`;
            }
        });
}

// Active Nav Link Highlighter
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";
    
    const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === pageName || (pageName === "index.html" && href === "./") || (pageName === "" && href === "index.html")) {
            link.classList.add("active");
            const parentDropdown = link.closest(".nav-item-dropdown");
            if (parentDropdown) {
                const mainToggle = parentDropdown.querySelector(".nav-link");
                if (mainToggle) mainToggle.classList.add("active");
            }
        } else {
            link.classList.remove("active");
        }
    });
}
