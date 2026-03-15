document.addEventListener("DOMContentLoaded", () => {
    setupRegisterForm();
});

function setupRegisterForm() {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.querySelector('input[name="name"], input[id="name"], input[type="text"]');
        const emailInput = document.querySelector('input[type="email"]');
        const passwordInputs = document.querySelectorAll('input[type="password"]');

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const password = passwordInputs[0] ? passwordInputs[0].value.trim() : "";
        const confirmPassword = passwordInputs[1] ? passwordInputs[1].value.trim() : password;

        if (!name || !email || !password) {
            alert("Please fill all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const registeredUser = {
            name,
            email,
            registeredAt: new Date().toLocaleString()
        };

        localStorage.setItem("flyEaseRegisteredUser", JSON.stringify(registeredUser));

        alert("Registration successful! Redirecting to login page...");
        window.location.href = "login.html";
    });
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}