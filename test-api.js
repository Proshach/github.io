const fetch = require("node-fetch");

const API_KEY =" AIzaSyCQjlWl6QT4uPsYNZt74IH619cPNZNJ43o"
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const requestData = {
    contents: [{
        parts: [{ text: "Explain how AI works" }]
    }]
};

fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));