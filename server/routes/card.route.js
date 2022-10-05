const route = require('express').Router();

const { Flat } = require('../db/models');

route.post('/', async (req, res) => {
  try {
    console.log('req.body',req.body);
    const flat = await Flat.findAndCountAll({ raw: true, limit: 10, offset: req.body.currentPage });
    // const photoflat = await PhotoFlat.findAll({ raw: true });
    // console.log('!!!!!!!!!!!', flat);
    res.json({ flat });
  } catch (error) {
    console.error('Error', error);
  }
});



module.exports = route;
