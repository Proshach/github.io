 /* const satellites = document.querySelectorAll(".satellite");
const orbit = document.getElementById("orbit");
const orbitRadius = orbit.offsetWidth / 2;

function moveSatellite(satellite) {
  const angle = parseFloat(satellite.dataset.angle);
  const speed = parseFloat(satellite.dataset.speed);
  const xPosition = orbitRadius * Math.cos(angle);
  const yPosition = orbitRadius * Math.sin(angle);
  satellite.style.transform =
    "translate(" + xPosition + "px, " + yPosition + "px)";
  satellite.dataset.angle = angle + speed;
  requestAnimationFrame(() => moveSatellite(satellite));
}

function setupSatellites() {
  satellites.forEach(satellite => {
    moveSatellite(satellite);
  });
}


 */
setupSatellites();

document.getElementById("nasa-radio").addEventListener("click", function () {
  window.location.href = "https://apod.nasa.gov/apod/archivepix.html";
});

function sayHello() {
  alert("Click on your favorite planet and discover your secret world !");
}

const apiKey = "hNXu2p56bBRXQnBxzntuVFpCxu07T4gxQNQVS9aQ";
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function fetchImage() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const image = document.createElement("img");
    image.src = data.hdurl;
    document.body.appendChild(image);
  } catch (error) {
    console.error(error);
  }
}

fetchImage();
