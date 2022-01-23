import React, { useState, useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.scss";
// import withClearCache from "./ClearCache";
// commenting homepage for temporary purpose
// import Homepage from "./components/homePage/homePage.component";
import SearchPage from "./pages/searchPage/searchPage.component";
import LocationList from "./pages/locationList/locationList.component";

// component
import useDevice from "./customHooks/findDevice/useDevice";
import AddNewGarage from "./pages/AddNewGarage/addnewgarage";
import DetailPageLoadableComponent from "./pages/detailsPage";
// import LandscapeScreen from './components/landscapeScreen/landscapeScreen';
import useGaTracker from "./useGaTracker";
import RevampHomePage from "./pages/revampedHomepage/revampedHomePage";
import Header from "./pages/revampedHomepage/header/header";

// context
import { LatLongContext } from "./context/latLongContext";
import PageFooter from "./pages/revampedHomepage/page-footer/page-footer";

const App = () => {
  const [isNewHome, setIsNewHome] = useState();

  // lat long from new home page
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [defaultLocation, setDefaultLocation] = useState("");
  const [servicesNearme, setServicesNearMe] = useState("");

  useGaTracker();
  const breakpoints = [
    { name: "phone", min: 0, max: 640 },
    { name: "tablet", min: 640, max: 1080 },
    { name: "desktop", min: 1080, max: Infinity },
  ];
  const device = useDevice({ breakpoints });

  if (device.os.includes("Mac OS") || device.browser.includes("Safari")) {
    import("./reset.scss");
  }

  // added to check url correctly
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          loading: false,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <>
      {!isNewHome && (
        <div className="grid-container">
          <Header device={device} />
          <main>
            <Route
              exact
              path="/"
              render={(props) => (
                <LatLongContext.Provider
                  value={{
                    lat,
                    setLat,
                    long,
                    setLong,
                    defaultLocation,
                    setDefaultLocation,
                    servicesNearme,
                    setServicesNearMe,
                  }}
                >
                  <RevampHomePage {...props} device={device} />
                </LatLongContext.Provider>
              )}
            />
            <Route
              exact
              path="/search"
              render={(props) => <SearchPage {...props} />}
            />
            <Route
              exact
              path="/details"
              render={(props) => (
                <DetailPageLoadableComponent {...props} device={device} />
              )}
            />
            <Route
              exact
              path="/location-list"
              render={(props) => <LocationList {...props} device={device} />}
            />
            <Route
              exact
              path="/add-new-garage"
              render={(props) => <AddNewGarage {...props} device={device} />}
            />
          </main>
          <PageFooter />
        </div>
      )}
    </>
  );
};

export default withRouter(App);
