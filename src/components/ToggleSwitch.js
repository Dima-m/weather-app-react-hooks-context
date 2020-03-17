import React, { useContext } from 'react';
import { weatherContext } from '../context/weatherContext';

import { Slider, Unit } from '../styles';

export const ToggleSwitch = () => {
  const { setUnits, selectedUnits } = useContext(weatherContext);

  const handleToggleChange = ({ target }) =>
    target.innerText !== selectedUnits && setUnits(target.innerText);

  return (
    <Slider>
      <Unit
        selected={selectedUnits === 'C'}
        onClick={handleToggleChange}
        className='unit'>
        C
      </Unit>
      <Unit
        selected={selectedUnits === 'F'}
        onClick={handleToggleChange}
        className='unit'>
        F
      </Unit>
    </Slider>
  );
};
