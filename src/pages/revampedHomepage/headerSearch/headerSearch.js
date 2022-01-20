import React, { useEffect, useContext } from "react";
import { Grid, makeStyles, TextField, Container } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

// context
import { LatLongContext } from "../../../context/latLongContext";

// styles
import "../header/header.scss";

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

const HeaderSearch = ({ device }) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);

  const classes = useStyles();

  // set latitude longitude and default location from context
  const { lat, long, setLat, setLong, servicesNearme, setServicesNearMe } =
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

  // reversing the lat long values according to service future we have to change in service
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.longitude);
      setLong(position.coords.latitude);
    });
  };

  return (
    <Container>
      <Grid item className="header-container" xs={12}>
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
              renderOption={(option) => (
                <React.Fragment>{option}</React.Fragment>
              )}
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
    </Container>
  );
};

export default HeaderSearch;
