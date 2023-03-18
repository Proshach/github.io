

  document.getElementById('nasa-radio').addEventListener('click', function() {
    window.location.href = 'https://apod.nasa.gov/apod/archivepix.html';
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
  
