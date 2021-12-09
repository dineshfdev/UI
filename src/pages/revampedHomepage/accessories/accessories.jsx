import React,{useState} from 'react';
import {Grid} from '@material-ui/core';

import StarRatings from "react-star-ratings";
import Carousel from 'react-elastic-carousel';

// images
import Accesories from "../../../images/assets/img/accessories/accessory.png";
// styles
import "../carousel/carousel.styles.scss";
import "./accessories.styles.scss";

const Accessories = () =>{
    const [breakPoints] = useState([
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]);
    return(
    <Grid item xs={12} className="items-accessories-container">
        <h3 className="title">Buy Car Accessories</h3>
        <Grid container className="margin-bottom-20">
                    <Grid container item xs={8}>
                        <div>Accessorise your favourite car from India's favourite E-commerce brand</div>
                    </Grid>
                    <Grid container item xs={4} justify="flex-end">
                        <a className="services-link" href="https://www.servicegeni.in/doorstep-services">View All Accessories </a>
                    </Grid>
            </Grid>
        <Carousel breakPoints={breakPoints}  easing="cubic-bezier(1,.15,.55,1.54)"
  tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
  transitionMs={700}
  pagination={false}
  >
             {/* Accesories 1  */}
             <div className="accessories-carousel__item">
    <img
      src={Accesories}
      alt="Accesories"
      className="accessories-carousel__item-image"
    />
    <div className="accessories-carousel__item-content">
      <p className="accessories-carousel__item-heading">TANTRA Clipper Car Sunglasses Holder use for Sun Visor and Air Vent (Black)</p>
      <div className="accessories-carousel__item-reviews accessories-carousel__item--semibold">
          <>
            <StarRatings
              rating={4}
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
             
            </p>
          </>
      </div>
      <div className="accessories-carousel__item-last-child">
        <div className="accessories-carousel__item-starts-from">
          <p className="accessories-carousel__item--bold accessories-carousel__item--brand-primary-dark block-clear">
          &#x20b9; 599
          </p>
        </div>
        <button
          className="accessories-carousel__item-button"
        >
          Book now
        </button>
      </div>
    </div>
  </div>

  {/* Accessories 2 */}
  <div className="accessories-carousel__item">
    <img
      src={Accesories}
      alt="Accesories"
      className="accessories-carousel__item-image"
    />
    <div className="accessories-carousel__item-content">
      <p className="accessories-carousel__item-heading">TANTRA Clipper Car Sunglasses Holder use for Sun Visor and Air Vent (Black)</p>
      <div className="accessories-carousel__item-reviews accessories-carousel__item--semibold">
          <>
            <StarRatings
              rating={4}
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
             
            </p>
          </>
      </div>
      <div className="accessories-carousel__item-last-child">
        <div className="accessories-carousel__item-starts-from">
          <p className="accessories-carousel__item--bold accessories-carousel__item--brand-primary-dark block-clear">
          &#x20b9; 599
          </p>
        </div>
        <button
          className="accessories-carousel__item-button"
        >
          Book now
        </button>
      </div>
    </div>
  </div>

  {/* Accesories 3 */}
  <div className="accessories-carousel__item">
    <img
      src={Accesories}
      alt="Accesories"
      className="accessories-carousel__item-image"
    />
    <div className="accessories-carousel__item-content">
      <p className="accessories-carousel__item-heading">TANTRA Clipper Car Sunglasses Holder use for Sun Visor and Air Vent (Black)</p>
      <div className="accessories-carousel__item-reviews accessories-carousel__item--semibold">
          <>
            <StarRatings
              rating={4}
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
             
            </p>
          </>
      </div>
      <div className="accessories-carousel__item-last-child">
        <div className="accessories-carousel__item-starts-from">
          <p className="accessories-carousel__item--bold accessories-carousel__item--brand-primary-dark block-clear">
          &#x20b9; 599
          </p>
        </div>
        <button
          className="accessories-carousel__item-button"
        >
          Book now
        </button>
      </div>
    </div>
  </div>

  {/* Accesories 4 */}
  <div className="accessories-carousel__item">
    <img
      src={Accesories}
      alt="Accesories"
      className="accessories-carousel__item-image"
    />
    <div className="accessories-carousel__item-content">
      <p className="accessories-carousel__item-heading">TANTRA Clipper Car Sunglasses Holder use for Sun Visor and Air Vent (Black)</p>
      <div className="accessories-carousel__item-reviews accessories-carousel__item--semibold">
          <>
            <StarRatings
              rating={4}
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
             
            </p>
          </>
      </div>
      <div className="accessories-carousel__item-last-child">
        <div className="accessories-carousel__item-starts-from">
          <p className="accessories-carousel__item--bold accessories-carousel__item--brand-primary-dark block-clear">
          &#x20b9; 599
          </p>
        </div>
        <button
          className="accessories-carousel__item-button"
        >
          Book now
        </button>
      </div>
    </div>
  </div>
  {/* Accesories 5 */}
  <div className="accessories-carousel__item">
    <img
      src={Accesories}
      alt="Accesories"
      className="accessories-carousel__item-image"
    />
    <div className="accessories-carousel__item-content">
      <p className="accessories-carousel__item-heading">TANTRA Clipper Car Sunglasses Holder use for Sun Visor and Air Vent (Black)</p>
      <div className="accessories-carousel__item-reviews accessories-carousel__item--semibold">
          <>
            <StarRatings
              rating={4}
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
             
            </p>
          </>
      </div>
      <div className="accessories-carousel__item-last-child">
        <div className="accessories-carousel__item-starts-from">
          <p className="accessories-carousel__item--bold accessories-carousel__item--brand-primary-dark block-clear">
          &#x20b9; 599
          </p>
        </div>
        <button
          className="accessories-carousel__item-button"
        >
          Book now
        </button>
      </div>
    </div>
  </div>
        </Carousel>  
    </Grid>
  );
}

export default Accessories;