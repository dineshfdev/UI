import React from "react";
import StarRatings from "react-star-ratings";
import Marker from "../../../images/assets/img/icons/global/marker.svg";
import "./carousel.styles.scss";

// Create a carousel item component with image and text

function CarouselItemServices({ image, text, onClick }) {
  return (
    <div className="service-carousel__item">
      <img
        src={image}
        alt="carousel"
        className="service-carousel__item-image"
      ></img>
      <div className="service-carousel__item-content">
        <p className="service-carousel__item-heading"> test</p>
        <p className="service-carousel__item-pricing">Starts price</p>
        <button className="service-carousel__item-button">Book now</button>
      </div>
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
  carouselName = "mechanic",
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
          <p className="mechanic-carousel__item--light-grey-2">
            {text.address}
          </p>
        </div>
        <div className="mechanic-carousel__item-reviews mechanic-carousel__item--semibold">
          {garageOverallRating.averageGarageRatings === "NaN" ? (
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
          )}
        </div>
        <div className="mechanic-carousel__item-last-child">
          <div className="mechanic-carousel__item-starts-from">
            <p className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1 block-clear">
              Starts from
            </p>
            <p className="mechanic-carousel__item--bold mechanic-carousel__item--brand-primary-dark block-clear">
              {text.pricing}
            </p>
          </div>
          <div className="mechanic-carousel__item-distance">
            <p className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1 block-clear">
              Distance
            </p>
            <p className="mechanic-carousel__item--bold mechanic-carousel__item--light-grey-2 block-clear">
              {distance}
            </p>
          </div>
          <button className="mechanic-carousel__item-button" onClick={onClick}>
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

function CarouselItemAccessories({
  image,
  text,
  onClick,
  garageOverallRating,
}) {
  return (
    <div className="accessories-carousel__item">
      <img
        src={image}
        alt="carousel"
        className="accessories-carousel__item-image"
      ></img>
      <div className="accessories-carousel__item-content">
        <p className="accessories-carousel__item-heading">{text.heading}</p>
        <div className="accessories-carousel__item-reviews accessories-carousel__item--semibold">
          {garageOverallRating.averageGarageRatings === "NaN" ? (
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
                className="accessories-carousel__item--semibold accessories-carousel__item--light-grey-1"
              >
                {garageOverallRating.totalGarageReviews > 1
                  ? `(${garageOverallRating.totalGarageReviews} reviews)`
                  : `(${garageOverallRating.totalGarageReviews} review)`}
              </p>
            </>
          )}
        </div>
        <div className="accessories-carousel__item-last-child">
          <div className="accessories-carousel__item-starts-from">
            <p className="accessories-carousel__item--bold accessories-carousel__item--brand-primary-dark block-clear">
              {text.pricing}
            </p>
          </div>
          <button
            className="accessories-carousel__item-button"
            onClick={onClick}
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}

export { CarouselItemServices, CarouselItemMechanic, CarouselItemAccessories };
