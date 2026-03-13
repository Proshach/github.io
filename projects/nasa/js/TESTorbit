// NASA APOD API

const apiKey = "DEMO_KEY";

const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {

const image = document.createElement("img");

image.src = data.hdurl;

image.alt = "NASA Astronomy Picture of the Day";

document.getElementById("apod-container").appendChild(image);

})

.catch(error => console.log(error));



// Orbit animation

const satellites = document.querySelectorAll(".satellite");

let angles = [0,2,4];

const orbitRadius = 120;

function animate(){

satellites.forEach((sat,i)=>{

angles[i]+=0.01;

let x = orbitRadius*Math.cos(angles[i]);
let y = orbitRadius*Math.sin(angles[i]);

sat.style.transform = `translate(${x}px,${y}px)`;

});

requestAnimationFrame(animate);

}

animate();
