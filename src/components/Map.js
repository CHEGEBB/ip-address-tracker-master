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
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    let targetAddress = '';
    if (ipAddress) {
      targetAddress = ipAddress;
      fetchMapData(targetAddress);
    } else if (domainName) {
      resolveDomainToIp(domainName).then(resolvedIpAddress => {
        if (resolvedIpAddress) {
          targetAddress = resolvedIpAddress;
          fetchMapData(targetAddress);
        }
      });
    } else {
      targetAddress = '8.8.8.8';
      fetchMapData(targetAddress);
    }
  }, [ipAddress, domainName]);

  const fetchMapData = (targetAddress) => {
    const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_FmXFZwde4mKjnu2Kl080K9NxVF3iW&ipAddress=${targetAddress}`;
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
  };

  const resolveDomainToIp = async (domainName) => {
    try {
      const response = await fetch(`https://api.ipify.org/?format=json&domain=${domainName}`);
      const responseData = await response.json();
      return responseData.ip;
    } catch (error) {
      console.error('Error resolving domain to IP:', error);
      return null;
    }
  };

  return (
    <MapContainer
      key={mapKey}
      center={[latitude, longitude]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>
          Latitude: {latitude}, Longitude: {longitude}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
