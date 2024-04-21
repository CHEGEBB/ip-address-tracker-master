import { useEffect } from 'react';
import L from 'leaflet';

interface MapProps {
  ipAddress: string;
}

const MapComponent: React.FC<MapProps> = ({ ipAddress }) => {
  useEffect(() => {
    const map = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(map);

    // Add marker based on ipAddress
    if (ipAddress) {
      fetch(`https://geo.ipify.org/api/v1?apiKey=at_2z1Vz0Vb6KsMqQ1f9zQwZp3ZP7V0h&ipAddress=${ipAddress}`)
        .then(response => response.json())
        .then(data => {
          L.marker([data.location.lat, data.location.lng]).addTo(map);
        })
        .catch(error => console.log(error));
    }
  }, [ipAddress]);

  return (
    <div className="map-leaflet">
      <div className="map" id="mapid"></div>
    </div>
  );
};

export default MapComponent;
