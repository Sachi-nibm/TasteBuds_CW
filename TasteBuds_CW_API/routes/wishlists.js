const express = require('express')
const router = express.Router()
const {getWishlists,newWishlists,deletWishlist} = require('../controllers/WishistController.js')

router.get('/:id', getWishlists )

router.post('/', newWishlists )

router.get('/:id',  deleteWishlist )

module.exports = router