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

const SingleCard = ({el}) => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: '20px',
          heigth: '20px',
          position: 'absolute',
          top: '15px',
          right: '20px',
          zIndex:"100"
        }}
      >
        <FavoriteTwoToneIcon sx={{ color: 'white' }} />
      </div>
      <Card
        sx={{
          maxWidth: 305,
          maxHeight: 390,
          paddingLeft: '20px',
          marginBottom: '20px',
          border: 0,
          boxShadow: 0,
        }}
      >
        <Carousel showStatus={false} showArrows={true}  >
          <CardMedia
            sx={{ borderRadius: '5%' }}
            component="img"
            height="290"
            width="305"
            image="https://trizio.ru/img-srv01/052017/img_post/top_348.jpg"
            alt="green iguana"
          />
          <CardMedia
            sx={{ borderRadius: '5%' }}
            component="img"
            height="290"
            width="305"
            image="https://houses.ru/upload/medialibrary/7e4/kk04.jpg"
            alt="green iguana"
          />
          <CardMedia
            sx={{ borderRadius: '5%' }}
            component="img"
            height="290"
            width="305"
            image="https://i.pinimg.com/originals/c3/a0/f0/c3a0f0010e46a525c3e3709c97f4a232.png"
            alt="green iguana"
          />
        </Carousel>
        <CardContent sx={{ textAlign: 'left', padding: '10px 0 0 0' }}>
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
            <b style={{ color: 'black' }}>${el.costPerNight}</b> ночь
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleCard;
