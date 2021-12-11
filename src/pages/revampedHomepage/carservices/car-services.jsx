import React from "react";
import { Grid } from '@material-ui/core';

// styles
import './car-services-styles.scss';

// image 
import battery from '../../../images/assets/img/carservices/battery.png';
import carWash from '../../../images/assets/img/carservices/car-wash.png';
import Ac from '../../../images/assets/img/carservices/AC.png';
import Tyre from '../../../images/assets/img/carservices/tyre.png';
import Painting from '../../../images/assets/img/carservices/painting.png';
import WindShield from '../../../images/assets/img/carservices/windshield.png';

const CarServices = () => {
    return(<Grid className="car-container" xs={12}>
        <Grid container>
            <Grid container item xs={12} md={8}>
                <h3 className="title">Popular Car Services</h3>
            </Grid>
            <Grid container item xs={12} md={4} justify="flex-end">
                <div>View All Services</div>
            </Grid>
        </Grid>
        <Grid container item spacing={3} xs={12} className="car-container-inner" >
                <Grid items xs={6} md={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={battery} alt="Batteries" />
                            </div>
                            <div className="services-primary-text">
                                Batteries
                            </div>
                        </div>
                </Grid>
                <Grid items xs={6} md={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={carWash} alt="carWash" />
                            </div>
                            <div className="services-primary-text">
                            Car Wash
                            </div>
                        </div>
                </Grid>
                <Grid items xs={6} md={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={Ac} alt="Ac" />
                            </div>
                            <div className="services-primary-text">
                            AC repair and cleaning
                            </div>
                        </div>
                </Grid>
                <Grid items xs={6} md={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={Tyre} alt="Tyre" />
                            </div>
                            <div className="services-primary-text">
                            Tyre and wheel services
                            </div>
                        </div>
                </Grid>
                <Grid items xs={6} md={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={Painting} alt="Painting" />
                            </div>
                            <div className="services-primary-text">
                            Painting
                            </div>
                        </div>
                </Grid>
                <Grid items xs={6} md={2}>
                        <div className="serices-container">
                            <div className="packages-img">
                            <img src ={WindShield} alt="WindShield" />
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