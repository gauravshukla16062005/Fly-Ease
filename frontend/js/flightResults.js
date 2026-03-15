
const resultsContainer = document.getElementById("results")

flights.forEach(flight => {

const card = document.createElement("div")
card.className="flight-card"

card.innerHTML=`

<h3>${flight.airline}</h3>
<p>${flight.from} → ${flight.to}</p>
<p>Duration: ${flight.duration}</p>
<h2>₹${flight.price}</h2>

<button onclick="bookFlight(${flight.id})">
Book Now
</button>

`

resultsContainer.appendChild(card)

})

function bookFlight(id){}

localStorage.setItem("flightId",id)
window.location.href="booking.html"

document.addEventListener("DOMContentLoaded", () => {
    setupSearchForm();
    setMinimumDate();
});

function setupSearchForm() {
    const form = document.querySelector(".search-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const source = document.getElementById("source")?.value.trim();
        const destination = document.getElementById("destination")?.value.trim();
        const travelDate = document.getElementById("travelDate")?.value;
        const preference = document.getElementById("preference")?.value;
        const passengers = document.getElementById("passengers")?.value;

        if (!source || !destination || !travelDate || !preference || !passengers) {
            alert("Please fill all fields before searching.");
            return;
        }

        if (source.toLowerCase() === destination.toLowerCase()) {
            alert("Source and destination cannot be the same.");
            return;
        }

        const searchData = {
            source,
            destination,
            travelDate,
            preference,
            passengers,
            searchedAt: new Date().toLocaleString()
        };

        localStorage.setItem("flyEaseSearchData", JSON.stringify(searchData));
        saveSearchHistory(searchData);

        window.location.href = "flightResults.html";
    });
}

function setMinimumDate() {
    const dateInput = document.getElementById("travelDate");
    if (!dateInput) return;

    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
}

function saveSearchHistory(searchData) {
    const existingHistory = JSON.parse(localStorage.getItem("flyEaseSearchHistory")) || [];
    existingHistory.push(searchData);
    localStorage.setItem("flyEaseSearchHistory", JSON.stringify(existingHistory));
}