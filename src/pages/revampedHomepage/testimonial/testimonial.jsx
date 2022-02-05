import React,{useState} from "react";
import {Grid,Card,CardHeader,Avatar,CardContent,Typography,Container} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

import Carousel from 'react-elastic-carousel';

// styles
import "./testimonial-styles.scss";

const Testimonial =({device}) => {
    const {breakpoint} = device;
    const [breakPoints] = useState([
        { width: 1, itemsToShow: 1.2,showArrows: false,enableSwipe: true  },
        { width: 550, itemsToShow: 2.2, itemsToScroll: 1, pagination: false,showArrows: false ,enableSwipe: true},
        { width: 850, itemsToShow: 3.5,showArrows: true , itemsToScroll: 1,enableSwipe: true},
        { width: 1150, itemsToShow: 3.5, itemsToScroll: 2 ,enableSwipe: true},
        { width: 1450, itemsToShow: 4.5 },
        { width: 1750, itemsToShow: 4.5 },
      ]);

return (
    <Grid className={`${breakpoint === 'phone' ? 'testimonial-container-mobile': 'testimonial-container'}`}>
        <Container>
        <h3 className="title">What people say</h3>
        <Grid container xs={12} spacing={3} style={{position: 'relative'}}>
        <Carousel breakPoints={breakPoints} 
        transitionMs={700}
        pagination={false}
        className="carousel-container"
        >
                <Card className="testimonial-card same-height">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        I usually carry around my farming material in my car along with my pet who never lets go of me. Service Geni had a wonderful team sent to my home to get my car interior cleaned. The experts were able to remove the stains on my car seats and cleaned my car so well . Thank you Service Geni
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <PersonIcon />
                        </Avatar>
                        }
                        title="Swetha Prabu"
                        subheader="About customer"
                    />
                </Card>
                <Card className="testimonial-card same-height">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        thank you @servicegeni for helping me find the best person to fix my car windshield, it was a timely help and the extra mile of support by sending them to do the replacement in my house was really nice
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <PersonIcon />
                        </Avatar>
                        }
                        title="Jennifer Hamrita"
                        subheader="About customer"
                    />
                </Card>
                <Card className="testimonial-card same-height">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        On the eve before my wedding I was perplexed with a dirty car after a grand bachelor's party. Service Geni helped me with their timely service by sending their steam wash team right to my house at dawn on the Wedding Day. Thank you for the great service and promt response.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <PersonIcon />
                        </Avatar>
                        }
                        title="Avinash"
                        subheader="Business owner"
                    />
                </Card>
                <Card className="testimonial-card same-height">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        I was trying to revive my dead car battery on a busy day, i just dialed Service Geni and their friendly customer service executive was empathetic to my situation and arranged for a mechanic from the locality to visit me immediately and change my car battery at a good price, their service was prompt in an emergency situation.
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <PersonIcon />
                        </Avatar>
                        }
                        title="Mohammed Hasan"
                        subheader="Industrialist"
                    />
                </Card>
                <Card className="testimonial-card same-height">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        I used the Find a mechanic option on the Service Geni website and located a Great place to get my car repaired. The mechanic went out of their way to procure parts and paint matching was very good. Highly recommended . The repairs were carried out at a fraction of the cost compared to the dealership. Special mention of the head mechanic and friendly staff
                        </Typography>
                    </CardContent>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe">
                            <PersonIcon />
                        </Avatar>
                        }
                        title="Praveen"
                        subheader="IT manager"
                    />
                </Card>
            </Carousel>
        </Grid>
        </Container>
    </Grid>
)};

export default Testimonial;