import React,{useEffect,useState} from "react";
import { Grid,Card,CardActionArea,CardContent,Typography,CardActions,Button } from '@material-ui/core';

// services
import { getTopGaragesNearLocation } from "../../../services/services";

// styles
import './door-step-services-styles.scss';
import "../styles/common-styles.scss";
import Accordion from "../accordion/accordion";

// images  
import generalService from "../../../images/assets/img/services/general-service.png";
import expressService from "../../../images/assets/img/services/express-service.png";
import inspectionService from "../../../images/assets/img/services/inspection-service.png";
import jumpstartService from "../../../images/assets/img/services/jumpstart-service.png";

const DoorStepServices = ({latitude,longitude}) =>{
    const [data, setData] = useState([]);
    useEffect(() => {
    getTopGaragesNearLocation(latitude,longitude)
      .then((res) => setData(res.data))
      .catch((error) => error.message);
    }, [latitude,longitude]);

    console.log('data',data);
    return(
        <Grid item className="doorstep-services-container" xs={12} >
            <h3 className="title">Popular Doorstep Services</h3>
            <Grid container>
                    <Grid container item xs={8}>
                        <div>For your convenience, we also provide handpicked car maintenance services right at your home or work premises.</div>
                    </Grid>
                    <Grid container item xs={4} justify="flex-end">
                        <a className="services-link" href="#">View All Services ></a>
                    </Grid>
            </Grid>
            <div style={{ padding: "20px 0" }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                        <Card>
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
                                <Button size="small" color="primary" className="card-button">
                                    Book Now
                                </Button>
                                </CardActions>
                        </Card>
                </Grid>
                <Grid item xs={3}>
                        <Card>
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
                                <Button size="small" color="primary" className="card-button">
                                    Book Now
                                </Button>
                                </CardActions>
                        </Card>
                </Grid>
                <Grid item xs={3}>
                <Card>
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
                                <Button size="small" color="primary" className="card-button">
                                    Book Now
                                </Button>
                                </CardActions>
                        </Card>
                </Grid>
                <Grid item xs={3}>
                <Card>
                                <CardActionArea>
                                <img src={jumpstartService} alt={jumpstartService} style={{width: "100%"}} />
                                <CardContent>
                                
                                    <Typography gutterBottom variant="h5" component="h2" className="card-header">
                                    Jumpstart Service
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className="card-price">
                                    Starts @ 3600
                                    </Typography>
                                    
                                </CardContent>
                                </CardActionArea>
                                <CardActions>
                                <Button size="small" color="primary" className="card-button">
                                    Book Now
                                </Button>
                                </CardActions>
                        </Card>
                </Grid>
                
            </Grid>
            </div>
            <Accordion />
        </ Grid>

    );
};

export default DoorStepServices;