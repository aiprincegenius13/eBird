const apiKey = "x-ebirdapitoken";
const url = 'https://api.ebird.org/v2/data/obs/geo/recent';

// Fetch request with the API key in the header
fetch(url, {
  method: 'GET',
  headers: {
    "x-ebirdapitoken": apiKey,
    "Content-Type": "application/json"
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
