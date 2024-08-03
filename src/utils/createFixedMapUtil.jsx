import L from "leaflet"
import { postcodes } from "../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes";

export const createFixedMapUtil = (mapRef, markerRef, province, postcode) => {
    if (!mapRef.current) {
      const map = L.map('map', {
        center: [parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)],
        zoom: 13
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);
      mapRef.current = map;
      const marker = L.marker([parseFloat(postcodes[province][postcode].latitude), parseFloat(postcodes[province][postcode].longitude)])
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
