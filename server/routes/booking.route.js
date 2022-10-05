const route = require('express').Router();
const { Booking } = require('../db/models');

route.post('/:id', async (req, res) => {
  try {
    const { id, checkin, checkout } = req.body;
    const createBooking = await Booking.create({
      flatId: id,
      startDate: checkin,
      endDate: checkout,
    });
  } catch (error) {
    console.error('Error', error);
  }
});

module.exports = route;
