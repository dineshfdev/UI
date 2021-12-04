import { Grid } from '@material-ui/core';
import React from 'react';
import HeroSectionLeft from './herosection-left';
import HeroSectionRight from './herosection-right';

import './herosection-wrapper.styles.scss';

function HeroSectionWrapper() {
  return (
    <Grid container className="hero-section-wrapper" justifycontent="center"
    alignItems="center">
      <Grid item xs={6}>
        <HeroSectionLeft />
      </Grid>
      <Grid item xs={6}>
        <HeroSectionRight />
      </Grid>
    </Grid>
  );
}

export default HeroSectionWrapper;
