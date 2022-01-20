import React from "react";
import { Grid,Card,CardActionArea,CardContent,Typography,CardActions,Button,Container } from '@material-ui/core';

// styles
import './door-step-services-styles.scss';
import "../styles/common-styles.scss";

// images  
import generalService from "../../../images/assets/img/services/general-service.png";
import expressService from "../../../images/assets/img/services/express-service.png";
import inspectionService from "../../../images/assets/img/services/inspection-service.png";
import jumpstartService from "../../../images/assets/img/services/jumpstart-service.png";

const DoorStepServices = () =>{
    return(
        <Container className="doorstep-services-wrapper">
        <Grid item className="doorstep-services-container" xs={12} >
            <h3 className="title">Need services at your place</h3>
            <Grid container>
                    <Grid container item xs={12} md={8}>
                        <div>For your convenience, we also provide handpicked car maintenance services right at your Doorstep.</div>
                    </Grid>
                    <Grid container item xs={12} md={4} className="card-accessories-button">
                        <a className="services-link" href="https://www.servicegeni.in/doorstep">View all Services </a>
                    </Grid>
            </Grid>
            <div style={{ padding: "20px 0" }}>
            <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                        <Card className="card-container">
                                <CardActionArea>
                                <img src={generalService} alt={generalService} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                        General Service
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ 3600
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
                <Grid item xs={6} md={3}>
                        <Card className="card-container">
                                <CardActionArea>
                                <img src={expressService} alt={expressService} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                    Express Service
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ 3600
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
                <Grid item xs={6} md={3}>
                <Card className="card-container">
                                <CardActionArea>
                                <img src={inspectionService} alt={inspectionService} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                    Inspection Service
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ 3600
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
                <Grid item xs={6} md={3}>
                <Card className="card-container">
                                <CardActionArea>
                                <img src={jumpstartService} alt={jumpstartService} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                    Car Wash
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ 3600
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
                
                
            </Grid>
            </div>
        </ Grid>
        </Container>
    );
};

export default DoorStepServices;