import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

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

// Styles
import './styles/mixins.scss';
import {  getLocationByLocation } from '../../services/services';

// redux
import {setLatLong } from '../../redux/latLong';

const RevampHomePage = ({device}) => {
  const dispatch = useDispatch();
  const {serviceName} = useSelector(state => state.latLong);

    // get latest geocode along with latidue and longitude
    useEffect(() => {
      if(serviceName){
        getLocationByLocation(serviceName).then((res) => {
         dispatch(setLatLong([res.data[0].latitude,res.data[0].longitude]));
        });
    }
    }, [serviceName,dispatch]);

  return (
      <>
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
      </>
  );
}

export default RevampHomePage;
