document.addEventListener("DOMContentLoaded", () => {
    highlightActiveNav();
    setupSmoothLinks();
    showPageLoadedLog();
});

function highlightActiveNav() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (linkPage === currentPage) {
            link.style.textDecoration = "underline";
            link.style.textUnderlineOffset = "6px";
        }
    });
}

function setupSmoothLinks() {
    const links = document.querySelectorAll('a[href$=".html"]');
    links.forEach(link => {
        link.addEventListener("click", () => {
            sessionStorage.setItem("lastVisitedPage", window.location.pathname);
        });
    });
}

function showPageLoadedLog() {
    console.log(`Fly-Ease page loaded: ${document.title}`);
}