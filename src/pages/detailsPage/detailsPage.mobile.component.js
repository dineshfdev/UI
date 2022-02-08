import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import StarRatings from "react-star-ratings";
import Button from "@material-ui/core/Button";
// import OrangeIcon from '../../images/orange icon.png';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Popover,
} from "@material-ui/core";
//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";

// image
import tyre from "../../images/tyre.png";
import oil from "../../images/oil-bottle.png";
import spray from "../../images/spray-can.png";
import carWash from "../../images/car-wash.png";
import ac from "../../images/ac.png";
import accessories from "../../images/hubcap.png";
import ecu from "../../images/ecu.png";
import compass from "../../images/compass-svgrepo-com.svg";

// service
import {
  getReviewRating,
  getOverallReviewRating,
  getGaragesByNameandLocation,
} from "../../services/services";

// style
import "./detailsPage.styles.scss";
import VerifiedTile from "../../components/common/verified.title";
import BackToSearchButton from "../../components/backtosearch/backtosearch";
// import Close from '@material-ui/icons/Close';
import Loader from "../../components/loader/loader";
import CustomCarousel from "../../components/carousel/carousel";

const MobileDetailsPage = (props) => {
  const [name, setGarageName] = useState({});
  const [centerDetails, setCenterDetails] = useState();
  const [review, setReview] = useState({});
  const [overAllRating, SetOverAllrating] = useState();
  const [open, setOpen] = React.useState(false);

  //  Added for sharing link for social media
  const getGarageName = props.location.search.split("?")[1];
  const getGarageLocation = props.location.search.split("?")[2];

  const sericeCentrename = getGarageName
    .replace("garageName=", "")
    .replaceAll("%20", " ");
  const serviceLocation = getGarageLocation
    .replace("location=", "")
    .replaceAll("%20", " ");
  const updatedName =
    props.location.state !== undefined
      ? props.location.state.val
      : sericeCentrename;
  const updatedLocation =
    props.location.state !== undefined
      ? props.location.state.location
      : serviceLocation;

  useEffect(() => {
    getGaragesByNameandLocation(updatedName, updatedLocation)
      .then((res) => setGarageName(res.data[0]))
      .catch((error) => error.message);
  }, [updatedName, updatedLocation]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCenterDetails(window.location.href);
    getReviewRating(updatedName, updatedLocation)
      .then((res) => setReview(res.data))
      .catch((error) => error.message);
    getOverallReviewRating(updatedName, updatedLocation)
      .then((res) => SetOverAllrating(res.data))
      .catch((error) => error.message);
  }, [updatedName, updatedLocation]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseShare = () => {
    setAnchorEl(null);
  };

  const openShare = Boolean(anchorEl);
  const shareId = open ? "simple-popover" : undefined;

  // Commented based on suggestions from @praveen
  // const [showRedirect, setShowRedirect] = useState(true);

  if (name && Object.keys(name).length === 0) {
    return <Loader />;
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      xs={10}
      className="center-div details-container"
    >
      <BackToSearchButton />
      <CustomCarousel device={props.device} />
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          lg={6}
          container
          className="details-container__grid"
        >
          <Grid item xs container direction="column">
            <Grid item xs className="description-panel">
              <VerifiedTile
                garageTitle={name.garageTitle}
                verified={name.verified}
                renderedIn="details-page"
              />
              <div className="details-container__far-reaching">
                <div className="details-container__ratings">
                  {(overAllRating &&
                    overAllRating?.averageGarageRatings === "NaN") ||
                  overAllRating?.averageGarageRatings === "N/A" ? (
                    "No Reviews"
                  ) : (
                    <>
                      <StarRatings
                        rating={
                          overAllRating && overAllRating?.averageGarageRatings
                            ? parseInt(overAllRating?.averageGarageRatings)
                            : 0
                        }
                        starRatedColor="#eea44d"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="3px"
                      />
                      {review.length ? (
                        <button
                          variant="contained"
                          color="primary"
                          onClick={handleClickOpen}
                          style={{ marginLeft: "10px" }}
                          className="review__button review__button--color-change"
                        >
                          {review.length && review.length === 1
                            ? `${review.length} Review`
                            : `${review.length} Reviews`}
                        </button>
                      ) : null}
                    </>
                  )}
                </div>
                <p>Since {name.dateOfEst}</p>
                <button className="details-container__weekoff-button details-container__weekoff-button--badge">
                  {name.weekOff}
                </button>
              </div>
              <div className="image-container">
                {name.garageImage === "" ? (
                  <img src="http://via.placeholder.com/400x200" alt="garage" />
                ) : (
                  <img
                    src={`data:image/jpeg;base64,${name.garageImage}`}
                    alt="garage"
                  />
                )}
              </div>
              <p>
                <div className="address-text-image">
                  <FontAwesomeIcon
                    icon={faMapMarkedAlt}
                    className="offest-margin-right-10"
                  />
                  {name.address}
                </div>
              </p>

              <p>
                <span>Operating Hours:</span> {name.operatingHours}
              </p>
              <p>
                <span>Payment Mode:</span> {name.paymentMode}
              </p>

              <p>
                <span className="services__title services__title--font-size-change">
                  Services offered:
                </span>
                <div className="services-wrapper">
                  <ul className="services-list">
                    {name.garageServices && name.garageServices.gsAndOil ? (
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `https://wa.me/919361040506?text=I%20need%20General%20Service%20Oil%20Change%20@%20${name.garageTitle},%20${name.location}`;
                        }}
                      >
                        <img src={oil} alt="Tyre" className="cursor-pointer" />
                        <div className="image-caption">
                          General Service & Oil Change
                        </div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.pbAndT ? (
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `https://wa.me/919361040506?text=I%20need%20Painting%20Tinkering%20@%20${name.garageTitle},%20${name.location}`;
                        }}
                      >
                        <img
                          src={spray}
                          alt="Painting & Tinkering"
                          className="cursor-pointer"
                        />
                        <div className="image-caption">
                          Painting & Tinkering
                        </div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.carWash ? (
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `https://wa.me/919361040506?text=I%20need%20Car%20Wash%20@%20${name.garageTitle},%20${name.location}`;
                        }}
                      >
                        <img
                          src={carWash}
                          alt="CarWash"
                          className="cursor-pointer"
                        />
                        <div className="image-caption">Car Wash</div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.acAndCL ? (
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `https://wa.me/919361040506?text=I%20need%20AC%20Repair%20Cleaning%20@%20${name.garageTitle},%20${name.location}`;
                        }}
                      >
                        <img
                          src={ac}
                          alt="AC Repair & Cleaning"
                          className="cursor-pointer"
                        />
                        <div className="image-caption">
                          AC Repair & Cleaning
                        </div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.wAndS ? (
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `https://wa.me/919361040506?text=I%20need%20Wheels%20Spares%20@%20${name.garageTitle},%20${name.location}`;
                        }}
                      >
                        <img
                          src={tyre}
                          alt="Wheels & Spares"
                          className="cursor-pointer"
                        />
                        <div className="image-caption">Wheels & Spares</div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.engAndEcu ? (
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `https://wa.me/919361040506?text=I%20need%20ECU%20Coding%20@%20${name.garageTitle},%20${name.location}`;
                        }}
                      >
                        <img
                          src={ecu}
                          alt="ECU Coding"
                          className="cursor-pointer"
                        />
                        <div className="image-caption">ECU Coding</div>
                      </li>
                    ) : null}
                    {name.garageServices && name.garageServices.acc ? (
                      <li
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = `https://wa.me/919361040506?text=I%20need%20Accessories%20@%20${name.garageTitle},%20${name.location}`;
                        }}
                      >
                        <img
                          src={accessories}
                          alt="Accessories"
                          className="cursor-pointer"
                        />
                        <div className="image-caption">Accessories</div>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </p>

              <div>
                <>
                  {review.length ? (
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="max-width-dialog-title"
                      className="custom-dialog"
                    >
                      <DialogTitle id="max-width-dialog-title">
                        <b>Reviews</b>
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          {review &&
                            review.map((x, i) => (
                              <div key={x}>
                                <h4>{x.reviewerName}:</h4>
                                <p>{x.review}</p>
                              </div>
                            ))}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                  ) : null}
                </>
              </div>
              <p style={{ marginBottom: "100px" }}>
                <span>About Workshop:</span> {name.garageDescription}
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*
      // Commented based on suggestions from @praveen
      {showRedirect ? (
        <div className="redirect__container">
          <div
            className="redirect__close-icon-container"
            onClick={() => setShowRedirect(false)}
          >
            <Close className="redirect__close-icon" />
          </div>
          <div className="redirect__content">
            <img className="redirect__logo" src={OrangeIcon} alt="logo"></img>
            <div className="redirect__text-container">
              <p className="redirect__text">
                Why take the hassle of driving down, check out our hand-picked
                Doorstep Packages.
              </p>
              <button
                className="common-button redirect__button"
                onClick={() => {
                  window.location.href = 'https://www.servicegeni.in/doorstep';
                }}
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      ) : null} */}
      {props.device.breakpoint === "phone" ? (
        <div>
          <p className="action-container text-center">
            <button
              className="common-button book-now-btn cursor-pointer action__share action__share--button"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `https://wa.me/919361040506?text=I%20need%20my%20car%20to%20be%20serviced%20@%20${name.garageTitle},%20${name.location}`;
              }}
            >
              Schedule Now
            </button>
            <button
              className="common-button book-now-btn cursor-pointer action__directions action__direction--button"
              onClick={() =>
                (window.location.href = `http://maps.google.com?q=${name.latitude},${name.longitude}`)
              }
            >
              <img src={compass} alt="Navigate" />
            </button>
          </p>
        </div>
      ) : null}
      <button
        className="share__button share__button--transform common-button"
        aria-describedby={shareId}
        onClick={handleClick}
      >
        LIKE TO SHARE
      </button>
      <Popover
        id={shareId}
        open={openShare}
        anchorEl={anchorEl}
        onClose={handleCloseShare}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className="share__popper"
        disableScrollLock
      >
        <div>
          <div className="share-icons">
            <FacebookShareButton
              url={centerDetails}
              quote="Service geni shared a service center"
            >
              <FacebookIcon size={32} />
            </FacebookShareButton>
            <TwitterShareButton
              quote="Service geni shared a service center"
              url={centerDetails}
            >
              <TwitterIcon size={32} />
            </TwitterShareButton>
            <WhatsappShareButton
              url={centerDetails}
              title="Service geni shared a service center"
            >
              <WhatsappIcon size={32} />
            </WhatsappShareButton>
          </div>
        </div>
      </Popover>
    </Grid>
  );
};

export default MobileDetailsPage;
