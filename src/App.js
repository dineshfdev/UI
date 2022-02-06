import React, { useState, useEffect } from "react";
import { Route, withRouter, useLocation } from "react-router-dom";
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

  const location = useLocation();

  if (device.os.includes("Mac OS") || device.browser.includes("Safari")) {
    import("./reset.scss");
  }

  // added to check url correctly
  useEffect(() => {
    let firedAlready = false;
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition, throwError);
      function showPosition(position) {
        if (!firedAlready) {
          setLat(position.coords.longitude);
          setLong(position.coords.latitude);
          firedAlready = true;
        }
      }
      function throwError(err) {
        setLat("80.270718");
        setLong("13.082680");
      }
    }
  }, []);

  return (
    <>
      <div
        className={`${
          location.pathname === "/search" ||
          location.pathname === "/location-list" ||
          location.pathname === "/details"
            ? "grid-container override-grid-container"
            : "grid-container"
        }`}
      >
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
          <Header device={device} />
          <main>
            <Route
              exact
              path="/"
              render={(props) => <RevampHomePage {...props} device={device} />}
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
          <PageFooter device={device} />
        </LatLongContext.Provider>
      </div>
    </>
  );
};

export default withRouter(App);
