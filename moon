<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title><html>
    <head>
    <style>
    /* Define the size and position of the circle */
    .circle {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 5px solid black;
      position: relative;
      margin: 100px auto;
    }
    
    /* Define the size and position of the text */
    .text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 24px;
      font-weight: bold;
    }
    
    /* Define the size and position of the images */
    .image {
      width: 50px;
      height: 50px;
      position: absolute;
    }
    
    /* Define the animation for the images */
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      
      to {
        transform: rotate(360deg);
      }
    }
    
    /* Apply the animation to the images */
    .image {
      animation-name: rotate;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    
    /* Pause the animation on hover */
    .image:hover {
      animation-play-state: paused;
    }
    
    </style>
    </head>
    <body>
    <!-- Create a canvas element to draw the circle -->
    <canvas id="canvas" class="circle"></canvas>
    
    <!-- Create a div element to display the text -->
    <div id="text" class="text">Hover over an image to see its name</div>
    
    <!-- Create img elements for each image -->
    <img id="img1" class="image" src="img1.jpg" alt="Image1">
    <img id="img2" class="image" src="img2.jpg" alt="Image2">
    <img id="img3" class="image" src="img3.jpg" alt="Image3">
    <img id="img4" class="image" src="img4.jpg" alt="Image4">
    
    <script>
      // Get the image elements
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

// Define an array of images and their names
var images = [img1, img2, img3];
var names = ["Image1", "Image2", "Image3"];

// Define an array of angles for each image
var angles = [0, Math.PI / 2, Math.PI];

// Define an array of speeds for each image
var speeds = [Math.random() * 10 + 5, Math.random() * 10 + 5, Math.random() * 10 + 5];

// Position each image around the circle using trigonometry
for (var i = 0; i < images.length; i++) {
  var x = width / 2 + radius * Math.cos(angles[i]) - images[i].width / 2;
  var y = height / 2 + radius * Math.sin(angles[i]) - images[i].height / 2;
  
images[i].style.left = x + "px";
images[i].style.top = y + "px";
}

// Animate the images around the circle at random speeds
function animate() {
for (var i = 0; i < images.length; i++) {
angles[i] += speeds[i] / radius;
  
if (angles[i] > Math.PI * 2) {
angles[i] -= Math.PI * 2;
}
  
var x = width / 2 + radius * Math.cos(angles[i]) - images[i].width / 2;
var y = height / 2 + radius * Math.sin(angles[i]) - images[i].height / 2;
  
images[i].style.left = x + "px";
images[i].style.top = y + "px";
}
  
requestAnimationFrame(animate);
}

animate();

    // Get the canvas element and its context
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    
    // Get the width and height of the canvas
    var width = canvas.width;
    var height = canvas.height;
    
    // Get the radius of the circle
    var radius = width / 2;
    
    // Draw the circle
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    
    // Get the text element
    var text = document.getElementById("text");
    
    // Get the image elements
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    var img4 = document.getElementById("img4");
    
    // Define an array of images and their names
    var images = [img1, img2, img3, img4];
    var names = ["Image1", "Image2", "Image3", "Image4"];
    
    // Define an array of angles for each image
    var angles = [0, Math.PI / 2, Math.PI, Math.PI * 3 / 2];
    
    // Position each image around the circle using trigonometry
    for (var i = 0; i < images.length; i++) {
      var x = width / 2 + radius * Math.cos(angles[i]) - images[i].width / 2;
      var y = height / 2 + radius * Math.sin(angles[i]) - images[i].height / 2;
      
    images[i].style.left = x + "px";
    images[i].style.top = y + "px";
    }
    
    // Add event listeners for each image to display its name on hover
    for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function() {
    text.innerHTML = this.alt;
    });
    
    images[i].addEventListener("mouseout", function() {
    text.innerHTML = "Hover over an image to see its name";
    });
    }
    </script>
    </body>
    </html>
    
