import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { weatherContext } from '../context/weatherContext';
import { LocationWrapper, Location } from './style';

export const UserLocation = () => {
  const [location, setLocation] = useState('');
  const { setUserLocation, searchCity } = useContext(weatherContext);

  useEffect(() => { fetchLocation() }, [])
  
  const fetchLocation = async () => {
    try {
      const res = await axios.get('http://ip-api.com/json/?');
      setLocation(res.data.city);
    } catch (error) {
      console.error(error)
    }
  }

  const onLocationClick = () => {
    setUserLocation(location);
    searchCity(location, 'metric');
  };

  return !location ?
    <LocationWrapper></LocationWrapper> :
    <LocationWrapper>
      Are you in <Location title="Sorry, this can be inaccurate" onClick={onLocationClick}>{location}</Location>?
    </LocationWrapper>
    
};
