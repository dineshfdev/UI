import React,{useState} from "react";
import {Grid,Card,CardHeader,Avatar,CardContent,Typography} from '@material-ui/core';

// images
import user1 from "../../../images/assets/img/testimonial/user1.png";

// styles
import "./testimonial-styles.scss";

const Testimonial =() => {
    const [breakPoints] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]);
return (
    <Grid className="testimonial-container">
        <h3 className="title">What People Says</h3>
        <Grid container xs={12} spacing={3}>
            <Grid item xs={12} md={3}>
                <Card className="testimonial-card same-height">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        I usually carry around my farming material in my car along with my pet who never lets go of me. Service Geni had a wonderful team sent to my home to get my car interior cleaned. The experts were able to remove the stains on my car seats and cleaned my car so well . Thank you Service Geni
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <img src={user1} alt="user1" />
                        </Avatar>
                        }
                        title="Swetha Prabu"
                        subheader="About customer"
                    />
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card className="testimonial-card same-height">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        thank you @servicegeni for helping me find the best person to fix my car windshield, it was a timely help and the extra mile of support by sending them to do the replacement in my house was really nice
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <img src={user1} alt="user1" />
                        </Avatar>
                        }
                        title="Jennifer Hamrita"
                        subheader="About customer"
                    />
                </Card>
            </Grid>
        </Grid>
    </Grid>
)};

export default Testimonial;