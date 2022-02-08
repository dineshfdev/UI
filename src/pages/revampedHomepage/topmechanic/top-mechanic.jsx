import React,{useState} from 'react';
import {useSelector} from "react-redux";
import {Container, Grid} from "@material-ui/core";
import StarRatings from "react-star-ratings";

import Carousel from 'react-elastic-carousel';
import { getTopGaragesNearLocation } from '../../../services/services';

// images
import Marker from "../../../images/assets/img/icons/global/marker.svg";
import locationIcon from "../../../images/assets/img/header/location.png";
import comingSoon from "../../../images/coming-soon.jpg";

// styles 
import "../carousel/carousel.styles.scss";
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
const CarouselItemMechanic = () => {
    const history = useHistory();
      const [data,setData] =useState([]);

      const { latLong,defaultLocation } = useSelector(state => state.latLong);

    // get top garages
      useEffect(() => {
        getTopGaragesNearLocation(latLong[0],latLong[1])
      .then((res) => setData(res.data))
      .catch((error) => error.message);
    },[latLong]);


      const [breakPoints] = useState([
        { width: 1, itemsToShow: 1.2,showArrows: false,enableSwipe: true  },
        { width: 550, itemsToShow: 2.2, itemsToScroll: 1, pagination: false,showArrows: false ,enableSwipe: true},
        { width: 850, itemsToShow: 3.5,showArrows: true , itemsToScroll: 1,enableSwipe: true},
        { width: 1150, itemsToShow: 3.5, itemsToScroll: 2 ,enableSwipe: true},
        { width: 1450, itemsToShow: 4.5 },
        { width: 1750, itemsToShow: 4.5 },
      ]);

      // onclick location 
        const onBookNow = (title,location) => {
          history.push({
            pathname: "/details",
            search: `?garageName=${title}?location=${location}`,
            state: { val: title, location: location },
          });
        };

        console.log('data',data);

    return (
      <Container>
        <Grid item xs={12} className="items-accessories-container">
             <h3 className="title">Top Rated Mechanics</h3>
             <h4 className="item-subheader"><img src={locationIcon} alt="location" /> <span>{defaultLocation !== null ? defaultLocation : "we don't serve in this area"}</span></h4>
        {data.length ? 
        <Carousel breakPoints={breakPoints} 
        transitionMs={700}
        pagination={false}
        className="carousel-container"
        >
            {data.map((x,index)=>
                <div className="mechanic-carousel__item same-height" key={index}>
                {x.garageImage === "" ? (
                  <img src={comingSoon} alt="garage" className="mechanic-carousel__item-image" />
                ) : (
                  <img
                    src={`data:image/jpeg;base64,${x.garageImage}`}
                    alt="garage"
                    className="mechanic-carousel__item-image"
                  />
                )}
                <div className="mechanic-carousel__item-content">
                  <p className="mechanic-carousel__item-heading">{x.garageTitle}</p>
                  <div className="mechanic-carousel__item-address mechanic-carousel__item--semibold">
                    <p className="mechanic-carousel__item-address-marker">
                      <img
                        src={Marker}
                        alt="marker"
                        className="mechanic-carousel__item-address-marker-image"
                      ></img>
                    </p>
                    <p className="mechanic-carousel__item--light-grey-2">
                     {x.address}
                    </p>
                  </div>
                  <div className="mechanic-carousel__item-reviews mechanic-carousel__item--semibold">
                  {x.averageGarageRatings === "NaN"  || x.averageGarageRatings === "N/A" ? (
                        "No reviews"
                      ) : (
                        <>
                          <StarRatings
                            rating={parseInt(
                              x.averageGarageRatings
                            )}
                            starRatedColor="#eea44d"
                            numberOfStars={5}
                            name="rating"
                            starDimension="20px"
                            starSpacing="3px"
                          />
                          <span style={{ paddingLeft: "10px" }}>
                            {x.totalReviews > 1
                              ? `${x.totalReviews} reviews`
                              : `${x.totalReviews} review`}
                          </span>
                        </>
                      )}
                  </div>
                  <div className="mechanic-carousel__item-last-child">
                    <div className="mechanic-carousel__item-starts-from">
                      <p className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1 block-clear">
                        Starts from
                      </p>
                      <p className="mechanic-carousel__item--bold mechanic-carousel__item--brand-primary-dark block-clear">
                      &#x20b9; {x.startingPrice}
                      </p>
                    </div>
                    <div className="mechanic-carousel__item-distance">
                      <p className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1 block-clear">
                        Distance
                      </p>
                      <p className="mechanic-carousel__item--bold mechanic-carousel__item--light-grey-2 block-clear">
                        {x.distanceFromCurrentLocation}
                      </p>
                    </div>
                    <button className="mechanic-carousel__item-button" onClick={() =>onBookNow(x.garageTitle,x.location)}>
                      Book now
                    </button>
                  </div>
                </div>
              </div>)}
      </Carousel>

      : <div>No service centre found</div>
}
      </Grid>
</Container>
      
    );
  }

  export default CarouselItemMechanic;