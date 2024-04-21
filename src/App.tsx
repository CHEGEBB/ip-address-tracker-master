import './index.scss';
import ArrowIcon from './assets/icon-arrow.svg';
import { useState } from 'react';
import MapComponent from './components/MapComponent';
import DetailsComponent from './components/DetailsComponent';

function App() {
  const [ipAddress, setIpAddress] = useState('');

  const handleSearch = () => {
    if (ipAddress) {
      fetch(`https://geo.ipify.org/api/v1?apiKey=at_2z1Vz0
      Vb6KsMqQ1f9zQwZp3ZP7V0h&ipAddress=${ipAddress}`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => console.log(error));
    }

    return;

  };

  return (
    <div className="App">
      <div className="container">
        <div className="tracker">
          <div className="header">
            <div className="input">
              <input 
                type='text' 
                id="searchInput" 
                placeholder='Search for any IP address or domain' 
                value={ipAddress} 
                onChange={(e) => setIpAddress(e.target.value)}
              />
              <img 
                className='arrow' 
                src={ArrowIcon} 
                alt="arrow" 
                onClick={handleSearch} 
              />
            </div>
          </div>
          <DetailsComponent ipAddress={ipAddress} />
        </div>
        <MapComponent ipAddress={ipAddress} />
      </div>
    </div>
  );
}

export default App;
