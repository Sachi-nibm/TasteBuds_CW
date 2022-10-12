const express = require('express')
const router = express.Router()
const {getWishlists,newWishlists,deletWishlist} = require('../controllers/WishlistController')

router.get('/:id', getWishlists )

router.post('/', newWishlists )

router.get('/:id',  deletWishlist )

module.exports = router