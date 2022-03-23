import leaflet from "leaflet";

export function initMap() {
    let mapContainer = document.querySelector(".map");

    if (mapContainer) {
        let map = L.map(mapContainer);
        let markers = [];

        let marker = L.icon({
            iconUrl:
                "../../themes/depcore-theme/assets/images/icons/marker.png",
            iconSize: [50, 50], // size of the icon
            iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
            popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
        });

        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            subdomains: ["a", "b", "c"],
        }).addTo(map);

        function loadMap() {
            let latlon = [51.09744, 17.15978];
            let office = [51.10318, 17.03863];
            let mapCenter = [51.106136, 17.101665];
            map.setView(mapCenter, 13);
            L.marker(latlon, { icon: marker })
                .addTo(map)
                .bindPopup(
                    "Buena Vista Media Group <br>ul. Laskowicka 7 <br>51-523 Wrocław"
                );
            L.marker(office, { icon: marker })
                .addTo(map)
                .bindPopup(
                    `Podwale 62A/215<br> 50-010 Wrocław<br> +48 535 359 554 <br>+48 535 359 889`
                );
        }

        loadMap();
    }
}
