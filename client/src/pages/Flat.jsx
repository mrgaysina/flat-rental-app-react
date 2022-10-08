import React, { useState, useEffect } from 'react';
import './flat.css';
import { BrowserRouter, useParams } from 'react-router-dom';
import { YaMap } from '../components/yaMap/YaMap';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import { Calculator } from '../components/calculator/Calculator';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import RestoreIcon from '@mui/icons-material/Restore';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export const Flat = () => {

  const { id } = useParams();
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos,setPhotos] = useState([]);
  const [flat,setFlat] = useState([])
  const [costPerNight,setCostPerNight] = useState([]);//! тут будет оплата

  useEffect(() => {
    axios
      .post('http://localhost:3001/yaMap', { id }, { withCredentials: true })
      .then((res) => {
 
        setFlat(res.data.flat)
        setX(res.data.coordinats.split(',')[0]);
        setY(res.data.coordinats.split(',')[1]);
        setPhotos(res.data.flat.photos);
        setComments(res.data.comments);
      });
  }, []);

  console.log(typeof x);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; //? Смена стилей на сердечке после клика
  return (

    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <StarIcon sx={{ fontSize: '16px' }} />
            <span>{flat.rating} · {comments.length} отзывов · {flat.address} · {flat.city} · {flat.country}</span>
          </Box>
          <Box>
            <u>Сохранить</u>
            <Checkbox
              {...label}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </Box>
        </Box>
        <Box className="box__photo">
          <CardMedia
            className="bigImg"
            sx={{ borderRadius: '5% 0 0 5%' }}
            component="img"
            image={photos[0]} //?главная фотка
          />
          <Box className="fourPic">
            <CardMedia
              className="smallImg1"
              sx={{ borderRadius: '0 0 0 0' }}
              component="img"
              image={photos[1]} //?маленькая фотка
            />
            <CardMedia
              className="smallImg2"
              sx={{ borderRadius: '0 0 0 0' }}
              component="img"
              image={photos[2]} //?маленькая фотка
            />
            <CardMedia
              className="smallImg3"
              sx={{ borderRadius: '0 10% 0 0' }}
              component="img"
              image={photos[3]} //?маленькая фотка
            />
            <CardMedia
              className="smallImg4"
              sx={{ borderRadius: '0 0 10% 0' }}
              component="img"
              image={photos[4]} //?маленькая фотка
            />
          </Box>
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '40px',
            position: 'relative',
          }}
        >
          <Box
            style={{ display: 'flex', flexDirection: 'column', width: '660px' }}
          >
            <Box>
              <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5">Хозяин: Четкий Кекс</Typography>
                <Avatar sx={{ width: 40, height: 40 }}>ЧК</Avatar>
              </Box>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                {flat.guestsQty} гостей · 4 спальни · {flat.bedsQty} кроватей · {flat.bathroom} ванная
              </Typography>
              <hr style={{ margin: '30px 0 30px 0' }} />
            </Box>
            <Box
              style={{
                display: 'flex',
                textAlign: 'start',
                flexDirection: 'column',
              }}
            >
              <CardMedia
                sx={{
                  borderRadius: '5%',
                  width: '180px',
                  marginBottom: '20px',
                }}
                component="img"
                image="https://psv4.userapi.com/c237131/u13359694/docs/d1/f314a2849df4/nolimit.png?extra=JXxR2MUQyBJqiFrzzqqjYpae9rqHsVyfrf-Fcz9ygBeaD7GOC-nwHeXwG979uPAnCi13KKp7Z4WkDzpINXccH4fiv_m4nOoRBrszRdMBN5uZswGHq9U_SlDvDbyExf0CyUy7RrxFn1h2QR_tUQ"
              />
              Каждое бронирование включает в себя бесплатную защиту от отмены со
              стороны хозяина, защиту от несоответствия реальности и других
              проблем (например, с заселением).
            </Box>
            <hr style={{ margin: '30px 0 30px 0' }} />
            <Box
              style={{
                display: 'flex',
                textAlign: 'start',
                flexDirection: 'column',
              }}
            ></Box>
            <Box
              style={{
                display: 'flex',
                textAlign: 'start',
                flexDirection: 'column',
              }}
            >
            {flat.description}
            </Box>
            <hr style={{ margin: '30px 0 30px 0' }} />
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
              }}
            >
              {flat.kitchen &&<Box>Плита</Box>}
              {flat.aitConditioning &&<Box>Кондиционер</Box>}
              {flat.stove &&<Box>Микроволновая печь</Box>}
              {flat.heating &&<Box>Обогреватель</Box>}
              {flat.wifi &&<Box>Wifi</Box>}
              {flat.tv &&<Box>Tv</Box>}
              {flat.hairdryer &&<Box>Фен</Box>}
              {flat.washingMachine &&<Box>Стиральная машина</Box>}
              {flat.refrigerator &&<Box>Холодильник</Box>}
            </Box>
            <hr style={{ margin: '30px 0 30px 0' }} />
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
              }}
            >
              Тут календарь бронирования
              <CardMedia
                sx={{ borderRadius: '15px', width: '600px', height: '230px' }}
                component="img"
                image="https://via.placeholder.com/600x230"
              />
            </Box>
          </Box>
          <Box className="calcul">
            <Calculator />
          </Box>
        </Box>
        <hr style={{ margin: '30px 0 30px 0' }} />
        <Box>
          {
            comments.map((el)=> <Typography variant="subtitle2">{el.description}</Typography>)
          }
        </Box>
        <hr style={{ margin: '30px 0 30px 0' }} />
        <YaMap
          x={x}
          y={y}
        />
        <hr style={{ margin: '30px 0 25px 0' }} />
        <Typography
          variant="h5"
          style={{
            textAlign: 'start',
            marginBottom: '20px',
          }}
        >
          Важная информация
        </Typography>
        <Box style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "20px" }}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'start',
              width: '300px',
            }}
          >
            <Typography variant="button">Правила дома</Typography>
            <br />
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <QueryBuilderIcon />
              <Typography variant="subtitle2"> Прибытие: Гибкое</Typography>
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <RestoreIcon />
              <Typography variant="subtitle2"> Выезд: 12:00</Typography>
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              
              { flat.pets && <><PetsIcon /><Typography variant="subtitle2"> Прибывание с питомцем</Typography></> }
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              
              { flat.smoking && <><SmokingRoomsIcon /><Typography variant="subtitle2"> Курение</Typography></> }
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <DirectionsCarIcon />
              <Typography variant="subtitle2"> Парковка : {flat.parking} </Typography>
            </Box>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'start',
              width: '300px',
            }}
          >
            <Typography variant="button">Здоровье и безопасность</Typography>
            <br />
            <Typography variant="subtitle2">
              В соответствии с местными или национальными требованиями и
              рекомендациями в отелях Hyatt по всему миру может действовать
              требование носить защитные маски для лица как в общественных
              помещениях отеля, так и при передвижении под открытым небом.
            </Typography>
          </Box>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'start',
              width: '300px',
            }}
          >
            <Typography variant="button">Правила отмены</Typography>
            <br />
            <Typography variant="subtitle2">
              Плата за это бронирование не возвращается. Ознакомьтесь с
              правилами отмены. Они будут действовать, даже если вы отмените
              бронирование из-за коронавируса.
            </Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};