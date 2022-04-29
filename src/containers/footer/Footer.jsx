import React from 'react';
import './footer.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { ReactComponent as Logo } from '../../assets/logo-rocket.svg';
import { ReactComponent as FormIcon } from '../../assets/footer-form-icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__column footer__column--1'>
        <Logo className='footer__logo' />
        <p className='footer__socials-txt'>
          Though wished merits or be. Alone visit use these smart rooms ham
        </p>
        <div className='footer__socials-container'>
          <a href='#' className='footer__socials-icon-container'>
            <FaFacebookF className='footer__socials-icon' />
          </a>
          <a href='#' className='footer__socials-icon-container'>
            <FaTwitter className='footer__socials-icon' />
          </a>
          <a href='#' className='footer__socials-icon-container'>
            <FaLinkedinIn className='footer__socials-icon' />
          </a>
        </div>
      </div>
      <div className='footer__column footer__column--2'>
        <h3 className='footer__links-title'>Resources</h3>
        <ul className='footer__links-container'>
          <li className='footer__link-item'>
            <a className='footer__link' href='#'>
              Our Process
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='#'>
              Member Stories
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='#'>
              Video
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='#'>
              Free trial
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__column footer__column--3'>
        <h3 className='footer__links-title'>Company</h3>
        <ul className='footer__links-container'>
          <li className='footer__link-item'>
            <a className='footer__link' href='#'>
              Partnership
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='#'>
              Terms of use
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='#'>
              Privacy
            </a>
          </li>
          <li className='footer__link-item'>
            <a className='footer__link' href='#'>
              Sitemap
            </a>
          </li>
        </ul>
      </div>
      <div className='footer__column footer__column--4'>
        <h3 className='footer__links-title'>Get in touch</h3>
        <form className='footer__form'>
          <input
            placeholder='Enter your email'
            className='footer__input'
            type='email'
            name=''
          />
          <button className='footer__btn' type='submit'>
            <FormIcon className='footer__btn-icon' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
