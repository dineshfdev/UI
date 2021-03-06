import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  Container,
  TextField,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
// import LinkWithIcon from "../linkwithicon/linkwithicon";
import Logo from "../../../images/logo.png";
// import SearchIcon from "../../../images/assets/img/icons/global/search.svg";
// import HelpIcon from "../../../images/assets/img/icons/global/help.svg";
// import LoginIcon from "../../../images/assets/img/icons/global/login.svg";
// import CartIcon from "../../../images/assets/img/icons/global/cart.svg";

import cx from "classnames";
import PersistentDrawerRight from "../../../components/fancyheader/drawer.component";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// services
import { getAllUniqueGarages } from "../../../services/services";

// styles
import "./header.scss";

// image
import locationImage from "../../../images/assets/img/header/location.png";
import locationTracker from "../../../images/assets/img/header/pointer-location.png";

// reducer
import { setLatLong, setServiceName } from "../../../redux/latLong";

const useStyles = makeStyles(() => ({
  autoCompleteTextFields: {
    "& input::placeholder": {
      color: "white",
    },
  },
}));

const Header = ({ device }) => {
  const { breakpoint } = device;
  const dispatch = useDispatch();
  const { serviceName } = useSelector((state) => state.latLong);
  const classForContainer = cx("nav-container", {
    "fancy-header-desktop": breakpoint === "desktop",
    "fancy-header-mobile display-none":
      breakpoint === "phone" || breakpoint === "miniphone",
  });

  // for header seacrh
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      await getAllUniqueGarages()
        .then((response) => setOptions(response.data))
        .catch((error) => error.message);
    })();
  }, [open, serviceName]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const selectChange = (event, val) => {
    dispatch(setServiceName(val));
  };

  // reversing the lat long values according to service future we have to change in service
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(
        setLatLong([position.coords.latitude, position.coords.longitude])
      );
    });
  };

  const location = useLocation();

  return (
    <>
      <AppBar position="static" className="header-container">
        <Toolbar>
          <Container>
            <Grid container className="header">
              <PersistentDrawerRight device={breakpoint} />
              <Grid item xs={3} className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </Grid>
              <Grid item xs={12} md={4} className={classForContainer}>
                {/* <ul className="header-list">
              <li>
                <a
                  className="header-content-left-menu-item__link"
                  href="https://service-geni.in/"
                >
                  Find a Mechanic
                </a>
              </li>
              <li>
                <a
                  className="header-content-left-menu-item__link"
                  href="https://www.service-geni.in/doorstep-services"
                >
                  Doorstep services
                </a>
              </li>
              <li>
                <a
                  className="header-content-left-menu-item__link"
                  href="https://www.service-geni.in/ecu"
                >
                  ECU Coding
                </a>
              </li>
            </ul> */}
              </Grid>
              <Grid item xs={12} md={5} className={classForContainer}>
                <div className="link-icon-container">
                  {/* <LinkWithIcon icon={SearchIcon} text="Search" link="#" alt="search" /> */}
                  {/* <LinkWithIcon
                    icon={HelpIcon}
                    text="Help"
                    link="#"
                    alt="help"
                  /> */}
                  {/* <LinkWithIcon icon={LoginIcon} text="Help" link="#" alt="Help" />
          <LinkWithIcon icon={CartIcon} text="Cart" link="#" alt="cart" /> */}
                </div>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
        <Grid
          container
          xs={12}
          className={`${
            location.pathname === "/search" ||
            location.pathname === "/location-list" ||
            location.pathname === "/details"
              ? "no-border"
              : "header-border"
          }`}
        ></Grid>
        <Container>
          <Grid
            item
            className={`${
              location.pathname === "/search" ||
              location.pathname === "/location-list" ||
              location.pathname === "/details"
                ? "display-none override-grid-container"
                : "header-search-container"
            }`}
            xs={12}
          >
            <Grid container item xs={12} className="header-location-container">
              <Grid item xs={12} md={3}>
                <div className="header-search-items">
                  <img src={locationImage} alt="location" />
                  <span>We serve Chennai alone</span>
                </div>
              </Grid>
              <Grid item xs={10} md={3}>
                <div className="header-search-items">
                  <Autocomplete
                    id="garage-select"
                    style={{ width: 300 }}
                    options={options}
                    autoHighlight
                    popupIcon={<ExpandMoreIcon />}
                    getOptionLabel={(option) => (option ? option : "")}
                    blurOnSelect="touch"
                    onChange={selectChange}
                    onOpen={() => {
                      setOpen(true);
                    }}
                    onClose={() => {
                      setOpen(false);
                    }}
                    renderOption={(option) => (
                      <React.Fragment>{option}</React.Fragment>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Area"
                        variant="outlined"
                        className="input-text-container"
                        inputProps={{
                          ...params.inputProps,
                        }}
                        classes={{ root: classes.autoCompleteTextFields }}
                      />
                    )}
                  />
                </div>
              </Grid>
              <Grid item xs={2} md={3}>
                {breakpoint === "phone" ? (
                  <div
                    onClick={getCurrentLocation}
                    class="location-header-icon"
                  >
                    <img src={locationTracker} alt="current location" />
                  </div>
                ) : (
                  <div className="location-reverse">
                    <img src={locationTracker} alt="current location" />
                    <div
                      className="header-current-location"
                      onClick={getCurrentLocation}
                    >
                      Use my current location
                    </div>
                  </div>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
