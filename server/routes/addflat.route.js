const route = require('express').Router();
// const sequelize = require('sequelize');
const axios = require('axios');
const { Flat } = require('../db/models');

route.post('/', async (req, res) => {
  console.log('baaaaaaaaaaaaack');
  const {
    category, bed, bathroom, type, guests, parking, pets, smoking, country, city, address,
    costPerNight, description, kitchen, airCondition, wifi, TV, heating, hairdryer,
    washingMachine, refrigerator, stove, photos,
  } = req.body;

  const coord = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=9e68dad6-a5b6-4237-bfa0-02b4a68d8290&format=json&geocode=${city}+${address}`, { withCredentials: true });
  // console.log('cooooooord', coord.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' '));
  const coordinates = coord.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().join(', ');
  console.log('coordinates', coordinates);
  const findmaxid = await Flat.max('id');

  const newFlat = await Flat.create({
    id: findmaxid + 1,
    category,
    country,
    city,
    address,
    coordinates,
    type,
    bedsQty: bed,
    guestsQty: guests,
    costPerNight,
    description,
    kitchen,
    bathroom,
    aitConditioning: airCondition,
    heating,
    wifi,
    pets,
    smoking,
    parking,
    tv: TV,
    hairdryer,
    washingMachine,
    refrigerator,
    stove,
    rating: 5,
    photos,
  });
  console.log('newFlat', newFlat.toJSON().id);
  const newId = newFlat.toJSON().id;
  res.json({ newId });
});

module.exports = route;
