const route = require('express').Router();
const { Flat } = require('../db/models');

route.post('/', async (req, res) => {
  const { currentPage } = req.body;
  try {
    const flat = await Flat.findAndCountAll({
      raw: true,
      limit: 10,
      offset: currentPage,
    });
    res.json({ flat });
  } catch (error) {
    console.error('Error', error);
  }
});

route.get('/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const flat = await Flat.findAll({
      where: { category },
      raw: true,
    });
    console.log('flat on back',flat);
    res.json(flat);
  } catch (error) {
    console.error('Error', error);
  }
});

module.exports = route;
