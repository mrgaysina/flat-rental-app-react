const route = require('express').Router();
const { Flat } = require('../db/models');

route.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    console.log('idd!!!!!', id);
    const flat = await Flat.findOne({ raw: true, where: { id } });
    const coordinats = flat.coordinates;
    res.json({ coordinats });
  } catch (error) {
    console.error('Error', error);
  }
});

module.exports = route;
