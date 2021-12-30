import React, { Component } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { getAllGaragesByLatAndLong } from "../../services/services";
import vector from "../../images/service-geni-marker.png";

const mapStyles = {
  width: "100%",
  height: "83%",
  overflow: "hidden",
};

const { REACT_APP_GOOGLE_MAPS_TOKEN } = process.env;

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
      markerData: [],
      loading: true,
      latitude: 13.0827,
      longitude: 80.2707,
      newLat: null,
      newLng: null,
      open: false,
    };
  }

  getPosition() {
    getAllGaragesByLatAndLong(5, this.state.latitude, this.state.longitude)
      .then((res) => this.setState({ markerData: res.data }))
      .catch((error) => error.message);
  }

  componentDidMount() {
    this.setState({ open: true });
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          loading: false,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
    this.getPosition();
    this.setState({ open: false });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.latitude !== this.state.latitude) {
      this.getPosition();
    }
  }

  onMarkerDragEnd(props, mapProps) {
    this.setState({
      latitude: mapProps.center.lat(),
      longitude: mapProps.center.lng(),
      newLat: mapProps.center.lat(),
      newLng: mapProps.center.lng(),
    });
  }

  onMarkerClick = (props, marker, e) => {
    this.props.history.push({
      pathname: "/details",
      search: `?garageName=${props.name}?location=${props.location}`,
      state: { val: props.name, location: props.location },
    });
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  loadmap() {
    return (
      <>
        {this.state.newLat === null ? (
          <Backdrop
            open={this.state.open}
            style={{ zIndex: 1000, color: "#fff" }}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        ) : null}

        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          // initialCenter={{ lat: this.state.latitude, lng: this.state.longitude }}
          center={
            this.state.newLat === null
              ? {
                  lat: this.state.latitude,
                  lng: this.state.longitude,
                }
              : {
                  lat: this.state.newLat,
                  lng: this.state.newLng,
                }
          }
          className="map-holder"
          onDragend={(props, mapProps) => this.onMarkerDragEnd(props, mapProps)}
          options={{ streetViewControl: false }}
          scrollwheel={true}
        >
          {this.state.markerData &&
            this.state.markerData.map((x) => {
              return (
                <Marker
                  onClick={this.onMarkerClick}
                  title={x.garageTitle}
                  name={x.garageTitle}
                  location={x.location}
                  position={{ lat: x.latitude, lng: x.longitude }}
                  icon={{
                    url: vector,
                  }}
                />
              );
            })}
        </Map>
      </>
    );
  }

  render() {
    return this.state.loading ? this.loadmap() : this.loadmap();
  }
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_MAPS_TOKEN,
})(MapContainer);
