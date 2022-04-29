import React, { useState } from 'react';
import './blogs.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { ReactComponent as BackIcon } from '../../assets/blogs-back-icon.svg';
import { ReactComponent as ForwardIcon } from '../../assets/blogs-forward-icon.svg';
import Blog from '../../components/blog/Blog';
import { blogData } from './data';

const Blogs = () => {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className='blogs'>
      <h1 className='blogs__header'>From Our Blogs</h1>
      <CarouselProvider
        naturalSlideWidth={16}
        naturalSlideHeight={9}
        totalSlides={6}
        visibleSlides={width >= 1000 ? 3 : 2}
      >
        <Slider className='blogs__carousel-slider'>
          {blogData.map((item, index) => (
            <Slide key={item.title + index} className='blogs__carousel-slide '>
              <Blog title={item.title} header={item.header} img={item.img} />
            </Slide>
          ))}
        </Slider>
        <div className='blogs_carousel-btns-container'>
          <ButtonBack className='blogs__carousel-btn'>
            <BackIcon fill='#474F62' className='blog__carousel-btn-icon' />
          </ButtonBack>
          <ButtonNext className='blogs__carousel-btn'>
            <ForwardIcon fill='#474F62' className='blog__carousel-btn-icon' />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Blogs;
