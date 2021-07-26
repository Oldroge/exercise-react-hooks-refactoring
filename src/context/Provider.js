import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });

  const moveCar = (car, side) => {
    setCars({
        ...cars,
        [car]: side,
    });
  };
    const context = {
      moveCar,
      cars,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  };

export default Provider;
