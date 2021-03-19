import React, { useReducer } from 'react';
import DataContextReducer from './data.reducer';

const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
  const initialState = {
    totalRounds: '20 Rounds',
    exerciseLength: '50 Seconds',
    recoveryLength: '10 Seconds',
    warmupLength: '1 Minute',
    cooldownLength: '1 Minute'
  };
  const [state, dispatch] = useReducer(DataContextReducer, initialState);
  return(
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
