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
          <p>I am a full stack software developer with background knowledge of MEAN Stack, MERN Stack and .NET framework development.
          <br/><br/>I develop software focused on user experience, usability, visual harmony, but with a special focus on code efficiency and good practices.</p>
          <Components.ButtonsContainer>
            <Components.Button onClick={() => Download()}>See My Resume</Components.Button>
            <Components.Button onClick={() => Descargar()}>Ver Mi CV</Components.Button>
            <Components.Button onClick={() => SwipeDown()}>Contact Me</Components.Button>
          </Components.ButtonsContainer>
        </Components.InfoContainer>
    </Components.Container>
  )
}
