import { Container, Grid } from '@material-ui/core';
import React from 'react';
import HeroSectionLeft from './herosection-left';
import HeroSectionRight from './herosection-right';

import './herosection-wrapper.styles.scss';

function HeroSectionWrapper({device}) {
  return (
    <Container className='hero-section-container'>
    <Grid container className="hero-section-wrapper" justifycontent="center"
    alignItems="center" spacing={2}>
      <Grid xs={6} md={6}>
        <HeroSectionLeft />
      </Grid>
      <Grid xs={6} md={6}>
        <HeroSectionRight device={device} />
      </Grid>
    </Grid>
    </Container>
  );
}

export default HeroSectionWrapper;
