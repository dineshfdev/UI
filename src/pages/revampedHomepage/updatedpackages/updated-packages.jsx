import React from "react";
import { Grid } from '@material-ui/core';

// styles
import './updated-packages-styles.scss';

// image 
import partners from '../../../images/assets/img/icons/global/partners.svg';
import search from '../../../images/assets/img/icons/global/search.svg';
import packages from '../../../images/assets/img/icons/global/package.svg';
import social from '../../../images/assets/img/icons/global/social.svg';

const UpdatedPackages = () => {
    return(<Grid className="updated-packages-container" xs={12} container>
        <Grid container xs={12} md={3} className="updated-packages-inner">
            <Grid item xs={4} md={12}>
                <div className="packages-img">
                <img src ={partners} alt="partners" />
                </div>
            </Grid>
            <Grid item xs={8} md={12}>
            <Grid item xs={12}>
                <div className="packages-primary-text">
                    200+
                </div>
            </Grid>
            <Grid item xs={12} md={12}>
                <div className="packages-secondary-text">
                    Business Partners across <br/> Chennai
                </div>
            </Grid>
            </Grid>
        </Grid>
        <Grid container xs={12} md={3} className="updated-packages-inner">
            <Grid item xs={4} md={12}>
                <div className="packages-img">
                <img src ={search} alt="search" />
                </div>
            </Grid>
            <Grid item xs={8} md={12}>
                <Grid item xs={12}>
                <div className="packages-primary-text">
                    Free
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="packages-secondary-text">
                    To search & schedule<br/> car service
                </div>
                </Grid>
            </Grid>
        </Grid>
        <Grid container xs={12} md={3} className="updated-packages-inner">
        <Grid item xs={4} md={12}>
                <div className="packages-img">
                <img src ={packages} alt="packages" />
                </div>
                </Grid>
                <Grid item xs={8} md={12}>
                <Grid item xs={12}>
                <div className="packages-primary-text">
                    3543+
                </div>
                </Grid>
                <Grid item xs={12}>
                <div className="packages-secondary-text">
                    Social Media connects <br/> Global
                </div>
                </Grid>
                </Grid>
        </Grid>
        <Grid container xs={12} md={3}>
        <Grid item xs={4} md={12} className="updated-packages-inner">
                <div className="packages-img">
                <img src ={social} alt="social" />
                </div>
                </Grid>
                <Grid item xs={8} md={12}>
                <Grid item xs={12}>
                <div className="packages-primary-text">
                    799
                </div>
                </Grid>
                <Grid item xs={12}>
                <div className="packages-secondary-text">
                    Hand picked packages <br/> starts at
                </div>
                </Grid>
                </Grid>
        </Grid>
    </Grid>)

};

export default UpdatedPackages;