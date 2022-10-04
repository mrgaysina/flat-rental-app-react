import React from 'react';
import './SingleCard.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import StarIcon from '@mui/icons-material/Star';

const SingleCard = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: '20px',
          heigth: '20px',
          position: 'absolute',
          top: '15px',
          right: '20px',
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
        <CardMedia
          sx={{ borderRadius: '5%' }}
          component="img"
          height="290"
          width="305"
          image="https://trizio.ru/img-srv01/052017/img_post/top_348.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ textAlign: 'left', padding: '10px 0 0 0' }}>
          <div className="container__rate">
            <Typography
              variant="h7"
              component="div"
              align="center"
            >
              Россия, Москва
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
            Национальный парк Залесье
            <br />
            9-15 окт.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
          >
            <b style={{ color: 'black' }}>$40</b> ночь
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleCard;
