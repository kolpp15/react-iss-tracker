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
    setLoading(true) 
  }
 
  return (
    <div className="App">
      {
        !loading ? (
        <Map center={{ lat: latitude, lng: longitude}}/> 
        ) : (
        <h1> Loading </h1>
        )}
    </div>
  );
}

export default App;
