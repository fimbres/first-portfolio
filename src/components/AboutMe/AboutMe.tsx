import Components from './Body';
import Image from '../../media/photo.png';
import CVIngles from '../../media/CV/IsaacFimbres_Resume.pdf';
import CVEspanol from '../../media/CV/IsaacFimbres_Curriculum.pdf';

export default function AboutMe() {
  const Descargar = () => {
    window.open(CVEspanol);
  };

  const Download = () => {
    window.open(CVIngles);
  };

  const SwipeDown = () => {
    window.scrollTo({ top: 3956, left: 0, behavior: "smooth" });
  };

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
            <Components.Button onClick={() => Download()}>See My Resume</Components.Button>
            <Components.Button onClick={() => Descargar()}>Ver Mi CV</Components.Button>
            <Components.Button onClick={() => SwipeDown()}>Contact Me</Components.Button>
          </Components.ButtonsContainer>
        </Components.InfoContainer>
    </Components.Container>
  )
}
