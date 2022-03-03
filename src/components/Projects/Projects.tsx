import Components from './Slider';
import Carousel from 'styled-components-carousel';
import Slides from './Slide';
import '../../App.css';

export default function Projects() {
  return (
    <Components.Container>
        <Components.Title>
            <h3>My Projects</h3>
            <p>These are some of the projects I have developed.</p>
        </Components.Title>
        <Components.CarouselContainer>
            <Carousel
              center
              infinite
              showArrows
              slidesToShow={3}
              centerPadding={10}
              showIndicator
              breakpoints={[
                {
                  size: 372,
                  settings: {
                    center: true,
                    infinite:true,
                    showArrows:false,
                    showIndicator: true,
                    swipeable: true,
                    slidesToShow:1,
                    centerPadding:10,
                  },
              },
                {
                  size: 500,
                  settings: {
                    center: true,
                    infinite:true,
                    showArrows:true,
                    showIndicator: true,
                    slidesToShow:1,
                    centerPadding:10,
                  },
              },
                {
                  size: 780,
                  settings: {
                    center: true,
                    infinite:true,
                    showArrows:true,
                    showIndicator: true,
                    slidesToShow:2,
                    centerPadding:10,
                  },
              },
                {
                  size: 1050,
                  settings: {
                    center: true,
                    infinite:true,
                    showArrows:true,
                    showIndicator: true,
                    slidesToShow:3,
                    centerPadding:10,
                  },
              },
                {
                  size: 1270,
                  settings: {
                    center: true,
                    infinite:true,
                    showArrows:true,
                    showIndicator: true,
                    slidesToShow:2,
                    centerPadding:10,
                  },
              },
                {
                    size: 1500,
                    settings: {
                      center: true,
                      infinite:true,
                      showArrows:true,
                      showIndicator: true,
                      slidesToShow:3,
                      centerPadding:10,
                    },
                },
            ]}
            >
              {Slides.map(slide => (slide))}
            </Carousel>
        </Components.CarouselContainer>
    </Components.Container>
  )
}
