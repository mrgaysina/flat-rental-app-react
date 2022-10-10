const route = require('express').Router();
const sequelize = require('sequelize');
const { Flat } = require('../db/models');

route.post('/', async (req, res) => {
  console.log('baaaaaaaaaaaaack');
  const {
    category, bed, bathroom, type, guests, parking, pets, smoking, country, city, address,
    costPerNight, description, kitchen, airCondition, wifi, TV, heating, hairdryer,
    washingMachine, refrigerator, stove, photos,
  } = req.body;
  const findmaxid = await Flat.max('id');

  const newFlat = await Flat.create({
    id: findmaxid + 1,
    category,
    country,
    city,
    address,
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
    photos,
  });
  console.log('newFlat', newFlat.toJSON().id);
  const newId = newFlat.toJSON().id;
  res.json({ newId });
});

module.exports = route;
