const route = require('express').Router();
const { Flat } = require('../db/models');

route.post('/', async(req,res) => {
    const { id } = req.params;
    console.log('req.params', req.params);
    const myflat = await Flat.findAll({raw: true, where: {ownerId: }})
})


module.exports = route;