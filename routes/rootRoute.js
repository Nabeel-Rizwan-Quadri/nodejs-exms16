const express = require('express')
const router = express.Router()

router.use('/todo', require('./todoRoutes'))
router.use('/user', require('./userRoutes'))

module.exports = router
