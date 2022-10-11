import React from 'react';
import './SingleCard.css';
import './myNewGalleryStyles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarIcon from '@mui/icons-material/Star';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const SingleCard = ({ el, isFetching }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; //? Смена стилей на сердечке после клика
  const navigate = useNavigate();
  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <div style={{ position: 'relative' }}>
          <div
            style={{
              width: '20px',
              heigth: '20px',
              position: 'absolute',
              top: '15px',
              right: '20px',
              zIndex: '10',
            }}
          >
            <Checkbox className='like'
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite style={{color:'red'}}/>}
            />
          </div>
          <Card
            sx={{
              maxWidth: 305,
              maxHeight: 390,
              paddingLeft: '30px',
              marginBottom: '20px',
              border: 0,
              boxShadow: 0,
            }}
          >
            <Box className="caruselMain">
              <Carousel
                className="eben"
                showStatus={false}
                showArrows={true}
              >
                {el.photos.map((p) => {
                  return (
                    <CardMedia
                      sx={{ borderRadius: '5%' }}
                      component="img"
                      height="290"
                      width="305"
                      image={p}
                      alt="green iguana"
                    />
                  );
                })}
              </Carousel>
            </Box>
            <CardContent
              className="card__content"
              sx={{ textAlign: 'left', padding: '10px 0 0 0' }}
              onClick={() => navigate(`/flat/${el.id}`)}
            >
              <div className="container__rate">
                <Typography
                  variant="h7"
                  component="div"
                  align="center"
                >
                  {el.country}, {el.city}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <StarIcon sx={{ fontSize: '16px' }} />
                  <span>4.89</span>
                </div>
              </div>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {el.address}
                <br />
                9-15 окт.
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                <b style={{ color: 'black' }}>{el.costPerNight}</b> руб./сутки
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SingleCard;
