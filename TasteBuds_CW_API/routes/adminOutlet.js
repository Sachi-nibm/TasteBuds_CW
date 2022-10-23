const express = require('express')
const router = express.Router()
const {getOutlets,newOutlet,deletOutlet,getOutletsID,updateOutlet} = require('../controllers/adminOutletController')

router.get('/', getOutlets )

router.post('/', newOutlet )

router.delete('/:id', deletOutlet )

router.get('/:id', getOutletsID )

router.put('/:id', updateOutlet )

module.exports = router