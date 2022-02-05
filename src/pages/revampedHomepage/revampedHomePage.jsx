import React,{useEffect,useContext} from 'react';
import {Grid} from "@material-ui/core";

// Components
import { HeroSectionWrapper } from './herosection';
import DoorStepServices from './doorstepServices/door-step-services';
import UpdatedPackages from './updatedpackages/updated-packages';
import CarServices from './carservices/car-services';
import Testimonial from './testimonial/testimonial';
import OurTeam from './ourteam/our-team';
import Footer from './footer/footer';
import CarouselItemMechanic  from './topmechanic/top-mechanic';
import Accordion from './accordion/accordion';
// import Accessories from './accessories/accessories';

// context
import { LatLongContext } from "../../../src/context/latLongContext";

// Styles
import './styles/mixins.scss';

const RevampHomePage = ({device}) => {

  const {REACT_APP_MAPBOX_ACCESS_TOKEN} =process.env;

  // set latitude longitude and default location from context
  const { lat,long,setLat, setLong,setDefaultLocation,servicesNearme } =
    useContext(LatLongContext);


    // get latest geocode along with latidue and longitude
    useEffect(() => {
      if(servicesNearme){
      (async () => {
        await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${servicesNearme}.json?access_token=${REACT_APP_MAPBOX_ACCESS_TOKEN}`
        )
          .then((response) => response.json())
          .then((data) => {
            setLat(data?.features[0]?.center[0]);
            setLong(data?.features[0]?.center[1]);
          });
      })();
    }
    }, [setLat, setLong, servicesNearme,REACT_APP_MAPBOX_ACCESS_TOKEN]);


      // get latest location latidue and longitude
      useEffect(() => {
        (async () => {
          await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${lat},${long}.json?access_token=${REACT_APP_MAPBOX_ACCESS_TOKEN}`
          )
            .then((response) => response.json())
            .then((data) => {
              setDefaultLocation(data?.features[0]?.place_name);
            });
        })();
      }, [long, lat, setDefaultLocation,REACT_APP_MAPBOX_ACCESS_TOKEN]);


  return (
      <Grid container>
         <HeroSectionWrapper />
         <DoorStepServices device={device}/>
         <Accordion device={device} />
         <UpdatedPackages device={device} />
         <CarouselItemMechanic />
         <CarServices device={device}  />
         {/* <Accessories /> */}
         <Testimonial device={device} />
         <OurTeam />
         <Footer device={device} />
      </Grid>
  );
}

export default RevampHomePage;
