import React, { useState } from 'react';
import { components, theme } from './components';
import './App.css';
import Switch from './components/Switch';
import { ThemeProvider } from 'styled-components';
import video from './media/video.mp4';
import { ReactComponent as LogoL} from './media/logo-light.svg';
import { ReactComponent as LogoD} from './media/logo-dark.svg';

//<Switch themes={themes} setThemes={setThemes}/>

function App() {
  const [themes, setThemes] = useState<string>('colorsLight');
  return (
    <ThemeProvider theme={themes === 'colorsLight' ? theme.colorsLight : theme.colorsDark}>
      <components.ScrollContainer>
        <components.Body>
          <components.HeadContainer>
            <components.InfoContainer>
              {themes === 'colorsLight' ? <LogoL className='Logo'/> : <LogoD className='Logo'/>}
              <h1>Web Development</h1>
            </components.InfoContainer>
            <video className={themes === 'colorsLight' ? "video vlight" : "video vdark"} src={video} autoPlay muted loop/>
          </components.HeadContainer>

        </components.Body>
      </components.ScrollContainer>
    </ThemeProvider>
  );
}

export default App;
