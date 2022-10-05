const express = require('express')
const router = express.Router()
const {getOrders,newOrder} = require('../controllers/OrderController.js')

router.get('/:id', getOrders )

router.post('/', newOrder )

module.exports = router