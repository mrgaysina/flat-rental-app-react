import React from 'react';
import './MyTrips.css';
import {
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormControlLabel,
  Switch,
  Box,
  CardMedia,
} from '@mui/material';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import { useNavigate } from 'react-router-dom';

const MyTrips = () => {
  const navigate = useNavigate();
  return (
    <Box className="mainTrips">
      <Box className="overlay">
        <Typography
          variant="subtitle3"
          sx={{
            fontSize: '30px',
            color: 'black',
            fontWeight: '500',
            margin: '20px 0 30px 0',
          }}
        >
          Мои Квартиры
        </Typography>
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
        <Box style={{ paddingTop: '10px' }}>Карточки</Box>
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
        <Typography style={{ color: 'gray', fontSize: '14px' }}>
          Не можете найти бронирование? 
          <a
            style={{ color: 'black' }}
            href="https://github.com/EvgeniyaPodshibyakina/flat-rental-app-react"
          >
            В центр помощи
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default MyTrips;
