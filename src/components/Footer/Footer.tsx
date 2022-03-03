import Components from './Foot';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Form from './Form';

export default function Footer() {
  return (
      <Components.ContainerFooter>
          <Components.InfoContainer>
              <h3>Contact Me!</h3>
              <p>I would like to hear any suggestions about my portfolio, or about your project if you want to hire me.</p>
          </Components.InfoContainer>
          <Components.ContactContainer>
              <Form />
          </Components.ContactContainer>
          <Components.ContainerInferior>
              <p>This portfolio was developed using React with TypeScript.</p>
              <Components.ContainerAux>
                <Components.CopyRight>
                    Copyright © 2022 Isaac Fimbres
                </Components.CopyRight>
                <Components.LinksContainer>
                    <a href="https://github.com/fimbres" rel="noreferrer" target="_blank"><FaGithubSquare size={35} /></a>
                    <a href="https://www.linkedin.com/in/fimbres-isaac/" rel="noreferrer" target="_blank"><FaLinkedin size={35} /></a>
                </Components.LinksContainer>
              </Components.ContainerAux>
          </Components.ContainerInferior>
      </Components.ContainerFooter>
  )
}
