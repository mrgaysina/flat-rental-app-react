import React, { Children, useState } from 'react';
import './Header.css';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MyModal from '../modal/MyModal';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import MyModalProf from '../modalProf/MyModalProf';
import Box from '@mui/material/Box';
import MyModalLog from '../modalLog/MyModalLog';

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const handleModal2 = () => {
    setModal2(true);
    setModal(false);
  };

  const handleModal3 = () => {
    setModal3(true);
    setModal(false);
  };

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
        <div
          className="profile__menu"
          onClick={handleModal}
        >
          <MenuIcon style={{ color: 'grey' }} />
          <AccountCircleIcon style={{ fontSize: '35px', color: 'grey' }} />
        </div>
      </div>
      <MyModalProf
        visible={modal}
        setVisible={setModal}
      >
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            className="reg__btn"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
            onClick={handleModal2}
          >
            <Typography
              variant="subtitle"
              style={{ paddingLeft: '15px' }}
            >
              Зарегистрироваться
            </Typography>
          </Box>
          <Box
            className="log__btn"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
            onClick={handleModal3}
          >
            <Typography
              variant="subtitle"
              style={{ paddingLeft: '15px' }}
            >
              Войти
            </Typography>
          </Box>
          <hr
            style={{
              margin: '10px 0 10px 0',
              width: '100%',
              height: '0.5px',
              color: 'lightgray',
              backgroundColor: 'lightgray',
              border: 'none',
            }}
          />
          <Box
            className="help__btn"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
            }}
          >
            <Typography
              variant="subtitle"
              style={{ paddingLeft: '15px' }}
            >
              Помощь
            </Typography>
          </Box>
        </Box>
      </MyModalProf>
      <MyModal
        visible={modal2}
        setVisible={setModal2}
      ></MyModal>
      <MyModalLog
        visible={modal3}
        setVisible={setModal3}
      ></MyModalLog>
    </div>
  );
};

export default Navbar;
