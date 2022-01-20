import React from "react";
import { Grid,Container } from '@material-ui/core';

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
    return(
    <Container>
    <Grid className="car-container" xs={12}>
        <Grid container item xs={12} md={12}>
            <div className="services-header-container">
                <h3 className="title item">Popular Car Services</h3>
                <div className="item content-right"><a className="services-link" href="#">View all Services</a></div>
            </div>
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
    </Grid>
    </Container>
    )

};

export default CarServices;