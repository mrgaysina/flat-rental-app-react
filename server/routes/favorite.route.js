/* eslint-disable max-len */
const route = require('express').Router();

const { User, Flat, Favorite } = require('../db/models');

route.post('/', async (req, res) => {
  console.log('req.body', req.body);
  const { userId, id } = req.body;

  try {
    const flat = await Flat.findOne({ where: { id }, raw: true });
    console.log('flat', flat);
    console.log('id', id);
    if (flat) {
      await Favorite.create({ userId, flatId: Number(id) });
      res.json({ flat });
    } else {
      res.json({});
    }
  } catch (error) {
    console.error('error in favorite in user', error);
  }
});
route.post('/:id', async (req, res) => {
  console.log('req.body', req.body);
  const { userId } = req.body;
  try {
    const favorites = await User.findAll({ where: { id: userId }, include: Flat, raw: true });
    console.log(favorites);

    res.json({ favorites });
  } catch (error) {
    console.error('error in profile router ', error);
  }
});

module.exports = route;
