const express = require('express')
const router = express.Router()
const {getWishlists,newWishlists,deletWishlist} = require('../controllers/WishlistController')

router.get('/:id', getWishlists )

router.post('/', newWishlists )

router.delete('/:id',  deletWishlist )

module.exports = router