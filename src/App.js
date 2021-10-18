import './App.css';
import Map from './components/map';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [latitude, setLatitude] = useState(49.246292);
  const [longitude, setLongitude] = useState(-123.116226);

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async () => {
    setLoading(true);
    const res = await axios.get('http://api.open-notify.org/iss-now.json');
    const { longitude, latitude } = await res.data.iss_position;

    setLongitude(parseFloat(longitude));
    setLatitude(parseFloat(latitude));
    setLoading(false);

    console.log({longitude, latitude})
    console.log(res.data.iss_position);
    // console.log('this is position>>>', res.data.iss_position);
    // console.log('this is lat>>>', res.data.iss_position.latitude);
    // console.log('this is long>>>', res.data.iss_position.longitude);
  }
 
  return (
    <div className="App">
      {
        !loading ? (
        <Map center={{ lat: latitude, lng: longitude}} zoom={3}/> 
        ) : (
        <h1> Loading </h1>
        )}
    </div>
  );
}

export default App;
