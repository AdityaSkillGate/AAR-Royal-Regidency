/* ================================================================
   AAR Royal Residency - Modern 5-Star Navbar Controller
   Sticky Glass Header, Mobile Drawer & Touch Dropdowns
   ================================================================ */

function initNavbar() {
    const header = document.querySelector(".header-container");
    const toggle = document.querySelector(".nav-toggle, #nav-toggle-btn");
    const menu = document.querySelector(".nav-menu, #main-nav");
    
    if (!header) return;

    // Sticky Scroll Elevation Effect
    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Mobile Hamburger Menu Drawer
    if (toggle && menu) {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            toggle.classList.toggle("open");
            const navUl = document.querySelector(".nav-menu");
            if (navUl) navUl.classList.toggle("open");
        });

        // Close drawer when clicking outside
        document.addEventListener("click", (e) => {
            const navUl = document.querySelector(".nav-menu");
            if (navUl && navUl.classList.contains("open") && !navUl.contains(e.target) && !toggle.contains(e.target)) {
                toggle.classList.remove("open");
                navUl.classList.remove("open");
            }
        });

        // Close drawer when clicking any link
        const navLinks = document.querySelectorAll(".nav-link:not(.dropdown-toggle), .dropdown-item");
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                const navUl = document.querySelector(".nav-menu");
                if (navUl) {
                    toggle.classList.remove("open");
                    navUl.classList.remove("open");
                }
            });
        });
    }

    // Mobile Dropdown Tap Handler
    const dropdownToggles = document.querySelectorAll(".nav-item-dropdown .dropdown-toggle");
    dropdownToggles.forEach(dropdownToggle => {
        dropdownToggle.addEventListener("click", (e) => {
            if (window.innerWidth <= 1100) {
                e.preventDefault();
                const parent = dropdownToggle.closest(".nav-item-dropdown");
                if (parent) parent.classList.toggle("open");
            }
        });
    });
}

function initFooter() {
    // Footer dynamic handlers if needed
}
