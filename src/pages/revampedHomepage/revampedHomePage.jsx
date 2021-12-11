import React,{useState,useEffect} from 'react';
import {Grid} from "@material-ui/core";

// Components
import Header from './header/header';
import { HeroSectionWrapper } from './herosection';
import DoorStepServices from './doorstepServices/door-step-services';
import UpdatedPackages from './updatedpackages/updated-packages';
import CarServices from './carservices/car-services';
import Testimonial from './testimonial/testimonial';
import OurTeam from './ourteam/our-team';
import Footer from './footer/footer';
import PageFooter from "./page-footer/page-footer";
import CarouselItemMechanic  from './topmechanic/top-mechanic';
import Accordion from './accordion/accordion';
import Accessories from './accessories/accessories';

// Styles
import './styles/mixins.scss';

const RevampHomePage = () => {
  const [latitude,setLatitude]=useState(12.914828805146252);
  const [longitude, setLongitude] = useState(80.17147804256318);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, [latitude,longitude]);

  return (
      <Grid container>
         <Header />
         <HeroSectionWrapper />
         <DoorStepServices/>
         <Accordion />
         <UpdatedPackages />
         <CarouselItemMechanic latitude={latitude} longitude={longitude}  />
         <CarServices />
         <Accessories />
         <Testimonial />
         <OurTeam />
         <Footer />
         <PageFooter />
      </Grid>
  );
}

export default RevampHomePage;
