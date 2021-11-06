import React from 'react';
import HeroSectionLeft from './herosection-left';
import HeroSectionRight from './herosection-right';

import './herosection-wrapper.styles.scss';

function HeroSectionWrapper() {
  return (
    <div className="hero-section-wrapper">
      <HeroSectionLeft />
      <HeroSectionRight />
    </div>
  );
}

export default HeroSectionWrapper;
