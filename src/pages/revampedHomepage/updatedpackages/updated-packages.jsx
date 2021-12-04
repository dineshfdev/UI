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
        <Grid items xs={3}>
            <div>
                <div className="packages-img">
                <img src ={partners} alt="partners" />
                </div>
                <div className="packages-primary-text">
                    200+
                </div>
                <div className="packages-secondary-text">
                    Business Partners across <br/> Chennai
                </div>
            </div>
        </Grid>
        <Grid items xs={3}>
            <div>
                <div className="packages-img">
                <img src ={search} alt="search" />
                </div>
                <div className="packages-primary-text">
                    Free
                </div>
                <div className="packages-secondary-text">
                    To search & schedule<br/> car service
                </div>
            </div>
        </Grid>
        <Grid items xs={3}>
            <div>
                <div className="packages-img">
                <img src ={packages} alt="packages" />
                </div>
                <div className="packages-primary-text">
                    3543+
                </div>
                <div className="packages-secondary-text">
                    Social Media connects <br/> Global
                </div>
            </div>
        </Grid>
        <Grid items xs={3}>
            <div>
                <div className="packages-img">
                <img src ={social} alt="social" />
                </div>
                <div className="packages-primary-text">
                    799
                </div>
                <div className="packages-secondary-text">
                    Hand picked packages <br/> starts at
                </div>
            </div>
        </Grid>
    </Grid>)

};

export default UpdatedPackages;