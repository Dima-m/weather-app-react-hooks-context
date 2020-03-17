import React from 'react';
import './App.css';

import WeatherState from './context/WeatherState';

import { Search } from './components/Search';
import { City } from './components/City';
import { UserLocation } from './components/UserLocation';


const App = () => 
  <div className='App'>
    <WeatherState>
      <UserLocation />
      <Search />
      <City />
    </WeatherState>
  </div>

export default App;
