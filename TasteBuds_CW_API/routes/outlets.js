const express = require('express')
const router = express.Router()
const {getOutlets,newOutlet,deletOutlet} = require('../controllers/outletController')

router.get('/', getOutlets )

router.post('/', newOutlet )

router.delete('/:id', deletOutlet )



module.exports = router