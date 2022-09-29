const express = require('express')
const router = express.Router()
const {getOutlets,getOutletsID,newOutlet,deletOutlet} = require('../controllers/outletController')

router.get('/', getOutlets )





module.exports = router