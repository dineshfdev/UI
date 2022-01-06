import React from 'react';
import {Link} from "react-router-dom";
// import FindAMechImage from '../../../images/assets/img/brand/find a mechanic.png';
import './herosection-left.styles.scss';

function HeroSection() {
  return (
    <div className="hero-section-left">
      <div className="hero-section-left__content">
        <p className="hero-section-left__title">Find a Mechanic Near me </p>
        <p className="hero-section-left__sub-title">*FREE to search mechanics </p>
        <button className="hero-section-left__button"><Link to="/search">Find Now</Link>
      </button>
      </div>
    </div>
  );
}

export default HeroSection;
