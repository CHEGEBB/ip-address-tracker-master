

const TrackerComponent = () => {
    return ( 
        <div className="tracker">
            <div className="header">
                <input type='text' placeholder='Enter your  ip address' />
            </div>
            <div className="details">
                <div className="ip-address">
                    <h3>IP ADDRESS</h3>
                </div>
                <div className="location">
                    <h3>LOCATION</h3>
                    </div>
                <div className="timezone">
                    <h3>TIMEZONE</h3>
                    </div>
                <div className="isp">
                    <h3>ISP</h3>
                    </div>
            </div>
        </div>
     );
}
 
export default TrackerComponent;