import React from 'react';
import Header from './header/header';
import { HeroSectionWrapper } from './herosection';
import './styles/mixins.scss';

function RevampHomePage() {
  return (
    <div>
      <Header />
      <HeroSectionWrapper />
    </div>
  );
}

export default RevampHomePage;
