import React from 'react';
import '../index.scss';

const DetailsComponent = () => {
    return (  
        <div className="details container">
            <div className="ip">
                <h2>Ip Address</h2>
            </div>
            <div className="location">
                <h2>Location</h2>
                </div>
            <div className="timezone">
                <h2>Timezone</h2>
                </div>
            <div className="isp">
                <h2>ISP</h2>
                </div>
        </div>
    );
}
 
export default DetailsComponent;