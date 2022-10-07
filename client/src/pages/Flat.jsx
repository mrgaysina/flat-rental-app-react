import React, { useState, useEffect } from 'react';
import './flat.css';
import { BrowserRouter, useParams } from 'react-router-dom';
import { YaMap } from '../components/yaMap/YaMap';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCard } from '../RTKSlice/rtkslice';

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

  useEffect(() => {
    axios
      .post('http://localhost:3001/yaMap', { id }, { withCredentials: true })
      .then((res) => {
        setX(res.data.coordinats.split(',')[0]);
        setY(res.data.coordinats.split(',')[1]);
      });
  }, []);

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
            <span>4.89 · 14 отзывов · улица Волхонка 10 · Мосвка · Россия</span>
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
            image="https://via.placeholder.com/560x520" //?главная фотка
          />
          <Box className="fourPic">
            <CardMedia
              className="smallImg1"
              sx={{ borderRadius: '0 0 0 0' }}
              component="img"
              image="https://via.placeholder.com/270x270" //?маленькая фотка
            />
            <CardMedia
              className="smallImg2"
              sx={{ borderRadius: '0 0 0 0' }}
              component="img"
              image="https://via.placeholder.com/270x270" //?маленькая фотка
            />
            <CardMedia
              className="smallImg3"
              sx={{ borderRadius: '0 10% 0 0' }}
              component="img"
              image="https://via.placeholder.com/270x270" //?маленькая фотка
            />
            <CardMedia
              className="smallImg4"
              sx={{ borderRadius: '0 0 10% 0' }}
              component="img"
              image="https://via.placeholder.com/270x270" //?маленькая фотка
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
                8 гостей · 4 спальни · 5 кроватей · 1 ванная
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
              Привет! мы пара, и один из нас работает удаленно, а другой - дома.
              Будем рады разместить гостей. У нас есть отдельная комната с
              балконом и прекрасным видом с 16 этажа. На балконе есть рабочее
              место . Вы можете свободно пользоваться нашей кухней и ванной. Еще
              у нас есть чудесный котик, которого можно потискать) Дом
              расположен в тихом месте, но в 20 минутах ходьбы от центра города.
              Рядом 2 станции метро
            </Box>
            <hr style={{ margin: '30px 0 30px 0' }} />
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
              }}
            >
              <Box>Кондиционер</Box>
              <Box>Обогреватель</Box>
              <Box>Wi-fi</Box>
              <Box>Телевизор</Box>
              <Box>Фен</Box>
              <Box>Стиральная машина</Box>
              <Box>Холодильник</Box>
              <Box>Плита</Box>
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
        <Box>Тут будут комментарии</Box>
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
              <PetsIcon />
              <Typography variant="subtitle2">
                 Прибывание с питомцем
              </Typography>
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <SmokingRoomsIcon />
              <Typography variant="subtitle2"> Курение</Typography>
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <DirectionsCarIcon />
              <Typography variant="subtitle2"> Парковка</Typography>
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
