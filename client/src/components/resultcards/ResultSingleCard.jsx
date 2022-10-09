import React from 'react';
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
import { useNavigate } from 'react-router-dom';
import { addCard, addPhoto } from '../../RTKSlice/rtkslice';
import Loader from '../loader/Loader';

const ResultSingleCard = ({ el, isFetching }) => {
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
              maxWidth: 200,
              maxHeight: 390,
              paddingLeft: '30px',
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
                    height="210"
                    width="200"
                    image={p}
                    alt="green iguana"
                  />
                );
              })}
            </Carousel>

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

export default ResultSingleCard;