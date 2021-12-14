import React,{useState,useEffect} from "react";
import { useHistory, Link } from "react-router-dom";
import {Grid} from '@material-ui/core';

// services
import { getAllUniqueGarages } from "../../../services/services";

// styles
import "./footer-styles.scss";

const Footer =() => {
    let history = useHistory();
    const [locationData,setLocationData] = useState([]);
    useEffect(() => {
        (async () => {
          await getAllUniqueGarages()
            .then((response) => setLocationData(response.data))
            .catch((error) => error.message);
        })();
      }, []);

// onclick location 

const onLocationClick = (val) => {
      history.push({
        pathname: "/location-list",
        search: `?location=${val}`,
        state: { val, searchName: "location" },
      });
  };

return (
    <Grid className="contact-container">
        <Grid container xs={12} spacing={3}>
            <Grid item xs={6} md={3}>
                <h5 className="footer-header">About Us</h5>
                <ul className="footer-list-container">
                    <li><a href="https://www.servicegeni.in/about-us">About</a></li>
                    <li><a href="https://www.servicegeni.in/contact-us">Contact Us</a></li>
                    <li><a href="https://www.servicegeni.in/faq">FAQs</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="https://www.servicegeni.in/blogs">Blogs</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Our Partners</a></li>
                    <li><a href="#">Offers</a></li>
                    <li><a href="#">Reviews</a></li>
                </ul>
            </Grid>
            <Grid item xs={6} md={3}>
                <h5 className="footer-header">Our Services</h5>
                <ul className="footer-list-container">
                    <li><a href="https://service-geni.in/">Find Mechanics Near Me</a></li>
                </ul>
                <h5 className="footer-header">Doorstep Services</h5>
                <ul className="footer-list-container">
                    <li><a href="https://www.servicegeni.in/doorstep-services">General service</a></li>
                    <li><a href="https://www.servicegeni.in/doorstep-services">Express Service</a></li>
                    <li><a href="https://www.servicegeni.in/doorstep-services">Inspection Service</a></li>
                    <li><a href="https://www.servicegeni.in/doorstep-services">Jumpstart Service</a></li>
                    <li><a href="https://www.servicegeni.in/doorstep-services">Other Service</a></li>
                </ul>
            </Grid>
            <Grid item xs={12} md={5}>
                <h5 className="footer-header">Popular Areas We Serve At Chennai</h5>
                <Grid container xs={12}>
                    <ul className="footer-list-container footer-list-location">
                        {locationData.map(x =><li key={x} onClick={() => onLocationClick(x)}>{x}</li> )}
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)};

export default Footer;