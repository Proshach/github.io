
const apiKey = "hNXu2p56bBRXQnBxzntuVFpCxu07T4gxQNQVS9aQ";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        const image = document.createElement("img");
        image.src = data.hdurl;
        document.body.appendChild(image);
    })
    .catch((error) => console.error(error));


var satellites = document.querySelectorAll(".satellite");
var orbit = document.getElementById("orbit");
var orbitRadius = orbit.offsetWidth / 2;
var angles = [0, 1.5, 3];
var speeds = [0.01, 0.03, 0.06];

function moveSatellite(satellite, angle, speed) {
    setInterval(function () {
        angle += speed;
        var xPosition = orbitRadius * Math.cos(angle);
        var yPosition = orbitRadius * Math.sin(angle);
        satellite.style.transform =
            "translate(" + xPosition + "px, " + yPosition + "px)";
    }, 80);
}

for (var i = 0; i < satellites.length; i++) {
    moveSatellite(satellites[i], angles[i], speeds[i]);
}
// Planets Project
// Get references to the button and modal
const explorePlanetsBtn = document.querySelector('#explore-planets-btn');
const explorePlanetsModal = document.querySelector('#explore-planets-modal');
const closeModalBtn = document.querySelector('#close-modal-btn');

// Add a click event listener to the button
explorePlanetsBtn.addEventListener('click', () => {
    // Show the modal when the button is clicked
    explorePlanetsModal.classList.add('show');
});

// Add a click event listener to the close button in the modal
closeModalBtn.addEventListener('click', () => {
    // Hide the modal when the close button is clicked
    explorePlanetsModal.classList.remove('show');
});

// Add a click event listener to the links in the modal to redirect to the selected planet
const planetLinks = explorePlanetsModal.querySelectorAll('a');
planetLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        const planetName = link.textContent.toLowerCase();
        window.location.href = `/${planetName}.html`; // Redirect to the selected planet's page
    });
});

