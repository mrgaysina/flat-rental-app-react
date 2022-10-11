import React, { Children, useState } from 'react';
import './Header.css';
import dayjs from 'dayjs';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import MyModal from '../modal/MyModal';
import { Typography } from '@mui/material';
import MyModalProf from '../modalProf/MyModalProf';
import Box from '@mui/material/Box';
import MyModalLog from '../modalLog/MyModalLog';
import { Divider, Paper, Stack, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPoints, getCoordinates, getCost } from '../../RTKSlice/rtkslice';
import PublicIcon from '@mui/icons-material/Public';
import FaceIcon from '@mui/icons-material/Face';
import Chip from '@mui/material/Chip';
import CancelIcon from '@mui/icons-material/Cancel';

const Navbar = ({logOutCallback}) => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [change, setChange] = useState('header__center');
  const [change2, setChange2] = useState('header');
  const [sizeCh1, setSizeCh1] = useState('7ch');
  const [sizeCh2, setSizeCh2] = useState('17ch');
  const [titleNav, setTitleNav] = useState('title__modal');
  const [textF, setTextF] = useState('standard');
  const user = useSelector((store) => store.toolkit.user)

  const changeCl = () => {
    setChange('header__center__on');
    setChange2('header__on');
    // setTextF('outlined');
    setSizeCh1('21ch');
    setSizeCh2('21ch');
    setTextF('outlined');
    setTitleNav('title__modal_on');
  };

  const changeOff = () => {
    setChange('header__center__off');
    setChange2('header');
    // setTextF('outlined');
    setSizeCh1('7ch');
    setSizeCh2('17ch');
    setTextF('standard');
    setTitleNav('title__modal_off');
  };

  const changeTop = () => {
    setChange('header__center__off__top');
  };

  const changeDown = () => {
    setChange('header__center__off__down');
  };

  const handlnav = () => {
    changeTop();
    setModal(false);
    navigate('/mytrips');
  };
  const handlFavorite = () => {
    changeTop();
    setModal(false);
    navigate(`/favorite/${user.id}`);
  };
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

  const navigate = useNavigate();
  const card = useSelector((store) => store.toolkit.card);
  const dispatch = useDispatch();

  const [checkin, setCheckin] = useState(dayjs(new Date()));
  const [checkout, setCheckOut] = useState(dayjs(new Date()));
  const [direction, setDirection] = useState('');
  const [guests, setGuests] = useState();

  const handlerDirection = (event) => {
    setDirection(event.target.value);
  };

  const handlerGuests = (event) => {
    setGuests(event.target.value);
  };

  const checkBooking = () => {
    axios
      .post(
        `http://localhost:3001/search`,
        { checkin, checkout, direction, guests },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(getPoints(res.data.findHome));
        dispatch(getCoordinates(res.data.coor));
        dispatch(getCost(res.data.costs));
      });
  };

  const onClickFunc = () => {
    checkBooking();
    setTimeout(() => {
      navigate('/results');
    }, 100);
  };

  return (
    <div className={change2}>
      <Box className={titleNav}>
        <Typography
          sx={{ fontSize: '18px', color: '#616262' }}
          variant="body1"
        >
          <b>Выберите даты аренды и мы найдем для вас варианты</b>
        </Typography>
        <Chip
          sx={{ marginLeft: '10px' }}
          label="Поиск"
          onClick={(event) => {
            onClickFunc(event);
            changeOff();
          }}
        />
        <Chip
          sx={{ marginLeft: '10px' }}
          label={<CancelIcon sx={{ color: 'gray' }} />}
          onClick={changeOff}
        />
      </Box>
      <img
        className="header__icon"
        src="https://i.postimg.cc/VNVPptW3/no.png"
        alt="header__icon"
        onClick={(event) => {
          navigate('/');
          changeDown();
          changeOff();
        }}
      />
      <Box
        visibility="display"
        onClick={changeCl}
        sx={{ margin: '150px' }}
        className={change}
      >
        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              flexItem
            />
          }
          spacing={1}
          justifyContent="space-evenly"
        >
          <Box
            component="form"
            sx={{
              '& > :not(style)': {
                m: 0,
                width: [sizeCh1],
                transition: '0.4s',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              id="outlined-basic"
              label={<PublicIcon sx={{ paddingLeft: '16px' }} />}
              variant={textF}
              placeholder="Поиск направлений"
              value={direction}
              onChange={handlerDirection}
            />
          </Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DatePicker
                size="small"
                disablePast="true"
                label="Прибытие"
                renderInput={(params) => (
                  <TextField
                    variant={textF}
                    sx={{ width: [sizeCh2], transition: '0.4s' }}
                    size="small"
                    {...params}
                  />
                )}
                value={checkin}
                onChange={(value) => {
                  setCheckin(value);
                }}
              />
            </Stack>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DatePicker
                disablePast="true"
                label="Выезд"
                renderInput={(params) => (
                  <TextField
                    variant={textF}
                    sx={{ width: [sizeCh2], transition: '0.4s' }}
                    size="small"
                    {...params}
                  />
                )}
                value={checkout}
                onChange={(value) => {
                  setCheckOut(value);
                }}
              />
            </Stack>
          </LocalizationProvider>
          <Box
            component="form"
            sx={{
              '& > :not(style)': {
                m: 0,
                width: [sizeCh1],
                transition: '0.4s',
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              size="small"
              id="outlined-basic"
              label={<FaceIcon sx={{ paddingLeft: '16px' }} />}
              variant={textF}
              placeholder="Кто едет?"
              value={guests}
              onChange={handlerGuests}
            />
          </Box>
          {/* <button
            className="search"
            onClick={onClickFunc}
          >
            <SearchIcon style={{ color: 'white' }} />
          </button> */}
        </Stack>
      </Box>

      <div className="header__right">
        <Typography
          onClick={(event) => {
            navigate('/addFlats');
            changeTop();
          }}
          variant="body"
          style={{ fontSize: '14px' }}
        >
          Сдайте жилье
        </Typography>
        <div
          className="profile__menu"
          onClick={handleModal}
        >
          <MenuIcon style={{ color: 'gray' }} />
          <AccountCircleIcon style={{ fontSize: '35px', color: '#cdcccc' }} />
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
        > {
          !user.id ? 
          <><Box
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
                  variant="body2"
                  style={{ paddingLeft: '15px', fontSize: '15px' }}
                >
                  <b>Зарегистрироваться</b>
                </Typography>
              </Box><Box
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
                    style={{ paddingLeft: '15px', fontSize: '15px' }}
                  >
                    Войти
                  </Typography>
                </Box><hr
                  style={{
                    margin: '10px 0 10px 0',
                    width: '100%',
                    height: '0.5px',
                    color: 'lightgray',
                    backgroundColor: 'lightgray',
                    border: 'none',
                  }} /><Box
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
                    style={{ paddingLeft: '15px', fontSize: '15px' }}
                  >
                    Помощь
                  </Typography>
                </Box></> 
        :
        <><Box
                className="log__btn"
                style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
                onClick={handlnav}
              >
                <Typography
                  variant="subtitle"
                  style={{ paddingLeft: '15px', fontSize: '15px' }}
                >
                  Мои поездки
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
                onClick={handlFavorite}
              >
                <Typography
                  variant="subtitle"
                  style={{ paddingLeft: '15px', fontSize: '15px' }}
                >
                  Мое избранное
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
                  }} /><Box
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
                    style={{ paddingLeft: '15px', fontSize: '15px' }}
                  >
                    Помощь
                  </Typography>
                </Box><Box onClick={logOutCallback}
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
                    style={{ paddingLeft: '15px', fontSize: '15px' }}
                  >
                    Выйти
                  </Typography>
                </Box></>
       
        }
         
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
