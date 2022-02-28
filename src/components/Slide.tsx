import React from 'react';
import Image1 from '../media/proyectos/Musify/1.png';
import Image2 from '../media/proyectos/Eureka/2.jpg';
import Components from './Slider';

interface Slide{
    src: string;
    alt: string;
    desc: string;
}


const slidesInfo: Array<Slide> = [
    {
       src: Image1,
       alt: 'Personal project: Musify',
       desc: 'Digital platform of music streaming developed with MEAN Stack, just like Spotify or Apple Music.'
    },
    {
       src: Image2,
       alt: 'Profesional project: Eureka',
       desc: 'Web system of tasks management for a mobile development local company, developed with .NET Framework.'
    }
];

const slides : Array<JSX.Element> = slidesInfo.map(slide => {
    return (
        <Components.SlideContainer>
            <img src={slide.src} alt={slide.alt}/>
            <Components.SlideDescription>
                <span>{slide.desc}</span>
            </Components.SlideDescription>
        </Components.SlideContainer>
    );
});

export default slides;