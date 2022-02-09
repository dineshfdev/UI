import React from "react";
import Logo from "../../images/logo.png";
import "./fancyheader.styles.scss";
import cx from "classnames";
import PersistentDrawerRight from "./drawer.component";

export default function FancyHeaderComponent({ device }) {
  const { breakpoint } = device;
  const classForContainer = cx("nav-container", {
    "fancy-header-desktop": breakpoint === "desktop",
    "fancy-header-mobile": breakpoint === "phone" || breakpoint === "miniphone",
  });

  return (
    <header className="box-effect">
      <div className="logo-container">
        <a href="https://www.service-geni.in/">
          <img src={Logo} alt="service genie" className="logo" />
        </a>
      </div>
      <PersistentDrawerRight device={breakpoint} />

      <div className={classForContainer}>
        <nav className="nav-list">
          <ul className="list">
            <li>
              <a href="https://www.service-geni.in/">HOME</a>
            </li>
            <li>
              <a href="https://www.service-geni.in/doorstep-services">
                DOORSTEP SERVICES
              </a>
            </li>
            <li>
              <a href="https://www.service-geni.in/ecu">ECU CODING</a>
            </li>
            <li>
              <a href="https://www.service-geni.in/gallery">GALLERY</a>
            </li>
            <li>
              <a href="https://www.service-geni.in/blogs">BLOGS</a>
            </li>
            <li>
              <a href="https://www.service-geni.in/contact-us">CONTACT</a>
            </li>
            <li>
              <a href="https://www.service-geni.in/viral-kindness">
                VIRAL KINDNESS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
