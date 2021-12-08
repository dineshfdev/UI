import React from 'react';
import heroStar from '../../../images/assets/img/icons/global/hero-star.svg';
import CustomizedSelect from '../select/select';

import './herosection-right.styles.scss';

function HeroSectionRight() {
  return (
    <div className="hero-section-right">
      <div className="hero-section-right__content">
        <p className="hero-section-right__title">
          I’m Looking For Doorstep Services
        </p>
        <div className="hero-section-right__sub-title">
          <img src={heroStar} alt="star" />
          <span>Fair and transparent pricing!</span>
        </div>
        <div className="hero-section-right__cta-wrapper">
          <CustomizedSelect
            options={[
              { menu: 'General Services/ Other Services', value: 'general' },
              { menu: 'OMBT Services', value: 'ombt' },
            ]}
            handleChange={() => {}}
            defaultValue="general"
          />
          <button className="hero-section-right__button" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.servicegeni.in/doorstep-services';
      }}>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionRight;
