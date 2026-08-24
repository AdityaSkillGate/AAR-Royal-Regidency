/* AAR Royal Residency - Navbar Scroll and Responsive Behavior */

function initNavbar() {
    const header = document.querySelector(".header-container");
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".nav-menu");
    
    if (!header) return;

    // Sticky Scroll Effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Hamburger Menu Drawer Toggler
    if (toggle && menu) {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation();
            toggle.classList.toggle("open");
            menu.classList.toggle("open");
        });

        // Close drawer if clicking outside the menu
        document.addEventListener("click", (e) => {
            if (menu.classList.contains("open") && !menu.contains(e.target) && !toggle.contains(e.target)) {
                toggle.classList.remove("open");
                menu.classList.remove("open");
            }
        });
        
        // Prevent close when clicking inside the menu
        menu.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }
}

function initFooter() {
    // Optional footer actions, placeholder mapping or social link configs
}
