const flightId = localStorage.getItem("flightId")

document.getElementById("flightInfo").innerHTML =
"Booking Flight ID: " + flightId

function confirmBooking(){

alert("Flight Booked Successfully ✈️")

}