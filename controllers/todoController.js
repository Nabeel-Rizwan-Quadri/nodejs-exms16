const Todos = require('../schema-models/todoSchema')

let todoList = [{
  text: "1",
  _id: "1"
},
{
  text: "2",
  _id: "4"
}]

module.exports.createTodo = (req, res) => {
  const data = req.body
  console.log('create data ==>', data)
  // todoList.push(data)
  try {
    const todo_body = new Todos(req.body)
    todo_body.save((err, doc) => {
      if (!err) {
        console.log(doc)
        return res.send({
          status: "200",
          message: "Document saved",
          data: doc
        })
      }
    })
    // res.send({
    //   status: "200",
    //   message: "Document saved"
    // })
  }
  catch (e) {
    console.log(e)
    res.send({
      status: "500",
      message: "Something went wrong",
    })

  }
}

module.exports.readTodo = async (req, res) => {
  //database
  try {
    const result = await Todos.find({})

    console.log("todo read: ", result)
    res.send({
      status: "200",
      message: "Success",
      data: result
    })
  }
  catch (e) {
    console.log(e)
    res.send({
      status: "500",
      message: "Something went wrong",
    })

  }
}

module.exports.searchTodo = (req, res) => {
  const id = req.params.id
  console.log(id)
  
  res.send({
    status: "200",
    message: id
  })
  //database
  // try {
    
  //   const result = await Todos.find({})

  //   console.log("todo read: ", result)
  //   res.send({
  //     status: "200",
  //     message: "Success",
  //     data: result
  //   })
  // }
  // catch (e) {
  //   console.log(e)
  //   res.send({
  //     status: "500",
  //     message: "Something went wrong",
  //   })

  // }
}
