import React,{useState} from "react";
import { Grid,Card,CardActionArea,CardContent,Typography,CardActions,Button,Container } from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
// styles
import './door-step-services-styles.scss';
import "../styles/common-styles.scss";

// images  
import generalService from "../../../images/assets/img/services/general-service.jpg";
import expressService from "../../../images/assets/img/services/express-service.jpg";
import inspectionService from "../../../images/assets/img/services/inspection-service.jpg";
import jumpstartService from "../../../images/assets/img/services/jumpstart-service.jpg";
import carWash from "../../../images/assets/img/services/car-wash.jpg";

const DoorStepServices = () =>{
    const [breakPoints] = useState([
        { width: 1, itemsToShow: 1.2,showArrows: false,enableSwipe: true  },
        { width: 550, itemsToShow: 1.2, itemsToScroll: 1, pagination: false,showArrows: false ,enableSwipe: true},
        { width: 850, itemsToShow: 4.2,showArrows: true , itemsToScroll: 1,enableSwipe: true},
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 ,enableSwipe: true},
        { width: 1450, itemsToShow: 4 },
        { width: 1750, itemsToShow: 4 },
      ]);
    return(
        <Container className="doorstep-services-wrapper">
        <Grid item className="doorstep-services-container" xs={12} >
            <h3 className="title">Need services at your place</h3>
            <Grid container>
                    <Grid container item xs={12} md={8}>
                        <div className="doorstep-subtitle">For your convenience, we provide handpicked car services right at your doorstep.</div>
                    </Grid>
                    <Grid container item xs={12} md={4} className="card-accessories-button">
                        <div className="desktop-content-top">
                            <a className="services-link" href="https://www.servicegeni.in/doorstep">View all Services </a>
                        </div>
                    </Grid>
            </Grid>
            <Carousel breakPoints={breakPoints} 
        transitionMs={700}
        pagination={false}
        className="carousel-container"
        >
            <Grid>
                <Card className="card-container">
                                <CardActionArea>
                                <img src={carWash} alt={carWash} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                    Car Wash
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ &#x20B9; 649 
                                    </Typography>
                                    
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button size="small" color="primary" className="card-button" onClick={e => {
      e.preventDefault();
      window.open(
        'https://www.servicegeni.in/car-wash-near-me',
        '_blank' 
      );
      }}>
                                    Book Now
                                </Button>
                                </CardActions>
                        </Card>
                </Grid>
                <Grid>
                <Card className="card-container">
                                <CardActionArea>
                                <img src={jumpstartService} alt={jumpstartService} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                    Jumpstart
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ &#x20B9; 799 
                                    </Typography>
                                    
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button size="small" color="primary" className="card-button" onClick={e => {
      e.preventDefault();
      window.open(
        'https://www.servicegeni.in/car-emergency',
        '_blank' 
      );
      }}>
                                    Book Now
                                </Button>
                                </CardActions>
                        </Card>
                </Grid>
                <Grid>
                <Card className="card-container">
                                <CardActionArea>
                                <img src={inspectionService} alt={inspectionService} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                    Inspection 
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ &#x20B9; 799 
                                    </Typography>
                                    
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button size="small" color="primary" className="card-button" onClick={e => {
      e.preventDefault();
      window.open(
        'https://www.servicegeni.in/doorstep',
        '_blank' 
      );
      }}>
                                    Book Now
                                </Button>
                                </CardActions>
                        </Card>
                </Grid>
                <Grid>
                        <Card className="card-container">
                                <CardActionArea>
                                <img src={expressService} alt={expressService} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                    Express Service
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ &#x20B9; 1800 
                                    </Typography>
                                    
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button size="small" color="primary" className="card-button" onClick={e => {
      e.preventDefault();
      window.open(
        'https://www.servicegeni.in/doorstep',
        '_blank' 
      );
      }}>
                                    Book Now
                                </Button>
                                </CardActions>
                        </Card>
                </Grid>
                <Grid>
                        <Card className="card-container">
                                <CardActionArea>
                                <img src={generalService} alt={generalService} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                        General Service
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ &#x20B9; 4499 
                                    </Typography>
                                    
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button size="small" color="primary" className="card-button" onClick={e => {
      e.preventDefault();
      window.open(
        'https://www.servicegeni.in/doorstep',
        '_blank' 
      );
      }}>
                                    Book Now
                                </Button>
                                </CardActions>
                        </Card>
                </Grid>
            </Carousel>
            <Grid container item xs={12} md={4} className="card-accessories-button">
                <div className="desktop-content-bottom">
                        <a className="services-link" href="https://www.servicegeni.in/doorstep">View all Services </a>
                </div>
            </Grid>
        </ Grid>
        </Container>
    );
};

export default DoorStepServices;