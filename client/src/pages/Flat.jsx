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
import GTranslateIcon from '@mui/icons-material/GTranslate';
import CookieIcon from '@mui/icons-material/Cookie';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WifiIcon from '@mui/icons-material/Wifi';
import TvIcon from '@mui/icons-material/Tv';
import AirIcon from '@mui/icons-material/Air';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import { CalendarForFlat } from '../components/calendar/CalendarForFlat';

export const Flat = () => {
  const { id } = useParams();
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [flat, setFlat] = useState([]);
  const [costPerNight, setCostPerNight] = useState([]); //! тут будет оплата

  useEffect(() => {
    axios
      .post('http://localhost:3001/yaMap', { id }, { withCredentials: true })
      .then((res) => {
        setFlat(res.data.flat);
        setX(res.data.coordinats.split(',')[0]);
        setY(res.data.coordinats.split(',')[1]);
        setPhotos(res.data.flat.photos);
        setComments(res.data.comments);
      });
  }, []);

  console.log(typeof x);

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; //? Смена стилей на сердечке после клика

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ textAlign: 'left', fontSize: '20px' }}
        >
          {flat.category} · {flat.type}
        </Typography>
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <StarIcon sx={{ fontSize: '12px' }} />
            <span>
              {flat.rating} · {comments.length} отзывов · {flat.address} ·{' '}
              {flat.city} · {flat.country}
            </span>
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
                {flat.guestsQty} гостей · {flat.bedsQty} кроватей ·{' '}
                {flat.bathroom} ванная
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
              <Typography
                sx={{ lineHeight: '1.2', color: '#323232', fontSize: '17px' }}
              >
                Каждое бронирование включает в себя бесплатную защиту от отмены
                со стороны хозяина, защиту от несоответствия реальности и других
                проблем (например, с заселением).
              </Typography>
              <u>
                <Typography sx={{ marginTop: '15px', color: '#121212' }}>
                  <b>Подробнее</b>
                </Typography>
              </u>
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
              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                  paddingBottom: '15px',
                  color: '#6c6c6c',
                }}
              >
                <GTranslateIcon
                  sx={{
                    display: 'flex',
                    padding: '0px 10px 0 0px',
                    height: '18px',
                    color: '#3e3d3d',
                  }}
                />
                Часть информации переведена автоматически.
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: '17px', color: '#4e4e4e' }}
              >
                {flat.description}
              </Typography>
            </Box>
            <hr style={{ margin: '30px 0 30px 0' }} />
            <Typography
              variant="subtitle2"
              sx={{
                display: 'flex',
                justifyContent: 'left',
                fontSize: '20px',
                color: 'black',
                paddingBottom: '10px',
              }}
            >
              <b>Какие удобства вас ждут</b>
            </Typography>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              {flat.kitchen && (
                <Box
                  style={{
                    paddingTop: '10px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '18px',
                    color: '#7a7a7a',
                  }}
                >
                  <CookieIcon
                    style={{ marginRight: '10px', color: '#b7b6b6' }}
                  />
                  Плита
                </Box>
              )}
              {flat.aitConditioning && (
                <Box
                  style={{
                    paddingTop: '10px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '18px',
                    color: '#7a7a7a',
                  }}
                >
                  <AcUnitIcon
                    style={{ marginRight: '10px', color: '#b7b6b6' }}
                  />
                  Кондиционер
                </Box>
              )}
              {flat.stove && (
                <Box
                  style={{
                    paddingTop: '10px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '18px',
                    color: '#7a7a7a',
                  }}
                >
                  <MicrowaveIcon
                    style={{ marginRight: '10px', color: '#b7b6b6' }}
                  />
                  Микроволновая печь
                </Box>
              )}
              {flat.heating && (
                <Box
                  style={{
                    paddingTop: '10px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '18px',
                    color: '#7a7a7a',
                  }}
                >
                  <LocalFireDepartmentIcon
                    style={{ marginRight: '10px', color: '#b7b6b6' }}
                  />
                  Обогреватель
                </Box>
              )}
              {flat.wifi && (
                <Box
                  style={{
                    paddingTop: '10px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '18px',
                    color: '#7a7a7a',
                  }}
                >
                  <WifiIcon style={{ marginRight: '10px', color: '#b7b6b6' }} />
                  Wifi
                </Box>
              )}
              {flat.tv && (
                <Box
                  style={{
                    paddingTop: '10px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '18px',
                    color: '#7a7a7a',
                  }}
                >
                  <TvIcon style={{ marginRight: '10px', color: '#b7b6b6' }} />
                  Tv
                </Box>
              )}
              {flat.hairdryer && (
                <Box
                  style={{
                    paddingTop: '10px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '19px',
                    color: '#7a7a7a',
                  }}
                >
                  <AirIcon style={{ marginRight: '10px', color: '#b7b6b6' }} />
                  Фен
                </Box>
              )}
              {flat.washingMachine && (
                <Box
                  style={{
                    paddingTop: '10px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '18px',
                    color: '#7a7a7a',
                  }}
                >
                  <LocalLaundryServiceIcon
                    style={{ marginRight: '10px', color: '#b7b6b6' }}
                  />
                  Стиральная машина
                </Box>
              )}
              {flat.refrigerator && (
                <Box
                  style={{
                    paddingTop: '10px',
                    width: '300px',
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '18px',
                    color: '#7a7a7a',
                  }}
                >
                  <KitchenIcon
                    style={{ marginRight: '10px', color: '#b7b6b6' }}
                  />
                  Холодильник
                </Box>
              )}
            </Box>
            <hr style={{ margin: '40px 0 30px 0' }} />
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
              }}
            >
              <CalendarForFlat
                sx={{ borderRadius: '15px', width: '600px', height: '230px' }}
              />
            </Box>
          </Box>
          <Box className="calcul">
            <Calculator id={id} />
          </Box>
        </Box>
        <hr style={{ margin: '30px 0 30px 0' }} />
        <Box className="box__comment">
          {comments.map((el) => (
            <Box className="single__comment">
              <Avatar
                style={{
                  background: `${getRandomColor()}`,
                  marginRight: '10px',
                }}
              >
                UN
              </Avatar>
              <Typography
                variant="subtitle2"
                style={{ margin: '0px 10px 0 0px ' }}
              >
                Имя пользователя
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ color: 'grey' }}
              >
                {el.description}
              </Typography>
            </Box>
          ))}
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
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
          }}
        >
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
              {flat.pets && (
                <>
                  <PetsIcon />
                  <Typography variant="subtitle2">
                     Прибывание с питомцем
                  </Typography>
                </>
              )}
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              {flat.smoking && (
                <>
                  <SmokingRoomsIcon />
                  <Typography variant="subtitle2"> Курение</Typography>
                </>
              )}
            </Box>
            <Box
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}
            >
              <DirectionsCarIcon />
              <Typography variant="subtitle2">
                 Парковка : {flat.parking}{' '}
              </Typography>
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
              рекомендациями в отелях по всему миру может действовать требование
              носить защитные маски для лица как в общественных помещениях
              отеля, так и при передвижении под открытым небом.
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
