import React from 'react';
import StarRatings from 'react-star-ratings';

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
      <p className="mechanic-carousel__item-heading"> {text.heading}</p>
      <p className="mechanic-carousel__item-heading"> {text.address}</p>
      <div className="mechanic-carousel__item-reviews">
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
            <p style={{ margin: '0' }}>
              {garageOverallRating.totalGarageReviews > 1
                ? `${garageOverallRating.totalGarageReviews} reviews`
                : `${garageOverallRating.totalGarageReviews} review`}
            </p>
          </>
        )}
      </div>
      <div className="mechanic-carousel__item-last-child">
        <div className="mechanic-carousel__item-starts-from">
          <p>Starts from</p>
          <p>{text.pricing}</p>
        </div>
        <div className="mechanic-carousel__item-starts-distance">
          <p>Distance</p>
          <p>{distance}</p>
        </div>
        <button className="mechanic-carousel__item-button" onClick={onClick}>
          Book now
        </button>
      </div>
    </div>
  );
}

export { CarouselItemServices, CarouselItemMechanic };
