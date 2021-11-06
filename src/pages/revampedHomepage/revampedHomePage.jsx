import React from 'react';
import Header from './header/header';
import { HeroSectionLeft, HeroSectionRight } from './herosection';
import './styles/mixins.scss';

function RevampHomePage() {
  return (
    <div>
      <Header />
      <HeroSectionLeft />
      <HeroSectionRight />
    </div>
  );
}

export default RevampHomePage;
