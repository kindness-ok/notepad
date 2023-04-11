import React from 'react';

const Header = ({handleToggleMode}) => {
  return (
    <div className="header">
      <h1>Notepad</h1>
      <button className="save" onClick={() => handleToggleMode((previousDarkMode) => !previousDarkMode)}>Toggle Mode</button>
    </div>
  )
};

export default Header
