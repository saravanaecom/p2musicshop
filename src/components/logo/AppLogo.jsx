import React from 'react';
import Logo from './P2-Music-Shop.png';
const AppLogo = ({ children }) => {
  return (
    <img src={Logo} alt="logo" style={{width: '130px', height: '100px'}}/>
  );
};

export default AppLogo;
