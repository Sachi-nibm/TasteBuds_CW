const express = require('express')
const router = express.Router()
const {registerUser, viewUser, oneUser, deleteUser} = require('../controllers/userController')

router.post('/', registerUser)

router.get('/', viewUser)

router.get('/:id', oneUser)

router.delete('/:id', deleteUser)

module.exports = router