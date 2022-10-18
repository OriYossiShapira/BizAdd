import Carousel from 'react-bootstrap/Carousel';
import './BusinessCarousel.css'
import 'animate.css';


function BusinessCarousel({images}) { // {images:["wwjpg,"]}
  return ( 
    <div className='c_wrapper animate__animated animate__fadeInUp'>

    <Carousel controls={false} indicators={false} className='b_carousel'interval={2500} >
      {images.map(image => <Carousel.Item>
        <img
          key={image}
          className='c_image'
          src={image}
          alt="First slide"
        />
      </Carousel.Item>)}
    </Carousel>
    </div>
  );
}

export default BusinessCarousel;