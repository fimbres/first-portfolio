import React from 'react';
import Components from './Body';
import Image from '../media/photo.png';

export default function AboutMe() {
  return (
    <Components.Container>
      <Components.Texto>About Me</Components.Texto>
      <Components.ImageContainer>
          <img src={Image} alt="About Me"/>
        </Components.ImageContainer>
        <Components.InfoContainer>
          <h2>About Me</h2>
          <p>Full stack web and mobile developer with background knowledge of MEAN Stack, MERN Stack and .NET framework in the back end.
          <br/><br/>I have developed systems and applications with high efficiency.</p>
          <Components.ButtonsContainer>
            <Components.Button>See My Resume</Components.Button>
            <Components.Button>Contact Me</Components.Button>
          </Components.ButtonsContainer>
        </Components.InfoContainer>
    </Components.Container>
  )
}
