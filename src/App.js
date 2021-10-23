import "./App.scss";
import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.scss";
// commenting homepage for temporary purpose
// import Homepage from "./components/homePage/homePage.component";
import SearchPage from "./pages/searchPage/searchPage.component";
import LocationList from "./pages/locationList/locationList.component";

// component
import Footer from "../src/components/footer/footer.component";
import FancyHeaderComponent from "./components/fancyheader/fancyheader.component";
import useDevice from "./customHooks/findDevice/useDevice";
import AddNewGarage from "./pages/AddNewGarage/addnewgarage";
import DetailPageLoadableComponent from "./pages/detailsPage";
// import LandscapeScreen from './components/landscapeScreen/landscapeScreen';
import useGaTracker from "./useGaTracker";

const App = () => {
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
  return (
    <div className="grid-container">
      <FancyHeaderComponent device={device} />
      <main>
        {/* <Route exact path="/" render={(props) => <Homepage {...props} />} /> */}
        <Route exact path="/" render={(props) => <SearchPage {...props} />} />
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
      <Footer path={window.location.pathname} />
    </div>
  );
};

export default withRouter(App);
