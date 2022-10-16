const express = require('express')
const router = express.Router()
const { getFoods } = require('../controllers/outletFoodsController')

router.get('/:id', getFoods)

module.exports = router