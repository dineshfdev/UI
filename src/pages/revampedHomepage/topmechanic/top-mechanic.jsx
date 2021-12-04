import React from 'react';
import StarRatings from "react-star-ratings";
import Marker from "../../../images/assets/img/icons/global/marker.svg";
import "../carousel/carousel.styles.scss";

import Carousel from 'react-grid-carousel'

const CarouselItemMechanic = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
<Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
    //   <div className="mechanic-carousel__item">
    //     <img
    //       src={image}
    //       alt="carousel"
    //       className="mechanic-carousel__item-image"
    //     ></img>
    //     <div className="mechanic-carousel__item-content">
    //       <p className="mechanic-carousel__item-heading">{text.heading}</p>
    //       <div className="mechanic-carousel__item-address mechanic-carousel__item--semibold">
    //         <p className="mechanic-carousel__item-address-marker">
    //           <img
    //             src={Marker}
    //             alt="marker"
    //             className="mechanic-carousel__item-address-marker-image"
    //           ></img>
    //         </p>
    //         <p className="mechanic-carousel__item--light-grey-2">
    //           {text.address}
    //         </p>
    //       </div>
    //       <div className="mechanic-carousel__item-reviews mechanic-carousel__item--semibold">
    //         {garageOverallRating.averageGarageRatings === "NaN" ? (
    //           "No Reviews"
    //         ) : (
    //           <>
    //             <StarRatings
    //               rating={parseInt(garageOverallRating.averageGarageRatings)}
    //               starRatedColor="#eea44d"
    //               numberOfStars={5}
    //               name="rating"
    //               starDimension="20px"
    //               starSpacing="3px"
    //             />
    //             <p
    //               style={{ margin: "0" }}
    //               className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1"
    //             >
    //               {garageOverallRating.totalGarageReviews > 1
    //                 ? `(${garageOverallRating.totalGarageReviews} reviews)`
    //                 : `(${garageOverallRating.totalGarageReviews} review)`}
    //             </p>
    //           </>
    //         )}
    //       </div>
    //       <div className="mechanic-carousel__item-last-child">
    //         <div className="mechanic-carousel__item-starts-from">
    //           <p className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1 block-clear">
    //             Starts from
    //           </p>
    //           <p className="mechanic-carousel__item--bold mechanic-carousel__item--brand-primary-dark block-clear">
    //             {text.pricing}
    //           </p>
    //         </div>
    //         <div className="mechanic-carousel__item-distance">
    //           <p className="mechanic-carousel__item--semibold mechanic-carousel__item--light-grey-1 block-clear">
    //             Distance
    //           </p>
    //           <p className="mechanic-carousel__item--bold mechanic-carousel__item--light-grey-2 block-clear">
    //             {distance}
    //           </p>
    //         </div>
    //         <button className="mechanic-carousel__item-button" onClick={onClick}>
    //           Book now
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    );
  }

  export default CarouselItemMechanic;