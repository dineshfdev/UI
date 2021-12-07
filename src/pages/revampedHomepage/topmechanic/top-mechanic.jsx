import React,{useState,useEffect} from 'react';
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
    const [items,setItems] = useState( [
          {id: 1, title: 'item #1'},
          {id: 2, title: 'item #2'},
          {id: 3, title: 'item #3'},
          {id: 4, title: 'item #4'},
          {id: 5, title: 'item #5'}
        ]
      );

      const [breakPoints] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]);

      console.log('data',data);

    return (

        <Carousel breakPoints={breakPoints}>
        <div className="mechanic-carousel__item">
        <img
          //src={image}
          alt="carousel"
          className="mechanic-carousel__item-image"
        ></img>
        <div className="mechanic-carousel__item-content">
          <p className="mechanic-carousel__item-heading">test</p>
          <div className="mechanic-carousel__item-address mechanic-carousel__item--semibold">
            <p className="mechanic-carousel__item-address-marker">
              <img
                src={Marker}
                alt="marker"
                className="mechanic-carousel__item-address-marker-image"
              ></img>
            </p>
            <p className="mechanic-carousel__item--light-grey-2">
             Address
            </p>
          </div>
          <div className="mechanic-carousel__item-reviews mechanic-carousel__item--semibold">
            {/* {garageOverallRating.averageGarageRatings === "NaN" ? (
              "No Reviews"
            ) : (
              <>
                <StarRatings
                  rating={parseInt(garageOverallRating.averageGarageRatings)}
                  starRatedColor="#eea44d"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                  starSpacing="3px"
                />
                <p
                  style={{ margin: "0" }}
                  className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1"
                >
                  {garageOverallRating.totalGarageReviews > 1
                    ? `(${garageOverallRating.totalGarageReviews} reviews)`
                    : `(${garageOverallRating.totalGarageReviews} review)`}
                </p>
              </>
            )} */}
          </div>
          <div className="mechanic-carousel__item-last-child">
            <div className="mechanic-carousel__item-starts-from">
              <p className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1 block-clear">
                Starts from
              </p>
              <p className="mechanic-carousel__item--bold mechanic-carousel__item--brand-primary-dark block-clear">
                {/* {text.pricing} */}
              </p>
            </div>
            <div className="mechanic-carousel__item-distance">
              <p className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1 block-clear">
                Distance
              </p>
              <p className="mechanic-carousel__item--bold mechanic-carousel__item--light-grey-2 block-clear">
                {/* {distance} */}
              </p>
            </div>
            <button className="mechanic-carousel__item-button">
              Book now
            </button>
          </div>
        </div>
      </div>
      </Carousel>

      
    );
  }

  export default CarouselItemMechanic;