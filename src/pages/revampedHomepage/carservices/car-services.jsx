import React from "react";
import { Grid } from '@material-ui/core';

// styles
import './car-services-styles.scss';

// image 
import partners from '../../../images/assets/img/icons/global/partners.svg';

const CarServices = () => {
    return(<Grid className="car-container" xs={12}>
        <Grid container>
            <Grid container item xs={8}>
                <h3 className="title">Pouplar Car Services</h3>
            </Grid>
            <Grid container item xs={4} justify="flex-end">
                <div>View All Services</div>
            </Grid>
        </Grid>
        <Grid container item spacing={3} xs={12} >
                <Grid items xs={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={partners} alt="partners" />
                            </div>
                            <div className="services-primary-text">
                                Batteries
                            </div>
                        </div>
                </Grid>
                <Grid items xs={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={partners} alt="partners" />
                            </div>
                            <div className="services-primary-text">
                            Car Wash
                            </div>
                        </div>
                </Grid>
                <Grid items xs={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={partners} alt="partners" />
                            </div>
                            <div className="services-primary-text">
                            AC repair and cleaning
                            </div>
                        </div>
                </Grid>
                <Grid items xs={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={partners} alt="partners" />
                            </div>
                            <div className="services-primary-text">
                            Tyre and wheel services
                            </div>
                        </div>
                </Grid>
                <Grid items xs={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={partners} alt="partners" />
                            </div>
                            <div className="services-primary-text">
                            Painting
                            </div>
                        </div>
                </Grid>
                <Grid items xs={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={partners} alt="partners" />
                            </div>
                            <div className="services-primary-text">
                            Windshield
                            </div>
                        </div>
                </Grid>
                
            </Grid>
    </Grid>)

};

export default CarServices;