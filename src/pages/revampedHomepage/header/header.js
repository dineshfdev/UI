import React from 'react';
import LinkWithIcon from '../linkwithicon/linkwithicon';
import Logo from '../../../images/logo.png';
import SearchIcon from '../../../images/assets/img/icons/global/search.svg';
import HelpIcon from '../../../images/assets/img/icons/global/help.svg';
import LoginIcon from '../../../images/assets/img/icons/global/login.svg';
import CartIcon from '../../../images/assets/img/icons/global/cart.svg';

import Button from '../button/button';
import AutoComplete from '../autocomplete/autocomplete';

// styles
import './header.scss';
import CustomizedSelect from '../select/select';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-content-left">
          <div className="header-content-left-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="header-content-left-menu">
            <div className="header-content-left-menu-item">
              <a className="header-content-left-menu-item__link" href="#">
                Find a Mechanic
              </a>
              <a className="header-content-left-menu-item__link" href="#">
                Door step services
              </a>
              <a className="header-content-left-menu-item__link" href="#">
                ECU Coding
              </a>
            </div>
          </div>
        </div>
        <div className="header-content-right">
          <div className="header-content-right-menu">
            <div className="header-content-right-menu-item">
              <LinkWithIcon
                icon={SearchIcon}
                text="Search"
                link="#"
                alt="search"
              />
              <LinkWithIcon icon={HelpIcon} text="Help" link="#" alt="help" />
              <LinkWithIcon icon={LoginIcon} text="Help" link="#" alt="Help" />
              <LinkWithIcon icon={CartIcon} text="Cart" link="#" alt="cart" />
            </div>
          </div>
        </div>
      </div>
      {/* <Button text="Find now" />
        <CustomizedSelect
          options={[
            {
              menu: 'General',
              value: 'General',
            },
            {
              menu: 'Motor',
              value: 'Motor',
            },
            {
              menu: 'Sever',
              value: 'Sever',
            },
          ]}
          defaultValue="General"
          handleChange={(e) => console.log(e)}
        />
      </div>
      <AutoComplete /> */}
    </div>
  );
}

export default Header;
