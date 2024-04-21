import { useEffect, useState } from 'react';
import '../index.scss';


interface DetailsProps {
  ipAddress: string;
}

const DetailsComponent: React.FC<DetailsProps> = ({ ipAddress }) => {
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_2z1Vz0Vb6KsMqQ1f9zQwZp3ZP7V0h&ipAddress=${ipAddress}`)
      .then(response => response.json())
      .then(data => {
        setLocation(data.location.city);
        setTimezone(data.location.timezone);
      })
      .catch(error => console.log(error));
  }, [ipAddress]);

  return (
    <div className="details">
      <div className="ip-address">
        <h3>IP ADDRESS: {ipAddress}</h3>
      </div>
      <div className="rectangle"></div>
      <div className="location">
        <h3>LOCATION: {location}</h3>
      </div>
      <div className="rectangle"></div>
      <div className="timezone">
        <h3>TIMEZONE: {timezone}</h3>
      </div>
      <div className="rectangle"></div>
    </div>
  );
};

export default DetailsComponent;
