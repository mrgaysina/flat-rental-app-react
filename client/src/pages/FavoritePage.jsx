import React, { useEffect, useState } from 'react';
import './FavoritePage.css';
import './MyTrips.css';
import './AddPages.css';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Switch,
  Button,
  CardMedia,
  Card,
  CardContent,
  Fab,
  Input,
  Box,
  Checkbox,
} from '@mui/material';

import { Carousel } from 'react-responsive-carousel';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

export default function FavoritePage() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.toolkit.user);
  const userId = user.id;

  const [favorites, setFavorite] = useState([]) //! инфа о  лайкнутых квартирах
  const [myflats, setMyflats] = useState([]) //! инфа о моих квартирах
  const [mytrips,setMytrips] = useState([]) //! инфа от моих поездках

  useEffect(() => {
    axios
      .post(
        `http://localhost:3001/favorite/${userId}`,
        { userId },
        { withCredentials: true }
      )
      .then((res) => {
        setFavorite(res.data.favorites)
        setMyflats(res.data.myflats)
        setMytrips(res.data.mytrips)
        console.log('favorites from Favorite Page тут мои любимые квартиры',favorites);
        console.log('myflats from Favorite Page тут мои квартиры',myflats);
        console.log('mytrips from Favorite Page тут мои поездки',mytrips);
      });
  }, []);

  console.log('user from favorite', user);
  if (!user.accesstoken) return <Navigate to="/" />;

  return (
    //   <div>
    //     {favorites.map((favorite) => {
    // return <div>{favorite['Flats.Favorite.flatId']}</div>
    //     })}
    //   </div>
    <Box>
      <Box className="nav_LK">
        <img
          style={{ width: '100%' }}
          src="https://i.postimg.cc/905t4cYC/111.png"
          alt="навчик"
        />
      </Box>
      <Box className="all__content">
        <Box className="titileUserName">
          <Box className="avatar__info">
            <Box
              className="ava"
              style={{
                background: 'white',
                borderRadius: '50%',
                height: '160px',
                width: '160px',
              }}
            >
              <CardMedia
                className="avaPic"
                style={{
                  border: '5px solid white',
                  borderRadius: '50%',
                  height: '160px',
                  width: '160px',
                }}
                component="img"
                height="220"
                image="https://studio21.ru/wp-content/uploads/2020/07/kizaru1.jpg"
                alt="green iguana"
              />
            </Box>
            <Box className="insideNav">
              <Typography
                variant="subtitle3"
                style={{ fontSize: '22px' }}
              >
                Олег Кизару
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="myTripsLK">
        <Box style={{background: "teal"}}>

        </Box>
        <Box className="tripsDisc">
          <Box className="inside_Disc">
            <RocketLaunchOutlinedIcon
              sx={{ fontSize: '35px', color: '#00c7ce' }}
            />
            <Typography
              variant="subtitle3"
              sx={{
                fontSize: '15px',
                color: 'black',
                fontWeight: '600',
                margin: '20px 0 5px 0',
              }}
            >
              Задумайся о жилье зарнее
            </Typography>
            <Typography
              variant="subtitle3"
              sx={{
                fontSize: '13px',
                color: '#adaaaa',
                fontWeight: '500',
                margin: '0 0 7px 0',
              }}
            >
              Пора придумать новые путешествия
            </Typography>
            <button
              onClick={() => navigate('/')}
              className="btn__trips"
            >
              <p style={{ color: 'white', fontWeight: '600' }}>Начать поиск</p>
            </button>
          </Box>
          <CardMedia
            sx={{ borderRadius: '0px 10px 10px 0px', width: '820px' }}
            component="img"
            image="https://i.postimg.cc/FHwThB5F/1.png"
            alt="green iguana"
          />
        </Box>
      </Box>
      {/* <div className="footerAdd">
        <div className="footer__content_add">
          <span>© 2022 Nolimit, Inc.</span>
          <span>Support you everywhere.</span>
        </div>
        <div></div>
      </div> */}
    </Box>
  );
}
