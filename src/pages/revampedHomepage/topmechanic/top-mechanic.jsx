import React,{useState,useEffect} from 'react';
import {Grid} from "@material-ui/core";
import StarRatings from "react-star-ratings";

import Carousel from 'react-elastic-carousel';
import { getTopGaragesNearLocation } from '../../../services/services';

// images
import Marker from "../../../images/assets/img/icons/global/marker.svg";

// styles 
import "../carousel/carousel.styles.scss";

const CarouselItemMechanic = ({latitude,longitude}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
    getTopGaragesNearLocation(latitude,longitude)
      .then((res) => setData(res.data))
      .catch((error) => error.message);
    }, [latitude,longitude]);

      const [breakPoints] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 2, pagination: false,showArrows: false },
        { width: 850, itemsToShow: 1,showArrows: false },
        { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 4 },
        { width: 1750, itemsToShow: 4 },
      ]);

    return (
        <Grid item xs={12} className="items-accessories-container">
             <h3 className="title">Top Rated Mechanics</h3>
        <Carousel breakPoints={breakPoints} easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
        pagination={false}>
            {data.map(x=>
                <div className="mechanic-carousel__item">
                {x.garageImage === "" ? (
                  <img src="http://via.placeholder.com/400x200" alt="garage" className="mechanic-carousel__item-image" />
                ) : (
                  <img
                    src={`data:image/jpeg;base64,${x.garageImage}`}
                    alt="garage"
                    className="mechanic-carousel__item-image"
                  />
                )}
                <div className="mechanic-carousel__item-content">
                  <p className="mechanic-carousel__item-heading">{x.garageTitle} Test</p>
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
                  {x.averageGarageRatings === "NaN" ? (
                        "No Reviews"
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
                            {x.totalGarageReviews > 1
                              ? `${x.totalGarageReviews} reviews`
                              : `${x.totalGarageReviews} review`}
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
                    <button className="mechanic-carousel__item-button">
                      Book now
                    </button>
                  </div>
                </div>
              </div>)}
      </Carousel>
      </Grid>

      
    );
  }

  export default CarouselItemMechanic;