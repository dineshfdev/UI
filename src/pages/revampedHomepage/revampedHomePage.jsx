import React from 'react';
import Header from './header/header';
import Accordion from './accordion/accordion';
import './styles/mixins.scss';
import {
  CarouselItemMechanic,
  CarouselItemServices,
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
      <CarouselItemMechanic
        image={Image3}
        text={{
          heading: 'Adyar Water Wash And Foam Wash',
          pricing: '1599',
          address: '38, 3 rd Avenue, 4th Street, Indira Nagar, Adyar',
        }}
        garageOverallRating={{
          averageGarageRatings: 4,
          totalGarageReviews: 10,
        }}
        distance={'5.5'}
      />
    </div>
  );
}

export default RevampHomePage;
