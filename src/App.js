import React, { useState } from 'react';
import Details from './components/Details';
import Map from './components/Map';
import ArrowSearch from './images/icon-arrow.svg';
import './index.scss';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  const handleSearch = () => {
    setIpAddress(searchInput.trim());
  };

  return (
    <div className="App">
      <div className="tracker">
        <div className="header container-fluid">
          <h1>Ip Address Tracker</h1>
          <div className="search">
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              <img src={ArrowSearch} alt="search" />
            </button>
          </div>
          <div className="details">
            <Details ipAddress={ipAddress} />
          </div>
          //details
        
        <div className="map" style={{height:'900px'}}>
          <div className="map-container container-fluid">
            <div id="map">
            </div>
            <Map ipAddress={ipAddress} />
          </div>
        </div>
        </div>
      </div>
    </div>
    // this is new
  );
}

export default App;
