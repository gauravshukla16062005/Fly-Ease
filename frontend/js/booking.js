
const flightId = localStorage.getItem("flightId")

document.getElementById("flightInfo").innerHTML =
"Booking Flight ID: " + flightId

function confirmBooking(){}

alert("Flight Booked Successfully ✈️")

document.addEventListener("DOMContentLoaded", () => {
    loadSelectedFlight();
    setupBookingForm();
});

function loadSelectedFlight() {
    const selectedFlight = JSON.parse(localStorage.getItem("flyEaseSelectedFlight"));
    if (!selectedFlight) return;

    const airlineName = document.querySelector(".selected-airline h3");
    const airlineInfo = document.querySelector(".selected-airline p");
    const routeTimes = document.querySelectorAll(".route-block h3");
    const routePlaces = document.querySelectorAll(".route-block p");
    const metaPills = document.querySelectorAll(".meta-pill");
    const fareTotal = document.querySelector(".fare-total strong");

    if (airlineName) airlineName.textContent = selectedFlight.airline;
    if (airlineInfo) airlineInfo.textContent = `${selectedFlight.flightNo} | ${selectedFlight.classType}`;
    if (routeTimes.length >= 2) {
        routeTimes[0].textContent = selectedFlight.departureTime;
        routeTimes[1].textContent = selectedFlight.arrivalTime;
    }
    if (routePlaces.length >= 2) {
        routePlaces[0].textContent = selectedFlight.departurePlace;
        routePlaces[1].textContent = selectedFlight.arrivalPlace;
    }
    if (metaPills.length >= 4) {
        metaPills[0].textContent = selectedFlight.crowd;
        metaPills[1].textContent = selectedFlight.confidence;
        metaPills[2].textContent = selectedFlight.carbon;
        metaPills[3].textContent = selectedFlight.seats;
    }
    if (fareTotal) fareTotal.textContent = selectedFlight.price;
}

function setupBookingForm() {
    const form = document.querySelector(".booking-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = document.getElementById("fullName")?.value.trim();
        const age = document.getElementById("age")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const phone = document.getElementById("phone")?.value.trim();
        const gender = document.getElementById("gender")?.value;
        const seatPref = document.getElementById("seatPref")?.value;
        const specialRequest = document.getElementById("specialRequest")?.value.trim();

        if (!fullName || !age || !email || !phone || !gender || !seatPref) {
            alert("Please fill all required passenger details.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Phone number should be 10 digits.");
            return;
        }

        const selectedFlight = JSON.parse(localStorage.getItem("flyEaseSelectedFlight")) || {};

        const bookingRecord = {
            passengerName: fullName,
            age,
            email,
            phone,
            gender,
            seatPref,
            specialRequest,
            flight: selectedFlight,
            bookingStatus: "Confirmed",
            bookingTime: new Date().toLocaleString(),
            bookingId: `FE${Date.now()}`
        };

        localStorage.setItem("flyEaseBookingRecord", JSON.stringify(bookingRecord));

        const bookingHistory = JSON.parse(localStorage.getItem("flyEaseBookingHistory")) || [];
        bookingHistory.push(bookingRecord);
        localStorage.setItem("flyEaseBookingHistory", JSON.stringify(bookingHistory));

        alert("Booking confirmed successfully!");
        window.location.href = "userDashboard.html";
    });
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}