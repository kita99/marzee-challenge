import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

let DefaultIcon = L.icon({
            ...L.Icon.Default.prototype.options,
            iconUrl: icon,
            iconRetinaUrl: iconRetina,
            shadowUrl: iconShadow
        });
        L.Marker.prototype.options.icon = DefaultIcon;


export default function LeafletMap({ users }) {
  return (
    <Map
      center={users.length === 1 ? [users[0].address.geo.lat, users[0].address.geo.lng] : [0, 0]}
      zoom={users.length === 1 ? 8 : 2}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {users.map(user => {
        var position = [user.address.geo.lat, user.address.geo.lng]
        return (
          <Marker position={position} key={user.id}>
            <Popup>{user.name}</Popup>
          </Marker>
        )
      })}
    </Map>
  )
}
