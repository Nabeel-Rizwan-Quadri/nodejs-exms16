const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  status: Boolean,
})

const Todos = mongoose.model('Todos', TodoSchema)

module.exports = Todos