/* AAR Royal Residency - Main Javascript Controller */

document.addEventListener("DOMContentLoaded", () => {
    // Determine path prefix (for loading components from root folder)
    // Since pages are in root, components are at 'components/navbar.html'
    loadComponent("navbar-container", "components/navbar.html", () => {
        initNavbar();
        highlightActiveLink();
    });
    
    loadComponent("footer-container", "components/footer.html", () => {
        initFooter();
    });
    
    // Global Scroll Animations Init
    initAnimations();
});

// Fallback templates for local file:// protocol
const fallbackComponents = {
    "components/navbar.html": `
        <div class="header-container">
            <div class="container">
                <header class="navbar">
                    <a href="index.html" class="brand-logo">
                        <img src="assets/logo/aar-logo2.png" alt="AAR Royal Residency Logo">
                        <span class="brand-name">AAR Royal Residency</span>
                    </a>
                    <button class="nav-toggle" aria-label="Toggle Menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <nav>
                        <ul class="nav-menu">
                            <li><a href="index.html" class="nav-link">Home</a></li>
                            <li><a href="rooms.html" class="nav-link">Rooms</a></li>
                            <li><a href="restaurant.html" class="nav-link">Restaurant</a></li>
                            <li><a href="facilities.html" class="nav-link">Facilities</a></li>
                            <li><a href="attractions.html" class="nav-link">Attractions</a></li>
                            <li><a href="gallery.html" class="nav-link">Gallery</a></li>
                            <li><a href="contact.html" class="nav-link">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div class="header-cta">
                        <a href="rooms.html" class="btn btn-outline">Book Now</a>
                    </div>
                </header>
            </div>
        </div>
    `,
    "components/footer.html": `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-col footer-about">
                        <h4>AAR Royal Residency</h4>
                        <p>Experience royal comfort and unmatched hospitality in SankaranKovil. Your premium sanctuary of peace and luxury.</p>
                        <div class="footer-social">
                            <a href="https://wa.me/919876543210" class="social-icon" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                            </a>
                            <a href="https://www.instagram.com/aarroyalresidency/" class="social-icon" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm8.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg></a>
                            <a href="https://www.facebook.com/aarroyalresidency/" class="social-icon" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.75l.5-3h-3.25V9.1c0-.87.24-1.6 1.65-1.6h1.75V4.82A23 23 0 0 0 14.35 4C11.86 4 10 5.52 10 8.3V11H7v3h3v8h3.5z"/></svg></a>
                            <a href="https://www.youtube.com/@aarroyalresidency" class="social-icon" aria-label="YouTube"><svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg></a>
                            <a href="https://www.linkedin.com/company/aar-royal-residency/" class="social-icon" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M5.2 3.5A2.2 2.2 0 1 1 .8 3.5a2.2 2.2 0 0 1 4.4 0zM1 8h4.4v14H1V8zm7 0h4.2v1.9h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V22h-4.4v-6.8c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V22H8V8z"/></svg></a>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Quick Links</h4>
                        <ul class="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="rooms.html">Rooms</a></li>
                            <li><a href="restaurant.html">Restaurant</a></li>
                            <li><a href="facilities.html">Facilities</a></li>
                            <li><a href="attractions.html">Attractions</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="footer-col footer-contact">
                        <h4>Contact Us</h4>
                        <div class="contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            <span>SankaranKovil,<br>Tenkasi District,<br>Tamil Nadu - 627756</span>
                        </div>
                        <div class="contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            <span>+91 98765 43210</span>
                        </div>
                        <div class="contact-item">
                            <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
                                <path d="M22 7L12 13 2 7"/>
                            </svg>
                            <span>aarroyalresidency@gmail.com</span>
                        </div>
                    </div>
                    <div class="footer-col">
                        <h4>Our Location</h4>
                        <div class="footer-map-preview">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.7562373848714!2d77.53253537533979!3d9.17644789089087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0697c5e515f141%3A0xacbcb5bfaae263ca!2sAAR%20ROYAL%20RESIDENCY!5e0!3m2!1sen!2sin!4v1787547564498!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2026 AAR Royal Residency. All Rights Reserved.</p>
                    <p>Designed and Maintained by</p>
                    <a href="https://www.adityaskillgate.com" target="_blank" rel="noopener noreferrer">
                        <span style="color: #D4AF37; font-weight: bold;">Aditya Skill Gate IT Solution</span>
                    </a>
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
            console.error("Component loading failed, trying fallback:", error);
            if (fallbackComponents[filePath]) {
                container.innerHTML = fallbackComponents[filePath];
                if (callback) callback();
            } else {
                container.innerHTML = `<div class='error-msg' style='color:#7A0016; text-align:center; padding: 20px;'>Failed to load component ${filePath}</div>`;
            }
        });
}

// Active Nav Link Highlighter
function highlightActiveLink() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";
    
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === pageName || (pageName === "index.html" && href === "./") || (pageName === "" && href === "index.html")) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}
