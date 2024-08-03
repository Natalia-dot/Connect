// import { useEffect, useState, useRef } from "react";
// import "./pruebas.css";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { postcodes } from "../../../data/noAbrirElArchivoEsDemasiadoLargo/shortPostcodes";

// export const MapCreation = () => {
//   const [province, setProvince] = useState("Almeria");
//   const [postcode, setPostcode] = useState("");
//   const mapRef = useRef(null);
//   const markerRef = useRef(null);

//   useEffect(() => {
//     const createMap = () => {
//       if (
//         province &&
//         postcode &&
//         postcodes[province] &&
//         postcodes[province][postcode]
//       ) {
//         //solo si existen todos los datos que necesitamos!!
//         if (!mapRef.current) {
//           //si NO HAY un mapa creado (mapRef.current se dirige al estado ACTUAL de mapRef),
//           //solo si es null entramos en esta primera clausula
//           //vamos a inicializar una instancia de leaflet.map en el div con el id 'map'. Vamos a meterle un
//           //centro, que son las coordenadas latitud y longitud del codigo postal seleccionado
//           const map = L.map("map", {
//             center: [
//               parseFloat(postcodes[province][postcode].latitude),
//               parseFloat(postcodes[province][postcode].longitude),
//             ],
//             zoom: 15,
//           });
//           //esto es solamente la atribucion a leaflet, gracias leaflet <3
//           L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//             attribution: "© OpenStreetMap contributors",
//           }).addTo(map);

//           // guardamos la instancia del mapa en el current mapRef, para poder juzgar despues si hay que crear
//           //una nueva instancia o solo modificar el mapa que ya hay
//           mapRef.current = map;

//           // este es el puntero lindo azulin que hay en el mapa. Decidi ponerlo porque hay veces que los codigos
//           //postales estan tan cerca que el mapa no cambia de posicion. Con esto, al menos cambia el puntero.
//           //se le asignan las coordenadas del codigo postal y se anade al mapa (addTo(map))
//           //Luego al igual que con el mapa, lo guardamos como primera instancia de markerRef
//           const marker = L.marker([
//             parseFloat(postcodes[province][postcode].latitude),
//             parseFloat(postcodes[province][postcode].longitude),
//           ]).addTo(map);
//           markerRef.current = marker;
//         } else {
//           // esto se hace si SI hay mapRef.current, que es settear la vista, es decir, actualizar la vista del mapa
//           mapRef.current.setView(
//             [
//               parseFloat(postcodes[province][postcode].latitude),
//               parseFloat(postcodes[province][postcode].longitude),
//             ],
//             15
//           );

//           //y se actualiza el markerRef si en efecto hay markerRef. Lo que hace es un metodo de set lat(itude) y
//           // LoNGitude.
//           if (markerRef.current) {
//             markerRef.current.setLatLng([
//               parseFloat(postcodes[province][postcode].latitude),
//               parseFloat(postcodes[province][postcode].longitude),
//             ]);
//           }
//         }
//       }
//     };

//     createMap();
//     //y al final de todo llamamos a la funcion que hace todo esto, y tiene dependencias en postcode, para que se
//     //actualice cada vez que cambia
//   }, [postcode]);
//   console.log(Object.keys(postcodes));
//   return (
//     <>
//       <div className="background">
//         <select
//           name="province"
//           id="province"
//           onChange={(e) => setProvince(e.target.value)}
//         >
//           {Object.keys(postcodes)
//             .sort((a, b) => a.localeCompare(b))
//             .map((province) => (
//               <option key={province} value={province}>
//                 {province}
//               </option>
//             ))}
//         </select>

//         {province && postcodes[province] && (
//           <select
//             name="postcodes"
//             id="postcode"
//             onChange={(e) => setPostcode(e.target.value)}
//           >
//             {Object.entries(postcodes[province])
//               .sort((a, b) => a - b)
//               .map(([postcode]) => (
//                 //postcode esta entre corchetes porque es destructuring de un array. Object.entries te da una
//                 //serie de arrays con estructura [clave: valor], y al hacer destructuring de esos pares,
//                 //sobreentiende que si solo se pone un elemento, sera del primero
//                 <option key={postcode} value={postcode}>
//                   {postcode}
//                 </option>
//               ))}
//           </select>
//         )}
//         <div id="map"></div>
//       </div>
//     </>
//   );
// };
import React from 'react'
import { ReactSVG } from 'react-svg'
import chatIcon from '../../assets/svg/chatIcon.svg';

export const MapCreation = () => {
  return (
    <ReactSVG
    src={chatIcon}
    id="svg"
  />
  )
}
