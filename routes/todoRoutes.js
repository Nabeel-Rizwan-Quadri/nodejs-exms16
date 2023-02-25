const express = require('express')
const router = express.Router()

const { createTodo, readTodo, searchTodo } = require('../controllers/todoController.js')

router.post('/create', createTodo)
router.get('/read', readTodo)
router.get('/search/:id', searchTodo)

// router.get('/get', (req, res) => {
//   res.send({
//     status: 200,
//     message: "get api working"
//   })
// })

module.exports = router