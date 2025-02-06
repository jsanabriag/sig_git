document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([4.672338410879445, -74.1442758015399], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
});
