import React,{useEffect,useContext} from 'react';
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

// context
import { LatLongContext } from "../../../src/context/latLongContext";

// Styles
import './styles/mixins.scss';

const RevampHomePage = ({device}) => {

  // set latitude longitude and default location from context
  const { setLat, setLong } =
    useContext(LatLongContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    }
  }, [setLat,setLong]);


  return (
      <Grid container>
         <Header device={device} />
         <HeroSectionWrapper />
         <DoorStepServices/>
         <Accordion device={device} />
         <UpdatedPackages />
         <CarouselItemMechanic />
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
