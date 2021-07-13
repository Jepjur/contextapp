import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return ( 
        <button onClick={toggleTheme}>Toggle Light / Dark mode</button>
     );
}
 
export default ThemeToggle;