const express = require('express')
const router = express.Router()
const { getFoods,getFoodID } = require('../controllers/foodController')

router.get('/', getFoods)





module.exports = router