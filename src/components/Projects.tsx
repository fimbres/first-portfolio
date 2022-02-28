import React from 'react';
import Components from './Slider';
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slide';
import '../App.css';

export default function Projects() {
  return (
    <Components.Container>
        <Components.Title>
            <h3>My Projects</h3>
            <p>These are some of my projects developed</p>
        </Components.Title>
        <Components.CarouselContainer>
            <Carousel
            plugins={[
                'infinite',
                'arrows'
            ]}
            slides={Slides}
            itemWidth={400}
            animationSpeed={200}
            offset={50}
            />
        </Components.CarouselContainer>
    </Components.Container>
  )
}
