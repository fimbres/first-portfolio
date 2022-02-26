import React, { useState } from 'react';
import { components, theme } from './components';
import './App.css';
import Switch from './components/Switch';
import { ThemeProvider } from 'styled-components';

function App() {
  const [themes, setThemes] = useState<string>('colorsLight');
  return (
    <ThemeProvider theme={themes === 'colorsLight' ? theme.colorsLight : theme.colorsDark}>
      <components.ScrollContainer>
        <components.Body>
          <components.HeadContainer>
            <Switch themes={themes} setThemes={setThemes}/>
            Hola Mundo
          </components.HeadContainer>
        </components.Body>
      </components.ScrollContainer>
    </ThemeProvider>
  );
}

export default App;
