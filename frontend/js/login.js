document.addEventListener("DOMContentLoaded", () => {
    animateHeroButtons();
    showWelcomeMessage();
});

function animateHeroButtons() {
    const buttons = document.querySelectorAll(".hero-buttons .btn, .cta .btn");
    buttons.forEach((btn, index) => {
        btn.style.opacity = "0";
        btn.style.transform = "translateY(20px)";

        setTimeout(() => {
            btn.style.transition = "all 0.5s ease";
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
        }, 200 * (index + 1));
    });
}

function showWelcomeMessage() {
    const heroHeading = document.querySelector(".hero h1");
    if (heroHeading) {
        console.log("Welcome to Fly-Ease Home Page");
    }
}