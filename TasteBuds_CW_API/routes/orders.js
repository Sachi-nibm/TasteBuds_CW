// File Name - oredrs.js
// File Desc - oredrs.js
// Create By - Sachini Perera - 05/10/2022

const express = require('express')
const router = express.Router()
const {getOrders,newOrder} = require('../controllers/OrderController.js')

router.get('/:id', getOrders )

router.post('/', newOrder )

//router.delete('/:id', deletOrder )

module.exports = router