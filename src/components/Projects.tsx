import React from 'react';
import Components from './Slider';
import Carousel from 'styled-components-carousel';
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
              center
              infinite
              showArrows
              slidesToShow={3}
              centerPadding={0}
            >
              {Slides.map(slide => (slide))}
            </Carousel>
        </Components.CarouselContainer>
    </Components.Container>
  )
}
