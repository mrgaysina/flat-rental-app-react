const route = require('express').Router();
const { Flat } = require('../db/models');

route.post('/', async (req, res) => {
  try {
    const flat = await Flat.findAndCountAll({
      raw: true,
      limit: 10,
      offset: req.body.currentPage,
    });
    res.json({ flat });
  } catch (error) {
    console.error('Error', error);
  }
});

module.exports = route;
