import React, { useEffect, useState } from 'react';
import '../index.scss';

const DetailsComponent = ({ ipAddress, domainName }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = '';
                if (ipAddress) {
                    url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_FmXFZwde4mKjnu2Kl080K9NxVF3iW&ipAddress=${ipAddress}`;
                } else if (domainName) {
                    // Resolve domain to IP address
                    const ipAddress = await resolveDomainToIp(domainName);
                    if (ipAddress) {
                        url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_FmXFZwde4mKjnu2Kl080K9NxVF3iW&ipAddress=${ipAddress}`;
                    }
                }
                if (url) {
                    const response = await fetch(url);
                    const responseData = await response.json();
                    setData(responseData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [ipAddress, domainName]);

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
        <div className="details container">
            <div className="ip">
                <h2>{ipAddress ? 'IP Address' : 'Domain'}</h2>
                <p>{data ? (ipAddress ? data.ip : domainName) : ''}</p>
            </div>
            <div className="rectangle"></div>
            <div className="location">
                <h2>Location</h2>
                <p>{data && data.location ? `${data.location.city}, ${data.location.region} ${data.location.postalCode}` : ''}</p>
            </div>
            <div className="rectangle"></div>
            <div className="timezone">
                <h2>Timezone</h2>
                <p>{data && data.location ? `UTC ${data.location.timezone}` : ''}</p>
            </div>
            <div className="rectangle"></div>
            <div className="isp">
                <h2>ISP</h2>
                <p>{data ? data.isp : ''}</p>
            </div>
        </div>
    );
};

export default DetailsComponent;
