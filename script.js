const apiKey = "hNXu2p56bBRXQnBxzntuVFpCxu07T4gxQNQVS9aQ";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const image = document.createElement("img");
        image.src = data.hdurl;
        document.body.appendChild(image);
    })
    .catch(error => console.error(error));

// Satellite Animation
var satellites = document.querySelectorAll(".satellite");
var orbit = document.getElementById("orbit");
var orbitRadius = orbit.offsetWidth / 2;
var angles = [0, 1.5, 3];
var speeds = [0.01, 0.03, 0.06];

function moveSatellite(satellite, angle, speed) {
    setInterval(() => {
        angle += speed;
        var xPosition = orbitRadius * Math.cos(angle);
        var yPosition = orbitRadius * Math.sin(angle);
        satellite.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
    }, 80);
}

satellites.forEach((satellite, index) => moveSatellite(satellite, angles[index], speeds[index]));

// Planets Modal Functionality
const explorePlanetsBtn = document.querySelector("#explore-planets-btn");
const explorePlanetsModal = document.querySelector("#explore-planets-modal");
const closeModalBtn = document.querySelector("#close-modal-btn");
const planetMessage = document.querySelector("#planet-message");

// Planet messages
const planetMessages = {
    mercury: "The smallest planet, but full of surprises!",
    venus: "A world of extreme heat and crushing atmosphere.",
    earth: "Our beautiful home planet, full of life!",
    mars: "Have a nice day on the Red Planet!",
    jupiter: "The king of the planets with its massive storms!",
    saturn: "A ringed wonder of our solar system!",
    uranus: "An ice giant that rolls on its side!",
    neptune: "The windiest planet in the solar system!"
};

// Show modal when button is clicked
explorePlanetsBtn.addEventListener("click", () => {
    explorePlanetsModal.style.display = "block";
});

// Close modal when the close button is clicked
closeModalBtn.addEventListener("click", () => {
    explorePlanetsModal.style.display = "none";
    planetMessage.textContent = ""; // Clear message when closing
});

// Display planet messages inside the modal when clicked
const planetLinks = document.querySelectorAll("#explore-planets-modal a");
planetLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const planetName = link.getAttribute("data-planet");
        planetMessage.textContent = planetMessages[planetName] || "Explore this mysterious world!";
    });
});