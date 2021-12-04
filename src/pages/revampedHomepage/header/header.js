import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import LinkWithIcon from "../linkwithicon/linkwithicon";
import Logo from "../../../images/logo.png";
import SearchIcon from "../../../images/assets/img/icons/global/search.svg";
import HelpIcon from "../../../images/assets/img/icons/global/help.svg";
import LoginIcon from "../../../images/assets/img/icons/global/login.svg";
import CartIcon from "../../../images/assets/img/icons/global/cart.svg";

import Button from "../button/button";
import AutoComplete from "../autocomplete/autocomplete";

// styles
import "./header.scss";
import CustomizedSelect from "../select/select";

// image
import location from "../../../images/assets/img/header/location.png";
import locationTracker from "../../../images/assets/img/header/pointer-location.png";

function Header() {
  return (
    <Grid container className="header">
      <Grid item xs={3} className="logo">
        <img src={Logo} alt="logo" />
      </Grid>
      <Grid item xs={4}>
        <ul className="header-list">
          <li>
            <a className="header-content-left-menu-item__link" href="#">
              Find a Mechanic
            </a>
          </li>
          <li>
            <a className="header-content-left-menu-item__link" href="#">
              Door step services
            </a>
          </li>
          <li>
            <a className="header-content-left-menu-item__link" href="#">
              ECU Coding
            </a>
          </li>
        </ul>
      </Grid>
      <Grid item xs={5}>
        <div className="link-icon-container">
          <LinkWithIcon icon={SearchIcon} text="Search" link="#" alt="search" />
          <LinkWithIcon icon={HelpIcon} text="Help" link="#" alt="help" />
          <LinkWithIcon icon={LoginIcon} text="Help" link="#" alt="Help" />
          <LinkWithIcon icon={CartIcon} text="Cart" link="#" alt="cart" />
        </div>
      </Grid>
      <Grid container item xs={12} className="header-location-container">
        <div>
          <img src={location} alt="location" />
          We serve chennai alone
        </div>
        <div>
          <FormControl variant="outlined" style={{ width: 210 }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Select Are or Pincode
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <img src={locationTracker} alt="current location" />
        <div className="header-current-location">Use My Current Location</div>
      </Grid>
    </Grid>
    // <div className="header-container">
    //   <div className="header-content">
    //     <div className="header-content-left">
    //       <div className="header-content-left-logo">
    //         <img src={Logo} alt="logo" />
    //       </div>
    //       <div className="header-content-left-menu">
    //         <div className="header-content-left-menu-item">
    //           <a className="header-content-left-menu-item__link" href="#">
    //             Find a Mechanic
    //           </a>
    //           <a className="header-content-left-menu-item__link" href="#">
    //             Door step services
    //           </a>
    //           <a className="header-content-left-menu-item__link" href="#">
    //             ECU Coding
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="header-content-right">
    //       <div className="header-content-right-menu">
    //         <div className="header-content-right-menu-item">
    //           <LinkWithIcon
    //             icon={SearchIcon}
    //             text="Search"
    //             link="#"
    //             alt="search"
    //           />
    //           <LinkWithIcon icon={HelpIcon} text="Help" link="#" alt="help" />
    //           <LinkWithIcon icon={LoginIcon} text="Help" link="#" alt="Help" />
    //           <LinkWithIcon icon={CartIcon} text="Cart" link="#" alt="cart" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <Button text="Find now" />
    //     <CustomizedSelect
    //       options={[
    //         {
    //           menu: 'General',
    //           value: 'General',
    //         },
    //         {
    //           menu: 'Motor',
    //           value: 'Motor',
    //         },
    //         {
    //           menu: 'Sever',
    //           value: 'Sever',
    //         },
    //       ]}
    //       defaultValue="General"
    //       handleChange={(e) => console.log(e)}
    //     />
    //   </div>
    //   <AutoComplete /> */}
    // </div>
  );
}

export default Header;
