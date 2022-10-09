const route = require('express').Router();
const { Op } = require('sequelize');
const { Booking, Flat } = require('../db/models');

route.post('/', async (req, res) => {
  console.log(req.body);
  const {
    checkin, checkout, direction, guests,
  } = req.body;
  const findHome = await Flat.findAll({
    raw: true,
    include: [{
      model: Booking,
      where: {
        startDate: { [Op.notBetween]: [checkin, checkout] },
        endDate: { [Op.notBetween]: [checkin, checkout] },
      },
      required: false,
    }],
    where: { city: direction, guestsQty: { [Op.gte]: guests } },
    // limit: 10,
    // offset: req.body.currentPage,
  });

  res.json({ findHome });
});

module.exports = route;
