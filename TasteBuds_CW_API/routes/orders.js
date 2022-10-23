// File Name - orders.js
// File Desc - orders routes
// Create By - Sachini Perera - 05/10/2022

const express = require('express')
const router = express.Router()
const {getOrders,getAllOrders,newOrder,deletOrder} = require('../controllers/OrderController.js')

router.get('/:id', getOrders )

router.get('/', getAllOrders )

router.post('/', newOrder )

router.delete('/:id', deletOrder )

module.exports = router