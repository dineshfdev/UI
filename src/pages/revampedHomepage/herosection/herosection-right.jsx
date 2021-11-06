import React from 'react';
import heroStar from '../../../images/assets/img/icons/global/hero-star.svg';

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
          Fair and transparent pricing!
        </div>
      </div>
    </div>
  );
}

export default HeroSectionRight;
