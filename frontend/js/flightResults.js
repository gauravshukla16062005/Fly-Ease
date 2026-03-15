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

function bookFlight(id){

localStorage.setItem("flightId",id)
window.location.href="booking.html"

}