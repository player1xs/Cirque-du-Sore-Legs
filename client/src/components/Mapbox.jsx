// import { useRef, useEffect, useState} from 'react'
// import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from '!mapbox-gl'

// export default function Mapbox() {


// const mapContainer = useRef(null)
// const map = useRef(null)
// const [lng, setLng] = useState(-0.14189)
// const [lat, setLat] = useState(51.50184)
// const [zoom, setZoom] = useState(7)

// useEffect(() => {
//   if (map.current) return; // initialize map only once
//   map.current = new mapboxgl.Map({
//     container: mapContainer.current,
//     style: 'mapbox://styles/mapbox/streets-v12',
//     center: [lng, lat],
//     zoom: zoom
//   });
// });
// map.current.on('move', () => {
//   setLng(map.current.getCenter().lng.toFixed(4));
//   setLat(map.current.getCenter().lat.toFixed(4));
//   setZoom(map.current.getZoom().toFixed(2));
// });

//   return (
//     <>
//       <div>
//         <div className="sidebar">
//           Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         </div>
//         <div ref={mapContainer} className="map-container" />
//       </div>

//     </>
//   )
// }


/* eslint-disable react/jsx-key */
import { Icon } from 'leaflet'
// import { divIcon, point } from 'leaflet'
import '../styles/components/MapBox.scss'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { useLoaderData } from 'react-router'
import { Link } from 'react-router-dom'



export default function Mapbox() {

  const markers = useLoaderData()
  
  const customIcon = new Icon({
    iconUrl: "../src/images/running_1445114.png",
    iconSize: [35, 35],
  })


  return (
    <MapContainer center={[24.3781, -5.4360]} zoom={1}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />

      {markers.map(marker => (
        <Marker position={[marker.lat, marker.long]} key={marker.id} icon={customIcon}>
          <Popup>
            <div className="popUp">
              <img className="popUp-img" src={marker.image} height="75px"/>
              <Link to ={`/eventIndex/${marker.id}`}>{marker.event_name}</Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}