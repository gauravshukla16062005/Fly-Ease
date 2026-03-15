document.addEventListener("DOMContentLoaded", () => {
    setupAdminQuickActions();
    updateAdminStats();
    highlightFraudAlerts();
});

function setupAdminQuickActions() {
    const buttons = document.querySelectorAll(".admin-action-btn");

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            alert(`${button.textContent} feature will be connected with backend soon.`);
        });
    });

    const addFlightLink = document.querySelector(".panel-header a");
    if (addFlightLink) {
        addFlightLink.addEventListener("click", (e) => {
            e.preventDefault();
            alert("Add New Flight form will be integrated in the backend module.");
        });
    }
}

function updateAdminStats() {
    const bookingHistory = JSON.parse(localStorage.getItem("flyEaseBookingHistory")) || [];
    const statCards = document.querySelectorAll(".admin-stat-card h3");

    if (statCards.length >= 1) {
        statCards[0].textContent = String(bookingHistory.length).padStart(3, "0");
    }
}

function highlightFraudAlerts() {
    const alerts = document.querySelectorAll(".alert-card");

    alerts.forEach((alertCard, index) => {
        alertCard.style.opacity = "0";
        alertCard.style.transform = "translateY(15px)";

        setTimeout(() => {
            alertCard.style.transition = "all 0.4s ease";
            alertCard.style.opacity = "1";
            alertCard.style.transform = "translateY(0)";
        }, 200 * (index + 1));
    });
}