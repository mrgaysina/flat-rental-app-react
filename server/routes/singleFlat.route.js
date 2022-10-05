const route = require('express').Router();

const { Flat, PhotoFlat, User } = require('../db/models');

route.get('/:id', async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    // const photoflat = await PhotoFlat.findAll({ raw: true });
    // const user = await User.findAll({ raw: true });
    // console.log('photoflat', photoflat);
    res.json({ flat });
  } catch (error) {
    console.error('Error', error);
  }
});

module.exports = route;
