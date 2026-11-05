
import React, { createContext, useState } from 'react';
import MainBar from './MainBar';
import SideBar from './SideBar';

const MyContext = createContext();

export const MyProvider = ({ children }) => {

  const [clicked, setClicked] = useState(false);

  return (
    <MyContext.Provider value={{ clicked, setClicked }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
