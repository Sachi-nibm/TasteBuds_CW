const express = require('express')
const router = express.Router()
const {signinUser} = require('../controllers/signinController')

router.post('/', signinUser)


module.exports = router