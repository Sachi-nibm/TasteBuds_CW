const express = require('express')
const router = express.Router()
const { getFoods,postFood,deleteFood } = require('../controllers/foodController')

router.get('/', getFoods)

router.post('/', postFood)

router.delete('/:id', deleteFood)



module.exports = router