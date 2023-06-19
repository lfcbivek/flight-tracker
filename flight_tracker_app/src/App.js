import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

import L from "leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { useMap } from 'react-leaflet/hooks'

const getIcon = () => {
  console.log('here')
  return L.icon({
    iconUrl:'https://cdn-icons-png.flaticon.com/512/0/614.png',
    iconSize: [50]
  })
}
function App() {
  const position = [51.505, -0.09];
  
  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={position}
          icon={getIcon()}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
