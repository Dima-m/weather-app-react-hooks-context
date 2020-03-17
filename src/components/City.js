import React, { useContext } from 'react';
import { weatherContext } from '../context/weatherContext';

import { CityWrapper, CityInfo } from './style';

import { WeatherMap } from './../utils/weatherMap';

export const City = () => {
  const { city: { name, main, weather } } = useContext(weatherContext);

  return main
    ? <CityWrapper>
        <div>
          <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="icon"/>
        </div>
        <CityInfo>
          It's {WeatherMap[weather[0].main]} currently in {name} with {Math.ceil(main.temp)}&deg;C
        </CityInfo>
      </CityWrapper>

    : <CityWrapper></CityWrapper>
};
