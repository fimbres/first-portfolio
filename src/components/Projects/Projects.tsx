import Components from './Slider';
import Carousel from 'styled-components-carousel';
import Slides from './Slide';
import '../../App.css';

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
              centerPadding={10}
              showIndicator
              breakpoints={[
                {
                    size: 500,
                    settings: {
                        slidesToShow: 1,
                        showArrows: true,
                        swipeable: true,
                        center: true,
                        infinite:true,
                    },
                },
                {
                  size: 700,
                  settings: {
                      slidesToShow: 2,
                      showArrows: true,
                      showIndicator: true,
                      center: true,
                      infinite:true,
                  },
              },
                {
                    size: 1000,
                    settings: {
                        slidesToShow: 2,
                        showArrows: true,
                        showIndicator: true,
                        center: true,
                        infinite:true,
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
