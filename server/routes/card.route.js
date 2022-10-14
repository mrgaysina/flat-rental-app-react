const route = require('express').Router();
const { Flat, Review } = require('../db/models');

route.post('/', async (req, res) => {
  const { currentPage } = req.body;
  try {
    const flat = await Flat.findAndCountAll({
      raw: true,
      limit: 10,
      offset: currentPage,
    });
    // console.log(flat);
    // const rate = await Review.findAll({ raw: true });
    // console.log(rate);
    // for (let i = 0; i < rate.length; i++) {
    //   for (let j = 0; j < flat.length; j++) {
    //     if (flat[j].id === rate[i].flatId) {

    //     }
    //   }
    // }
    res.json({ flat });
  } catch (error) {
    console.error('Error', error);
  }
});

route.get('/:category', async (req, res) => {
  const { category } = req.params;
  console.log('category on back', category);
  try {
    if (category === 'All') {
      const flat = await Flat.findAll({
        raw: true,
      });
      res.json(flat);
    } else {
      const flat = await Flat.findAll({
        where: { category },
        raw: true,
      });
      res.json(flat);
    }
  } catch (error) {
    console.error('Error', error);
  }
});

module.exports = route;
