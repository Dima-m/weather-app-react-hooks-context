import React, { useReducer } from 'react';
import axios from 'axios';
import { weatherContext as WeatherContext } from './weatherContext';
import WeatherReducer from './weatherReducer';
import {
  SET_LOCATION,
  CLEAR_LOCATION,
  SEARCH_CITY,
  CLEAR_CITY,
  SET_ERROR,
  SET_UNITS
} from './types';

const openWeatherAppId = 'cdfea722819791da220d38ee898a116c';

const WeatherState = props => {
  const initialState = {
    city: {},
    cityError: '',
    location: '',
    selectedUnits: 'C'
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const searchCity = async (city, units) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${openWeatherAppId}`
      );

      dispatch({ type: SEARCH_CITY, payload: res.data });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error.response.data.message });
    }
  };

  const clearCity = () => dispatch({ type: CLEAR_CITY });
  const setUserLocation = location => dispatch({ type: SET_LOCATION, payload: location });
  const setUnits = units => dispatch({ type: SET_UNITS, payload: units });
  const clearUserLocation = () => dispatch({ type: CLEAR_LOCATION });

  return (
    <WeatherContext.Provider
      value={{
        city: state.city,
        cityError: state.cityError,
        location: state.location,
        selectedUnits: state.selectedUnits,
        searchCity,
        setUserLocation,
        setUnits,
        clearUserLocation,
        clearCity
      }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
