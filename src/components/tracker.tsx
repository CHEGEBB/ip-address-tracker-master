import '../index.scss';
import ArrowIcon from '../assets/icon-arrow.svg';


const TrackerComponent = () => {
    return ( 
        <div className="container">
            <div className="tracker">
                <div className="header">
                    <div className="input">
                    <input type='text' id="searchInput" placeholder='Search for any IP adress or domain' />
                    <button id="searchButton"><img src={ArrowIcon} alt="arrow" /></button>
                    
                    </div>
                   
                </div>
                <div className="details">
                    <div className="ip-address">
                        <h3>IP ADDRESS</h3>
                    </div>
                    <div className="rectangle"></div>
                    <div className="location">
                        <h3>LOCATION</h3>
                    </div>
                    <div className="rectangle"></div>
                    <div className="timezone">
                        <h3>TIMEZONE</h3>
                    </div>
                    <div className="rectangle"></div>
                    <div className="isp">
                        <h3>ISP</h3>
                    </div>
                </div>
            </div>
            <div className="map-leaflet">
                <div className="map" id="mapid">
                </div>
            </div>
        </div>
     );
}
 
export default TrackerComponent;