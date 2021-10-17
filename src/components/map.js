import GoogleMapReact from "google-map-react"
import iss from './iss.png';

export default function Map({ center, zoom } ) {
  return (
    <div className="map-container">
       <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={ center }
          defaultZoom={ zoom }
       >
          <img src={iss} alt='ISS Icon' className='iss-icon' />
       </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 49.246292, 
    lng: -123.116226,
    // lat: 35.9078,
    // lng: 127.7669,
  },
  zoom: 6,
};