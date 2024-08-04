import L from "leaflet"
import { postcodes } from "../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes";

var icon = L.icon({
  iconUrl: 'map-marker-512.png',

  iconSize:     [38, 95], // size of the icon
});

export const createFixedMapUtil = (mapRef, markerRef, province, postcode) => {
    if (!mapRef.current) {
      const map = L.map('map', {
        center: [parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)],
        zoom: 13
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }, {icon: icon}).addTo(map);
      mapRef.current = map;
      const marker = L.marker([parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)], {icon: icon})
        .addTo(map);
      markerRef.current = marker;

    } else {
      mapRef.current.setView(
        [parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)],
        13
      );
      if (markerRef.current) {
        markerRef.current.setLatLng([parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)]);
      }
    }
};
