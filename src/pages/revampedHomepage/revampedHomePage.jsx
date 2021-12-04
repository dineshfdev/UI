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

// Styles
import './styles/mixins.scss';

const RevampHomePage = () => {
  const [latitude,setLatitude]=useState(13.0827);
  const [longitude, setLongitude] = useState(80.2707);

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
         <DoorStepServices latitude={latitude} longitude={longitude} />
         <UpdatedPackages />
         <CarServices />
         <CarouselItemMechanic />
         <Testimonial />
         <OurTeam />
         <Footer />
         <PageFooter />
      </Grid>
  );
}

export default RevampHomePage;
