import React, { useReducer } from 'react';
import UiContextReducer from './ui.reducer';

const UiContext = React.createContext();

const UiContextProvider = ({ children }) => {
  const initialState = {
    showTimer: false
  };
  const [state, dispatch] = useReducer(UiContextReducer, initialState);
  return(
    <UiContext.Provider value={{ state, dispatch }}>
      {children}
    </UiContext.Provider>
  );
}

export { UiContext, UiContextProvider };
