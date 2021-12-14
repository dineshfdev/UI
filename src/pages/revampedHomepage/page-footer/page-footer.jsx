import React from "react";
import {Grid} from '@material-ui/core';

// images
import Logo from "../../../images/logo.png";
import instagramIcon from "../../../images/assets/img/icons/socialmedia/instagram.svg";
import twitterIcon from "../../../images/assets/img/icons/socialmedia/twitter.svg";
import linkedinIcon from "../../../images/assets/img/icons/socialmedia/linkedin.svg";
import facebookIcon from "../../../images/assets/img/icons/socialmedia/facebook.svg";
import youtubeIcon from "../../../images/assets/img/icons/socialmedia/youtube.svg";

// styles
import "./page-footer-styles.scss";

const PageFooter =() => {
return (
    <Grid className="page-footer-container">
        <Grid container xs={12} spacing={3}>
            <Grid item xs={12} md={6}>
                <img src={Logo} alt={Logo} className="page-footer-logo" />
                <p>
                    29, MGR Street, Santhosapuram
                    Chennai - 600073, India.
                </p>
            </Grid>
            <Grid item xs={12} md={6}>
                <div>
                    <a href="https://www.instagram.com/servicegeni/" target="_blank" rel="instagram noreferrer"><img src={instagramIcon} alt="instagram" /></a>
                    <a href="https://twitter.com/GeniService"><img src={twitterIcon} alt="twitter" /></a>
                    <a href="https://www.linkedin.com/company/service-geni"><img src={linkedinIcon} alt="linkedin" /></a>
                    <a href="https://www.facebook.com/servicegeni"><img src={facebookIcon} alt="facebook" /></a>
                    <a href="https://www.youtube.com/channel/UC7rSwsw7lqxQ4477gzlyAOg"><img src={youtubeIcon} alt="youtube" /></a>
                </div>
                <p>
                   <a href="#" className="offset-margin-right-10">Terms & Conditions</a>
                   <a href="#">Privacy Policy</a>
                </p>
                <p>
                    Copyright © 2021 BRN Technologies - All Rights Reserved.
                </p>
            </Grid>
        </Grid>
    </Grid>
)};

export default PageFooter;