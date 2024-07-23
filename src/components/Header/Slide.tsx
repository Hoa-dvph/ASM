import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {}

const Slide: React.FC<Props> = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
        <img src="public/fwfqq 1 (3).png" alt="" width="100%" />
        </div>
        <div>
          <div style={{ backgroundColor: '#ccc', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Slide 2</h2>
          </div>
        </div>
        <div>
          <div style={{ backgroundColor: '#aaa', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Slide 3</h2>
          </div>
        </div>
        <div>
          <div style={{ backgroundColor: '#888', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Slide 4</h2>
          </div>
        </div>
        <div>
          <div style={{ backgroundColor: '#666', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2>Slide 5</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
