import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './Switch.css';
import styled from 'styled-components';


const Switch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
      <label className="switch">
        <input type="checkbox"
         onChange={toggleTheme}
      checked={theme === 'dark'}
        />
        <span className="slider" />
      </label>
  );
}

export default Switch;
