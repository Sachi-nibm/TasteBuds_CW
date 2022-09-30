const express = require('express')
const router = express.Router()
const {getOutlets,getOutletsID,newOutlet,deletOutlet} = require('../controllers/outletController')

router.get('/', getOutlets )

router.get('/:id', getOutletsID )

router.post('/', newOutlet )

router.delete('/:id', deletOutlet )



module.exports = router