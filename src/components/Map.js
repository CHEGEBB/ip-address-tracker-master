import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationIcon from '../images/icon-location.svg';

// Custom icon setup for the marker
const customIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const MapComponent = ({ location }) => {
  const [mapLocation, setMapLocation] = useState(null);

  useEffect(() => {
    // Fetch latitude and longitude coordinates based on location data
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=YOUR_GOOGLE_MAPS_API_KEY`);
        if (!response.ok) {
          throw new Error('Failed to fetch coordinates');
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setMapLocation({ lat, lng });
        } else {
          throw new Error('No coordinates found');
        }
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, [location]);

  if (!mapLocation) {
    return null; // You can render a loading indicator here if needed
  }

  const { lat, lng } = mapLocation;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} icon={customIcon}>
        <Popup>
          Location: {location} - Lat: {lat}, Lng: {lng}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
