import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from '../images/icon-location.svg';

const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapComponent = ({ ipAddress, domainName }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    if (ipAddress || domainName) {
      let url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_FmXFZwde4mKjnu2Kl080K9NxVF3iW&`;
      if (ipAddress) {
        url += `ipAddress=${ipAddress}`;
      } else {
        url += `domain=${domainName}`;
      }

      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (data.location) {
            setLatitude(data.location.lat);
            setLongitude(data.location.lng);
            setMapKey(prevKey => prevKey + 1);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [ipAddress, domainName]);

  return (
    <MapContainer
      key={mapKey}
      center={[latitude || 0, longitude || 0]}
      zoom={13}
      style={{ height: '800px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {latitude && longitude && (
        <Marker position={[latitude, longitude]} icon={customIcon}>
          <Popup>
            Latitude: {latitude}, Longitude: {longitude}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapComponent;
