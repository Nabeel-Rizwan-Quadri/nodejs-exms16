const express = require('express')
const router = express.Router()

const { loginUser, SignupUser, getuserById } = require('../controllers/userController')
const verifyToken = require("../middleware/verifyToken")

// router.get('/get', (req, res)=>{
//   res.send({
//     statusCode: "200",
//     message: "api is working"    
//   })
// })

router.post('/login', loginUser)
router.post('/signup', SignupUser)
router.get('/userById', verifyToken, getuserById)

module.exports = router