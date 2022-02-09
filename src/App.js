import React from "react";
import { Route, withRouter, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import PageFooter from "./pages/revampedHomepage/page-footer/page-footer";

// redux actions
import { setLatLong } from "./redux/latLong";

const App = () => {
  const dispatch = useDispatch();

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

  // for location access
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition, throwError);
    function showPosition(position) {
      dispatch(
        setLatLong([position.coords.latitude, position.coords.longitude])
      );
    }
    function throwError(err) {
      setLatLong(["13.082680", "80.270718"]);
    }
  }

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
        <Header device={device} />
        <main>
          <Route
            exact
            path="/"
            render={(props) => <RevampHomePage {...props} device={device} />}
          />
          <Route path="/search" render={(props) => <SearchPage {...props} />} />
          <Route
            path="/details"
            render={(props) => (
              <DetailPageLoadableComponent {...props} device={device} />
            )}
          />
          <Route
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
      </div>
    </>
  );
};

export default withRouter(App);
