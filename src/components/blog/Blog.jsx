import React from 'react';
import './blog.css';
import { ReactComponent as BlogIcon1 } from '../../assets/blog-icon-1.svg';

const Blog = ({ title, img, header }) => {
  return (
    <div className='blog'>
      <img className='blog__img' src={img} alt='' />
      <p className='blog__title'>{title}</p>
      <h3 className='blog__header'>{header}</h3>
      <a className='blog__link' href='#'>
        Read Blog <BlogIcon1 className='blog__link-icon' />
      </a>
    </div>
  );
};

export default Blog;
