import React from "react";
import { Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import instagram from "../../images/instagram-icon.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";

// styles
import "./footer.styles.scss";

export default function Footer(props) {
  return (
    <footer className="row center footer-conatiner">
      {/* <div>
        <ul className="footer-list">
          <li>
            <a href="https://www.servicegeni.in/">HOME</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/doorstep">DOORSTEP SERVICES</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/ecu">ECU CODING & REPAIR</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/about-us">ABOUT US</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/contact-us">CONTACT</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/blogs">BLOGS</a>
          </li>
          <li>
            <a href="https://www.servicegeni.in/viral-kindness">
              VIRAL KINDNESS
            </a>
          </li>
        </ul>
      </div> */}
      <Grid container justify="center" alignItems="center" className="footer">
        <Box clone order={{ xs: 2, sm: 2 }}>
          <Grid item xs={12} md={4} alignContent="center" alignItems="center">
            <div>
              <a
                href="https://www.facebook.com/servicegeni"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://twitter.com/GeniService"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt="twitter" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC7rSwsw7lqxQ4477gzlyAOg"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} alt="youtube" />
              </a>
              <a
                href="https://www.instagram.com/servicegeni/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </div>
            <div style={{ marginTop: "10px" }}>
              Copyright © 2021 BRN Technologies - All Rights Reserved.
            </div>
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, sm: 1 }}>
          <Grid item xs={12} md={6}>
            <ul className="footer-list">
              <li>
                <a href="https://www.servicegeni.in/doorstep-services">
                  Periodic Services
                </a>
              </li>
              <li>
                <a href="https://www.servicegeni.in/car-inspection">
                  Inspection Services
                </a>
              </li>
              <li>
                <a href="https://www.servicegeni.in/jumpstart-services">
                  Jumpstart Services
                </a>
              </li>
              <li>
                <a href="https://www.servicegeni.in/faq">FAQs</a>
              </li>
              <li>
                <a href="https://www.servicegeni.in/about-us">About Us</a>
              </li>
              <li>
                <a href="https://www.servicegeni.in/terms-conditions">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </Grid>
        </Box>
      </Grid>
    </footer>
  );
}
