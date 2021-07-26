import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [stateCar, setStateCar] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });

  const [signalState, setSignalState] = useState({
     color: 'red',
  });

  const moveCar = (car, side) => {
    setStateCar({
        ...stateCar,
        [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignalState({
        ...signalState,
        color: signalColor,
    });
  };

    const context = {
      stateCar,
      moveCar,
      signalState,
      changeSignal,
    };

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  };

export default Provider;
