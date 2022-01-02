import React, { useEffect, useContext } from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import LinkWithIcon from "../linkwithicon/linkwithicon";
import Logo from "../../../images/logo.png";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import SearchIcon from "../../../images/assets/img/icons/global/search.svg";
import HelpIcon from "../../../images/assets/img/icons/global/help.svg";
// import LoginIcon from "../../../images/assets/img/icons/global/login.svg";
// import CartIcon from "../../../images/assets/img/icons/global/cart.svg";

import cx from "classnames";
import PersistentDrawerRight from "../../../components/fancyheader/drawer.component";

// context
import { LatLongContext } from "../../../context/latLongContext";

// styles
import "./header.scss";

// image
import location from "../../../images/assets/img/header/location.png";
import locationTracker from "../../../images/assets/img/header/pointer-location.png";
import { getAllUniqueGarages } from "../../../services/services";

const useStyles = makeStyles(() => ({
  autoCompleteTextFields: {
    "& input::placeholder": {
      color: "white",
    },
  },
}));

const Header = ({ device }) => {
  const { breakpoint } = device;
  const classForContainer = cx("nav-container", {
    "fancy-header-desktop": breakpoint === "desktop",
    "fancy-header-mobile display-none":
      breakpoint === "phone" || breakpoint === "miniphone",
  });

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  const classes = useStyles();

  // set latitude longitude and default location from context
  const { setLat, setLong, servicesNearme, setServicesNearMe } =
    useContext(LatLongContext);

  useEffect(() => {
    (async () => {
      await getAllUniqueGarages()
        .then((response) => setOptions(response.data))
        .catch((error) => error.message);
    })();
  }, [open, servicesNearme]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const selectChange = (event, val) => {
    setServicesNearMe(val);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    }
  };

  return (
    <AppBar position="static" className="header-container">
      <Toolbar>
        <Grid container className="header">
          <PersistentDrawerRight device={breakpoint} />
          <Grid item xs={3} className="logo">
            <img src={Logo} alt="logo" />
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
                  href="https://www.servicegeni.in/doorstep-services"
                >
                  Doorstep services
                </a>
              </li>
              <li>
                <a
                  className="header-content-left-menu-item__link"
                  href="https://www.servicegeni.in/ecu"
                >
                  ECU Coding
                </a>
              </li>
            </ul> */}
          </Grid>
          <Grid item xs={12} md={5} className={classForContainer}>
            <div className="link-icon-container">
              {/* commented for future use*/}
              {/* <LinkWithIcon icon={SearchIcon} text="Search" link="#" alt="search" /> */}
              <LinkWithIcon icon={HelpIcon} text="Help" link="#" alt="help" />
              {/* <LinkWithIcon icon={LoginIcon} text="Help" link="#" alt="Help" />
          <LinkWithIcon icon={CartIcon} text="Cart" link="#" alt="cart" /> */}
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
