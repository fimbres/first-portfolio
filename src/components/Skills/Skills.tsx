import React from 'react'
import Components from './Skill';
import { FaReact, FaAngular, FaPython, FaUser, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiExpress, SiDotnet, SiMongodb } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { GrMysql } from 'react-icons/gr';
import { IconContext } from 'react-icons';

export default function Skills() {
  return (
      <IconContext.Provider 
        value={{color: '#FF0E48', size: '80'}}
      >
        <Components.Container>
            <Components.ContainerInfo>
                <h2>Skills</h2>
                <p>These are some of the skills, technologies and programming languages I use the most.</p>
            </Components.ContainerInfo>
            <Components.Column>
                <Components.Row>
                    <Components.Item>
                        <p><FaReact/></p>
                        <h4>React / React Native</h4>
                    </Components.Item>
                    <Components.Item>
                        <p><SiTypescript/></p>
                        <h4>TypeScript</h4>
                    </Components.Item>
                    <Components.Item>
                        <p><FaAngular/></p>
                        <h4>Angular CLI</h4>
                    </Components.Item>
                </Components.Row>
                <Components.Row>
                    <Components.Item>
                        <p><MdDesignServices/></p>
                        <h4>Graphic Design</h4>
                    </Components.Item>
                    <Components.Item>
                        <p><FaPython/></p>
                        <h4>Python</h4>
                    </Components.Item>
                    <Components.Item>
                        <p><FaUser/></p>
                        <h4>UX/UI Design</h4>
                    </Components.Item>
                </Components.Row>
                <Components.Row>
                    <Components.Item>
                        <p><FaNodeJs/></p>
                        <h4>NodeJS</h4>
                    </Components.Item>
                    <Components.Item>
                        <p><SiExpress/></p>
                        <h4>ExpressJS</h4>
                    </Components.Item>
                    <Components.Item>
                        <p><SiDotnet/></p>
                        <h4>.NET Framework</h4>
                    </Components.Item>
                </Components.Row>
                <Components.Row>
                    <Components.Item>
                        <p><SiMongodb/></p>
                        <h4>MongoDB</h4>
                    </Components.Item>
                    <Components.Item>
                        <p><FaGitAlt/></p>
                        <h4>Git</h4>
                    </Components.Item>
                    <Components.Item>
                        <p><GrMysql/></p>
                        <h4>MySQL</h4>
                    </Components.Item>
                </Components.Row>
            </Components.Column>
        </Components.Container>
    </IconContext.Provider>
  )
}
