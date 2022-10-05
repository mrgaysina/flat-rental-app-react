const route = require('express').Router();
const { Flat, Review } = require('../db/models');

route.post('/:id', async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.body.id);
    const review = await Review.findAll({ raw: true, where: { flatId: req.body.id } });
    const jsonFlat = flat.toJSON();
    res.json({ jsonFlat, review });
  } catch (error) {
    console.error('Error', error);
  }
});

module.exports = route;
