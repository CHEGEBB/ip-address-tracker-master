import React, { useEffect, useState } from 'react';
import '../index.scss';

const DetailsComponent = ({ ipAddress }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (ipAddress) {
            fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_FmXFZwde4mKjnu2Kl080K9NxVF3iW&ipAddress=${ipAddress}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setData(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [ipAddress]);

    return (  
        <div className="details container">
            <div className="ip">
                <h2>Ip Address</h2>
                <p>{data ? data.ip : ''}</p>
            </div>
            <div className="rectangle"></div>
            <div className="location">
                <h2>Location</h2>
                <p>{data ? `${data.location.city}, ${data.location.region} ${data.location.postalCode}` : ''}</p>
            </div>
            <div className="rectangle"></div>
            <div className="timezone">
                <h2>Timezone</h2>
                <p>{data ? data.location.timezone : ''}</p>
            </div>
            <div className="rectangle"></div>
            <div className="isp">
                <h2>ISP</h2>
                <p>{data ? data.isp : ''}</p>
            </div>
        </div>
    );
}

export default DetailsComponent;
