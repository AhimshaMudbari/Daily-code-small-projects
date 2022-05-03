import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { light, dark, GlobalStyles } from './themes.js';
export default function App() {
  const [theme, settheme] = useState('light');
  const Styleapp = styled.div``;
  const changetheme = () => {
    theme === 'light' ? settheme('dark') : settheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyles />
      <Styleapp>
        <button onClick={() => changetheme()}>Change Theme</button>
      </Styleapp>
    </ThemeProvider>
  );
}
