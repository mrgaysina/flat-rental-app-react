const route = require('express').Router();

const {
  User, Flat, Favorite, Booking,
} = require('../db/models');

const avatarMiddleware = require('../middleware/avatar');

route.post('/', avatarMiddleware.single('favorite'), (req, res) => {
  try {
    if (req.file) {
      console.log(req.file);
      res.json(req.file);
    } else {
      console.log('nooooooo');
    }
  } catch (error) {
    console.log(error);
  }
});

route.post('/update', async (req, res) => {
  const { avatar, userId } = req.body;
  console.log(avatar, userId);
});

module.exports = route;
