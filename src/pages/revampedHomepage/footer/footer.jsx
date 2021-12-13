import React from "react";
import {Grid} from '@material-ui/core';

// styles
import "./footer-styles.scss";

const Footer =() => {
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
                <Grid item xs={6}>
                    <ul className="footer-list-container">
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                    <ul className="footer-list-container">
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                        <li>Near My Location</li>
                    </ul>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
)};

export default Footer;