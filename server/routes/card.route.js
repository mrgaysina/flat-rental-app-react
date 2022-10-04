const route = require('express').Router();

const { Flat, PhotoFlat } = require('../db/models');

route.get('/', async (req, res) => {
  try {
    const flat = await Flat.findAll({ raw: true});
    const photoflat = await PhotoFlat.findAll({ raw: true });
    console.log('photoflat', photoflat);
    res.json({ flat, photoflat });
  } catch (error) {
    console.error('Error', error);
  }
});

module.exports = route;
