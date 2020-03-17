import React from 'react';

import WeatherState from './context/WeatherState';

import { AppContainer, GlobalStyle } from './styles';

import { Logo } from './components/Logo';
import { Search } from './components/Search';
import { City } from './components/City';
import { UserLocation } from './components/UserLocation';
import { ToggleSwitch } from './components/ToggleSwitch';


const App = () => 
  <AppContainer>
    <GlobalStyle />
    <Logo />
    <WeatherState>
      <ToggleSwitch />
      <UserLocation />
      <Search />
      <City />
    </WeatherState>
  </AppContainer>

export default App;
