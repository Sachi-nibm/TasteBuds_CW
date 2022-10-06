const express = require('express')
const router = express.Router()
const {getOutlets,newOutlet,deletOutlet,getOutletsID} = require('../controllers/outletController')

router.get('/', getOutlets )

router.post('/', newOutlet )

router.delete('/:id', deletOutlet )

router.get('/:id', getOutletsID )

module.exports = router