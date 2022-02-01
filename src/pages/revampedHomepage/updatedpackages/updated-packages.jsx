import React from "react";
import { Grid,Container } from '@material-ui/core';

// styles
import './updated-packages-styles.scss';

// image 
import partners from '../../../images/assets/img/icons/global/partners.svg';
import search from '../../../images/assets/img/icons/global/search.svg';
import packages from '../../../images/assets/img/icons/global/package.svg';
import social from '../../../images/assets/img/icons/global/social.svg';

const UpdatedPackages = ({device}) => {
    const {breakpoint} = device;
    return(
        <Grid className="updated-packages-container" xs={12}>
    <Container>
        <Grid  xs={12} container>
        <Grid container xs={12} md={3} className="updated-packages-inner">
            <Grid item xs={2} md={12}>
                <div className="packages-img">
                <img src ={partners} alt="partners" />
                </div>
            </Grid>
            <Grid item xs={9} md={12} className={`${breakpoint === 'phone'?' packages-text-space ' : ''}`}>
            <Grid item xs={12}>
                <div className="packages-primary-text">
                    250+
                </div>
            </Grid>
            <Grid item xs={12} md={12}>
                <div className="packages-secondary-text">
                    service partners across <br/> Chennai
                </div>
            </Grid>
            </Grid>
        </Grid>
        <Grid container xs={12} md={3} className="updated-packages-inner">
            <Grid item xs={2} md={12}>
                <div className="packages-img">
                <img src ={search} alt="search" />
                </div>
            </Grid>
            <Grid item xs={9} md={12} className={`${breakpoint === 'phone'?' packages-text-space ' : ''}`}>
                <Grid item xs={12}>
                <div className="packages-primary-text">
                &#8377; 0
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="packages-secondary-text">
                    to search & schedule <br/> car service
                </div>
                </Grid>
            </Grid>
        </Grid>
        <Grid container xs={12} md={3} className="updated-packages-inner">
        <Grid item xs={2} md={12}>
                <div className="packages-img">
                <img src ={packages} alt="packages" />
                </div>
                </Grid>
                <Grid item xs={9} md={12} className={`${breakpoint === 'phone'?' packages-text-space ' : ''}`}>
                <Grid item xs={12}>
                <div className="packages-primary-text">
                    5394+
                </div>
                </Grid>
                <Grid item xs={12}>
                <div className="packages-secondary-text">
                    social media connects
                </div>
                </Grid>
                </Grid>
        </Grid>
        <Grid container xs={12} md={3} className="updated-packages-inner">
        <Grid item xs={2} md={12}>
                <div className="packages-img">
                <img src ={social} alt="social" />
                </div>
                </Grid>
                <Grid item xs={9} md={12} className={`${breakpoint === 'phone'?' packages-text-space ' : ''}`}>
                <Grid item xs={12}>
                <div className="packages-primary-text">
                &#8377; 649
                </div>
                </Grid>
                <Grid item xs={12}>
                <div className="packages-secondary-text">
                     hand picked packages <br/> starts at
                </div>
                </Grid>
                </Grid>
        </Grid>
    </Grid>
    </Container>
    </Grid>
    )

};

export default UpdatedPackages;