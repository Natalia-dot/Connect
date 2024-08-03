import L from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './pruebas.css'
import { postcodes } from '../../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes';

export const ByIdMap = ({ postcode, province, ccaa }) => {
// console.log(province, ccaa, postcode)

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const centerMap = () => {
    if (mapRef.current) {
      mapRef.current.setView(
        [
          parseFloat(postcodes[ccaa][province][postcode].latitude),
          parseFloat(postcodes[ccaa][province][postcode].longitude),
        ],
        15
      );
    }
  };

  useEffect(() => {
    const createMap = () => {
      if (!mapRef.current) {
        const map = L.map('map', {
          center: [
            parseFloat(postcodes[ccaa][province][postcode]?.latitude),
            parseFloat(postcodes[ccaa][province][postcode]?.longitude),
          ],
          zoom: 13,
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(map);
        mapRef.current = map;
        const marker = L.marker([
          parseFloat(postcodes[ccaa][province][postcode].latitude),
          parseFloat(postcodes[ccaa][province][postcode].longitude),
        ]).addTo(map);
        markerRef.current = marker;
      } else {
        centerMap(); // Center the map if it already exists
      }
    };

    createMap();
  }, [ccaa, province, postcode]);

  return (
    <div className='container'>
      <div className='background'></div>
      <div id='map'></div>
      <button onClick={centerMap}>Center Map</button>
    </div>
  );
};
