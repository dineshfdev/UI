import React,{useState,useEffect} from "react";
import { useHistory ,Link} from "react-router-dom";
import {Grid,Container} from '@material-ui/core';

// services
import { getAllUniqueGarages } from "../../../services/services";

// styles
import "./footer-styles.scss";

const Footer =() => {
    let history = useHistory();

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
        <Container>
            <Grid container xs={12} spacing={3}>
                <Grid item xs={6} md={3}>
                    <h5 className="footer-header">About Us</h5>
                    <ul className="footer-list-container">
                        <li><a href="https://www.servicegeni.in/about-us">About</a></li>
                        <li><a href="https://www.servicegeni.in/contact-us">Contact Us</a></li>
                        <li><a href="https://www.servicegeni.in/faq">FAQs</a></li>
                        <li><a href="https://www.servicegeni.in/blogs/categories/trending-auto-news">News</a></li>
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
                        <li><a href="https://www.servicegeni.in/doorstep">General Service</a></li>
                        <li><a href="https://www.servicegeni.in/doorstep">Express Service</a></li>
                        <li><a href="https://www.servicegeni.in/doorstep">Inspection Service</a></li>
                        <li><a href="https://www.servicegeni.in/doorstep">Jumpstart Service</a></li>
                        <li><a href="https://www.servicegeni.in/doorstep">Car Wash</a></li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={5}>
                    <h5 className="footer-header">Our Service Partner are all across the city, check now</h5>
                    <Grid container xs={12}>
                        <ul className="footer-list-container footer-list-location">
                            <li onClick={() => onLocationClick("Anna Nagar")}>Anna Nagar</li>
                            <li onClick={() => onLocationClick("Adyar")}>Adyar</li>
                            <li onClick={() => onLocationClick("Mylapore")}>Mylapore</li>
                            <li onClick={() => onLocationClick("Nungambakkam")}>Nungambakkam</li>
                            <li onClick={() => onLocationClick("OMR")}>OMR</li>
                            <li onClick={() => onLocationClick("West Mambalam")}>West Mambalam</li>
                            <li onClick={() => onLocationClick("Royapettah")}>Royapettah</li>
                            <li onClick={() => onLocationClick("Velachery")}>Velachery</li>
                            <li onClick={() => onLocationClick("Adambakkam")}>Adambakkam</li>
                            <li onClick={() => onLocationClick("Purasawalkam")}>Purasawalkam</li>
                            <li onClick={() => onLocationClick("Mount Road")}>Mount Road</li>
                            <li onClick={() => onLocationClick("Perumbakkam")}>Perumbakkam</li>
                            <li onClick={() => onLocationClick("Koyambedu")}>Koyambedu</li>
                            <li onClick={() => onLocationClick("Kilpauk")}>Kilpauk</li>
                            <li onClick={() => onLocationClick("Kelambakkam")}>Kelambakkam</li>
                            <li onClick={() => onLocationClick("Medavakkam")}>Medavakkam</li>
                            <li onClick={() => onLocationClick("Chrompet")}>Chrompet</li>
                            <li onClick={() => onLocationClick("Alwarpet")}>Alwarpet</li>
                            <li onClick={() => onLocationClick("Perambur")}>Perambur</li>
                            <li onClick={() => onLocationClick("Porur")}>Porur</li>
                            <li onClick={() => onLocationClick("Tambaram")}>Tambaram</li>
                        </ul>
                        <Link to="/search" className="link offset-margin-top">
                            More Locations
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </Grid>
)};

export default Footer;