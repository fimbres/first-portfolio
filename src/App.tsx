import React, { useState, useEffect } from 'react';
import { components, theme } from './components';
import './App.css';
import Switch from './components/Switch';
import { ThemeProvider } from 'styled-components';
import video from './media/video.mp4';
import { ReactComponent as LogoL} from './media/logo-light.svg';
import { ReactComponent as LogoD} from './media/logo-dark.svg';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const [themes, setThemes] = useState<string>('colorsLight');
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);
  

  return (
    <ThemeProvider theme={themes === 'colorsLight' ? theme.colorsLight : theme.colorsDark}>
          <components.navBar scrollHeight={scrollHeight}>
            <components.navBarLogo onClick={() => toTheTop()}>Fimbres Technologies</components.navBarLogo>
            <Switch themes={themes} setThemes={setThemes}/>
            {themes === 'colorsLight' ? <p><MdLightMode size={40} color='#FF0E48'/></p> : <p><MdDarkMode size={40} color='#FF0E48'/></p>}
          </components.navBar>
          <components.HeadContainer>
            <components.InfoContainer>
              {themes === 'colorsLight' ? <LogoL className='Logo'/> : <LogoD className='Logo'/>}
              <h1>Web Development</h1>
            </components.InfoContainer>
            <video className={themes === 'colorsLight' ? "video vlight" : "video vdark"} src={video} autoPlay muted loop/>
          </components.HeadContainer>
        <AboutMe/>
        <Skills/>
        <Projects/>
    </ThemeProvider>
  );
}

export default App;
