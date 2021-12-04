import React from 'react';
import { Card,CardActionArea,CardMedia,CardContent,Typography,CardActions,Button } from '@material-ui/core';
//images 
import generalService from "../../../images/assets/img/services/general-service.png"

const Cards =() => {
    return (<Card>
        <CardActionArea>
        <img src={generalService} alt={generalService} style={{width: "100%"}} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              General Service
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Starts @ 3600
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Book Now
          </Button>
        </CardActions>
      </Card>)
}

export default Cards;