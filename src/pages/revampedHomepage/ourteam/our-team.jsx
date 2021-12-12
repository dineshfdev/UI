import React from "react";
import {Grid} from '@material-ui/core';

// images
import phone from '../../../images/assets/img/icons/global/phone.svg';
import mail from '../../../images/assets/img/icons/global/mail.svg';


// styles
import "./our-team-styles.scss";

const OurTeam =() => {
return (
    <Grid className="our-team-container">
        <Grid container xs={12} spacing={3}>
            <Grid item xs={12} md={6}>
                <h4 className="team-header">
                     Our Team would love to help you!
                </h4>
            </Grid>
            <Grid item xs={12} md={6} className="contact-right-section">
                <div className="contacts-container">
               <div>
                   <span><img src={phone} alt="phone" />+91 9361 040506 </span> 
                   <span><img src={mail} alt="mail" />care@servicegeni.in</span> 
                </div>
                <button className="hero-section-right__button book-now">BOOK NOW</button>
                </div>
            </Grid>
        </Grid>
    </Grid>
)};

export default OurTeam;