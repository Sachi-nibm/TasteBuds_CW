const express = require('express')
const router = express.Router()
const { getFoods,postFood,deleteFood,getFood } = require('../controllers/foodController')

router.get('/', getFoods)

router.post('/', postFood)

router.delete('/:id', deleteFood)

router.get('/:id', getFood)

module.exports = router