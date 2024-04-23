import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="tracker">
        <div className="header  container-fluid">
          <h1>Ip Address Tracker</h1>
          <div className="search">
            <input type="text" placeholder="Search for any IP address or domain" />
          </div>
        </div>
        <div className="map">
          <div className="map-container container-fluid">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
