import React from 'react';
import './cta.css';
import { CTAIcon1, CTAIcon2, CTAIcon3, CTAIcon4, CTATick } from './imports';

const CTA = () => {
  return (
    <div className='cta'>
      <div className='cta__header-container'>
        <h1 className='cta__header'>Moving waters green form</h1>
        <p className='cta__header-txt'>
          Seasons earth day night, likeness waters, fill fruitful us firmament
          good the fourth.
        </p>
        <ul className='cta__header-list'>
          <li className='cta__header-list-item'>
            <CTATick className='cta__header-list-icon' /> Image bearing he
            dominion
          </li>
          <li className='cta__header-list-item'>
            <CTATick className='cta__header-list-icon' /> Whose sea dominion had
            closed
          </li>
        </ul>
        <button className='cta__header-button'>Get started</button>
      </div>
      <div className='cta__cards-container'>
        <div className='cta__card-container'>
          <CTAIcon1 className='cta__card-icon' fill='#000' />
          <h3 className='cta__card-header'>Web Design</h3>
          <p className='cta__card-txt'>It is saying you're created creepeth.</p>
          <a className='cta__card-link' href='#'>
            Learn more
          </a>
        </div>
        <div className='cta__card-container'>
          <CTAIcon2 className='cta__card-icon' fill='#000' />
          <h3 className='cta__card-header'>Ad-Creatives</h3>
          <p className='cta__card-txt'>
            likeness god him fly fourth green his their great.
          </p>
          <a className='cta__card-link' href='#'>
            Learn more
          </a>
        </div>
        <div className='cta__card-container'>
          <CTAIcon3 className='cta__card-icon' fill='#000' />
          <h3 className='cta__card-header'>Automation</h3>
          <p className='cta__card-txt'>
            Fruit let green heaven Day. Also they're third.
          </p>
          <a className='cta__card-link' href='#'>
            Learn more
          </a>
        </div>
        <div className='cta__card-container'>
          <CTAIcon4 className='cta__card-icon' fill='#000' />
          <h3 className='cta__card-header'>Infographics</h3>
          <p className='cta__card-txt'>
            Hath creeping waters stars sixth divided seasons.
          </p>
          <a className='cta__card-link' href='#'>
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
