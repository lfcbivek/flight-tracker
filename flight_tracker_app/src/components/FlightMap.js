import React from 'react';

import L from "leaflet";
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import { useMap } from 'react-leaflet/hooks'

const position = [40.7128, -74.0060];
const getIcon = () => {
    console.log('here')
    return L.icon({
      iconUrl:'https://cdn-icons-png.flaticon.com/512/0/614.png',
      iconSize: [50]
    })
}

const handleMarkerClick = () => {
    console.log('click')
}
class FlightMap extends React.Component {
    render() {
        return(
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker 
                    position={position}
                    icon={getIcon()}
                >
                </Marker>
            </MapContainer>
        )
    }
}

export default FlightMap;