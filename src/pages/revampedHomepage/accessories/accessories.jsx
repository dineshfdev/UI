import React,{useState} from 'react';
import {Grid,Container} from '@material-ui/core';

import StarRatings from "react-star-ratings";
import Carousel from 'react-elastic-carousel';

// images
import Accesories from "../../../images/assets/img/accessories/accessory.png";
// styles
import "../carousel/carousel.styles.scss";
import "./accessories.styles.scss";

const Accessories = () =>{
  const [breakPoints] = useState([
    { width: 1, itemsToShow: 1.5,showArrows: false,enableSwipe: true  },
    { width: 550, itemsToShow: 2.5, itemsToScroll: 1, pagination: false,showArrows: false ,enableSwipe: true},
    { width: 850, itemsToShow: 3.5,showArrows: true , itemsToScroll: 1,enableSwipe: true},
    { width: 1150, itemsToShow: 3.5, itemsToScroll: 2 ,enableSwipe: true},
    { width: 1450, itemsToShow: 4.5 },
    { width: 1750, itemsToShow: 4.5 },
  ]);
    return(
    <Container>
        <Grid item xs={12} className="items-accessories-container">
            <h3 className="title">Buy Car Accessories</h3>
            <Grid container className="margin-bottom-20">
                        <Grid container item xs={12}>
                            <div className="accessories-text-container">
                                <div>Accessorise your favourite car from India's favourite E-commerce brand</div>
                                <a className="services-link" href="https://www.service-geni.in/doorstep-services">View all Accessories </a>
                            </div>
                        </Grid>
                        {/* <Grid container item xs={12} md={4} justify="flex-end">
                            
                        </Grid> */}
                </Grid>
            <Carousel breakPoints={breakPoints} 
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
    </Container>
  );
}

export default Accessories;