import React from 'react';
import StarRatings from 'react-star-ratings';
import Marker from '../../../images/assets/img/icons/global/marker.svg';
import './carousel.styles.scss';

// Create a carousel item component with image and text

function CarouselItemServices({ image, text, onClick }) {
  return (
    <div className="service-carousel__item">
      <img
        src={image}
        alt="carousel"
        className="service-carousel__item-image"
      ></img>
      <p className="service-carousel__item-heading"> {text.heading}</p>
      <p className="service-carousel__item-pricing">{text.pricing}</p>
      <button className="service-carousel__item-button" onClick={onClick}>
        Book now
      </button>
    </div>
  );
}

function CarouselItemMechanic({
  image,
  text,
  onClick,
  garageOverallRating,
  pricing,
  distance,
}) {
  return (
    <div className="mechanic-carousel__item">
      <img
        src={image}
        alt="carousel"
        className="mechanic-carousel__item-image"
      ></img>
      <div className="mechanic-carousel__item-content">
        <p className="mechanic-carousel__item-heading">{text.heading}</p>
        <div className="mechanic-carousel__item-address mechanic-carousel__item--semibold">
          <p className="mechanic-carousel__item-address-marker">
            <img
              src={Marker}
              alt="marker"
              className="mechanic-carousel__item-address-marker-image"
            ></img>
          </p>
          <p>{text.address}</p>
        </div>
        <div className="mechanic-carousel__item-reviews mechanic-carousel__item--semibold">
          {garageOverallRating.averageGarageRatings === 'NaN' ? (
            'No Reviews'
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
                style={{ margin: '0' }}
                className="mechanic-carousel__item--semibold"
              >
                {garageOverallRating.totalGarageReviews > 1
                  ? `(${garageOverallRating.totalGarageReviews} reviews)`
                  : `(${garageOverallRating.totalGarageReviews} review)`}
              </p>
            </>
          )}
        </div>
        <div className="mechanic-carousel__item-last-child">
          <div className="mechanic-carousel__item-starts-from">
            <p className="mechanic-carousel__item--semibold">Starts from</p>
            <p className="mechanic-carousel__item--bold">{text.pricing}</p>
          </div>
          <div className="mechanic-carousel__item-starts-distance">
            <p className="mechanic-carousel__item--semibold">Distance</p>
            <p className="mechanic-carousel__item--bold">{distance}</p>
          </div>
          <button className="mechanic-carousel__item-button" onClick={onClick}>
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export { CarouselItemServices, CarouselItemMechanic };
