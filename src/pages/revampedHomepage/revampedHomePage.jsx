import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import _ from "lodash";

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
import { getAllGaragesByLatAndLong, getLocationByLocation } from '../../services/services';

// redux
import { setDefaultLocation, setLatLong } from '../../redux/latLong';

const RevampHomePage = ({device}) => {
  const dispatch = useDispatch();
  const {serviceName,latLong} = useSelector(state => state.latLong);

    // get latest geocode along with latidue and longitude
    useEffect(() => {
      if(serviceName){
        getLocationByLocation(serviceName).then((res) => {
         dispatch(setLatLong([res.data[0].latitude,res.data[0].longitude]));
          dispatch(setDefaultLocation(res.data[0].address));
        });
    }
    }, [serviceName,dispatch]);

  // get location name on first load when user accepts location
  useEffect(() => {
    if(!serviceName){
     getAllGaragesByLatAndLong(8, latLong[0], latLong[1])
        .then((res) => {
          const responseData = res.data;
          const resData = responseData.length ? _.sortBy(responseData,'pinCode')[0].address : null;
          dispatch(setDefaultLocation(resData));
        })
        .catch((error) => error.message);
      }
    });

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
