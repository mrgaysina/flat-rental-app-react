import React from 'react';
import './SingleCard.css';
import './myNewGalleryStyles.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarIcon from '@mui/icons-material/Star';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { addCard, addPhoto } from '../../RTKSlice/rtkslice';
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router-dom';

const SingleCard = ({ el, isFetching }) => {

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
              zIndex: '100',
            }}
          >
            <FavoriteTwoToneIcon
              className="like"
              sx={{ color: 'white' }}
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
            <Carousel
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
            <CardContent onClick={() => navigate(`/flat/${el.id}`)} className='card__content' sx={{ textAlign: 'left', padding: '10px 0 0 0' }}>
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
