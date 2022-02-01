import React,{useState} from 'react';
import heroStar from '../../../images/assets/img/icons/global/hero-star.svg';
import CustomizedSelect from '../select/select';

import './herosection-right.styles.scss';

function HeroSectionRight() {
  const [optionValue,setOptionValue] = useState();
  const redirect = (e) =>{
    e.preventDefault();
    switch (optionValue) {
      case 'general':
        window.location.href='https://www.servicegeni.in/car-wash-near-me';
        break;
      case 'breakdown':
        window.location.href='https://www.servicegeni.in/car-emergency';
        break;
      case 'periodic':
        window.location.href='https://www.servicegeni.in/car-service';
        break;
      case 'inspection':
        window.location.href='https://www.servicegeni.in/car-service';
        break;
      default:
        window.location.href='https://www.servicegeni.in/car-wash-near-me';
        break;
    }
    
  }
  return (
    <div className="hero-section-right">
      <div className="hero-section-right__content">
        <p className="hero-section-right__title">
          I’m looking for Doorstep Services
        </p>
        <div className="hero-section-right__sub-title">
          <img src={heroStar} alt="star" />
          <span>Fair and transparent pricing!</span>
        </div>
        <div className="hero-section-right__cta-wrapper">
          <div className="door-step-menu">
          <CustomizedSelect
            options={[
              { menu: 'Car Wash', value: 'general' },
              { menu: 'Periodic Service', value: 'periodic' },
              { menu: 'Car Inspection', value: 'inspection' },
              { menu: 'Breakdown assistance', value: 'breakdown' },
            ]}
            handleChange={value => setOptionValue(value)}
            defaultValue="general"
          />
          </div>
          <button className="hero-section-right__button" onClick={(e) => redirect(e)}>BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionRight;
