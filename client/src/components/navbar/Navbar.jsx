import React from 'react';
import './Header.css';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://psv4.userapi.com/c237331/u13359694/docs/d24/dd4654f39ad0/no.png?extra=2kNgMHzgaakKeNNs-eAhfnT_wXY51uCdB1Ogxj-JlGL9O85AlA3NCIowGAQ_dGZJrGzqeCGdByxUgiE3Q_HsUBi6I-dZuJSr8_EgmQkDLrpPml7iE9MUhj1_GTT50N7RrpaulhzRxIpVlPXFs4Ks"
        alt="header__icon"
      />

      <div className="header__center">
        <input type="text" />
        <button className="search">
          <SearchIcon style={{ color: 'white' }} />
        </button>
      </div>

      <div className="header__right">
        <p style={{ fontSize: '14px' }}>Сдайте жилье</p>
        <LanguageIcon />
        <div className="profile__menu">
          <MenuIcon style={{ color: 'grey' }} />
          <AccountCircleIcon style={{ fontSize: '35px', color: 'grey' }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
