import React, { useContext } from 'react';
import { weatherContext } from '../context/weatherContext';

import { CityWrapper, CityInfo } from '../styles';

import { WeatherMap } from './../utils/weatherMap';
import { UnitConverter } from '../utils/unitConverter';

export const City = () => {
  const {
    city: { name, main, weather },
    selectedUnits
  } = useContext(weatherContext);
  const conditions = weather && WeatherMap[weather[0].main];
  const temperature = main && UnitConverter(selectedUnits, main.temp);

  return main ? (
    <CityWrapper>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt='icon'
        />
      </div>
      <CityInfo>
        Currently it's {conditions} in {name} with {temperature} &deg;{selectedUnits}
      </CityInfo>
    </CityWrapper>
  ) : (<CityWrapper></CityWrapper>);
};
