// File Name - oredrs.js
// File Desc - oredrs.js
// Create By - Sachini Perera - 05/10/2022

const express = require('express')
const router = express.Router()
const {getOrders,getAllOrders,newOrder} = require('../controllers/OrderController.js')

router.get('/:id', getOrders )

router.get('/', getAllOrders )

router.post('/', newOrder )

//router.delete('/:id', deletOrder )

module.exports = router