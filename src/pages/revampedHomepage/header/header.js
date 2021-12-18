import React, { useEffect, useContext } from "react";
import { Grid, makeStyles, TextField } from "@material-ui/core";
import LinkWithIcon from "../linkwithicon/linkwithicon";
import Logo from "../../../images/logo.png";
import Autocomplete from "@material-ui/lab/Autocomplete";
// import SearchIcon from "../../../images/assets/img/icons/global/search.svg";
import HelpIcon from "../../../images/assets/img/icons/global/help.svg";
// import LoginIcon from "../../../images/assets/img/icons/global/login.svg";
// import CartIcon from "../../../images/assets/img/icons/global/cart.svg";
import Button from "../button/button";

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
  const { lat, long, setLat, setLong, defaultLocation, setDefaultLocation } =
    useContext(LatLongContext);

  useEffect(() => {
    (async () => {
      await getAllUniqueGarages()
        .then((response) => setOptions(response.data))
        .catch((error) => error.message);
    })();
  }, [open, defaultLocation]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  // get latest geocode along eith latidue and longitude
  useEffect(() => {
    (async () => {
      await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${defaultLocation}.json?access_token=pk.eyJ1Ijoic2VydmljZWdlbmkiLCJhIjoiY2t3cTFqZ3AwMDF2cTJ2bngwMjJybHJpdSJ9.To44yXt9LxoCUi0lk7q77A`
      )
        .then((response) => response.json())
        .then((data) => {
          setLat(data?.features[0]?.center[0]);
          setLong(data?.features[0]?.center[1]);
        });
    })();
  }, [setLat, setLong, defaultLocation]);

  const selectChange = (event, val) => {
    setDefaultLocation(val);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    }
  };

  console.log("defaultLocation", defaultLocation);
  return (
    <Grid item className="header-container" xs={12}>
      <Grid container className="header">
        <Grid item xs={3} className="logo">
          <img src={Logo} alt="logo" />
        </Grid>
        <PersistentDrawerRight device={breakpoint} />
        <Grid item xs={12} md={4} className={classForContainer}>
          <ul className="header-list">
            <li>
              <a className="header-content-left-menu-item__link" href="#">
                Find a Mechanic
              </a>
            </li>
            <li>
              <a className="header-content-left-menu-item__link" href="#">
                Doorstep services
              </a>
            </li>
            <li>
              <a className="header-content-left-menu-item__link" href="#">
                ECU Coding
              </a>
            </li>
          </ul>
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
      <Grid container item xs={12} className="header-location-container">
        <div>
          <img src={location} alt="location" />
          We serve chennai alone
        </div>
        <div>
          <Autocomplete
            id="garage-select"
            style={{ width: 300 }}
            options={options}
            autoHighlight
            getOptionLabel={(option) => (option ? option : "")}
            onChange={selectChange}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            renderOption={(option) => <React.Fragment>{option}</React.Fragment>}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose Location"
                variant="outlined"
                inputProps={{
                  ...params.inputProps,
                }}
                classes={{ root: classes.autoCompleteTextFields }}
              />
            )}
          />
        </div>
        <img src={locationTracker} alt="current location" />
        <div className="header-current-location" onClick={getCurrentLocation}>
          Use My Current Location
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
