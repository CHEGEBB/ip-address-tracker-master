import React from 'react';
import '../index.scss';

const DetailsComponent = () => {
    return (  
        <div className="details container">
            <div className="ip">
                <h2>Ip Address</h2>
                <p>192.212.174.101</p>
            </div>
            <div className="rectangle"></div>
            <div className="location">
                <h2>Location</h2>
                <p>Brooklyn, NY 10001</p>
                </div>
                <div className="rectangle"></div>
            <div className="timezone">
                <h2>Timezone</h2>
                <p>UTC -05:00</p>
                </div>
                <div className="rectangle"></div>
            <div className="isp">
                <h2>ISP</h2>
                <p>SpaceX Starlink</p>
                </div>
        </div>
    );
}
 
export default DetailsComponent;