const route = require('express').Router();

const { Flat, Photoflat } = require('../db/models');

route.get('/', async (req, res) => {
  try {
    const flat = await Flat.findAll({ raw: true /*, where: { city: 'Париж' }*/ });
    res.json(flat);
  } catch (error) {
    console.error('Error', error);
  }
});


module.exports = route;
