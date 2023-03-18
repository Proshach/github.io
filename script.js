function sayHello() {
  alert("Hello, world!");
}

<script>
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
</script>
