import React from 'react';
import Header from './header/header';
import Accordion from './accordion/accordion';
import './styles/mixins.scss';
import {
  CarouselItemMechanic,
  CarouselItemServices,
  CarouselItemAccessories,
} from './carousel/carouselItem';
import Image3 from '../../images/assets/img/servicecentre/centre2.png';

function RevampHomePage() {
  return (
    <div>
      <Header />
      <CarouselItemServices
        image={Image3}
        text={{ heading: 'Title', pricing: '1599' }}
      />
    </div>
  );
}

export default RevampHomePage;
