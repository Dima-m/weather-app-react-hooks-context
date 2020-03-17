import React, { useState, useContext } from 'react';
import { weatherContext } from '../context/weatherContext';

import { CityInput } from './style';

export const Search = () => {
  const { searchCity, clearUserLocation, location } = useContext(weatherContext);
  const [text, setText] = useState('');
  
  const onChange = e => {        
    clearUserLocation();
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!text) {
      return;
    }
    
    searchCity((location || text), 'metric');
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <CityInput
          type='text'
          value={location || text}
          placeholder="Type city"
          onChange={onChange}
          autoFocus
        />
      </form>
    </div>
  );
};