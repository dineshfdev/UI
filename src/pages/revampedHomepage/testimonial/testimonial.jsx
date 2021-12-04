import React from "react";
import {Grid,Card,CardHeader,Avatar,CardContent,Typography} from '@material-ui/core';

// images
import user1 from "../../../images/assets/img/testimonial/user1.png";

// styles
import "./testimonial-styles.scss";

const Testimonial =() => {
return (
    <Grid className="testimonial-container">
        <h3 className="title">What People Says</h3>
        <Grid container xs={12} spacing={3}>
            <Grid item xs={3}>
                <Card className="testimonial-card">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <img src={user1} alt="user1" />
                        </Avatar>
                        }
                        title="Customer Name"
                        subheader="About customer"
                    />
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className="testimonial-card">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <img src={user1} alt="user1" />
                        </Avatar>
                        }
                        title="Customer Name"
                        subheader="About customer"
                    />
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className="testimonial-card">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <img src={user1} alt="user1" />
                        </Avatar>
                        }
                        title="Customer Name"
                        subheader="About customer"
                    />
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className="testimonial-card">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <img src={user1} alt="user1" />
                        </Avatar>
                        }
                        title="Customer Name"
                        subheader="About customer"
                    />
                </Card>
            </Grid>
        </Grid>
    </Grid>
)};

export default Testimonial;