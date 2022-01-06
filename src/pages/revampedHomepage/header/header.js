import React, { useEffect, useContext } from "react";
import { AppBar, Grid, makeStyles, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import LinkWithIcon from "../linkwithicon/linkwithicon";
import Logo from "../../../images/logo.png";
// import SearchIcon from "../../../images/assets/img/icons/global/search.svg";
import HelpIcon from "../../../images/assets/img/icons/global/help.svg";
// import LoginIcon from "../../../images/assets/img/icons/global/login.svg";
// import CartIcon from "../../../images/assets/img/icons/global/cart.svg";

import cx from "classnames";
import PersistentDrawerRight from "../../../components/fancyheader/drawer.component";

// styles
import "./header.scss";

// image
import location from "../../../images/assets/img/header/location.png";
import locationTracker from "../../../images/assets/img/header/pointer-location.png";

const Header = ({ device }) => {
  const { breakpoint } = device;
  const classForContainer = cx("nav-container", {
    "fancy-header-desktop": breakpoint === "desktop",
    "fancy-header-mobile display-none":
      breakpoint === "phone" || breakpoint === "miniphone",
  });

  return (
    <AppBar position="static" className="header-container">
      <Toolbar>
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
