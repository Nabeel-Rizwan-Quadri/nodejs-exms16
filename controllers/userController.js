const Users = require("../schema-models/userSchema");

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log("users data ==>", req.body);

  // todoList.push(data)
  try {
    // const userRef = Users(req.body);
    // console.log(userRef)
    const userRef = await Users.findOne({ email });

    const result = userRef.comparePasswords(req.body.password);
    console.log("result", result);

    if (!result) {
      return res.send({
        status: 400,
        message: "wrong email or password"
      })
    }

    const token = userRef.generateToken()

    userRef.tokens.push(token)

    console.log("newTokens", userRef.tokens)

    // const copyArray = ...


    Users.findByIdAndUpdate(userRef._id, userRef, (err, doc) => {
      if (!err) {
        console.log("doc", doc)
      }
      else {
        console.log("err", err)
      }
    })

    console.log("token ==>", token)

    // const getByEmailResponse = await Users.getByEmail(email);
    // console.log("getByEmailResponse", getByEmailResponse);
    // console.log(findOneResponse.password);

    res.send({
      status: "200",
      message: result,
      token: token
    });

  } catch (e) {
    console.log(e);
    res.send({
      status: "500",
      message: "Something went wrong",
    });
  }
};

module.exports.getuserById = (req, res) => {
  console.log("user found")
  res.send({
    status: 200,
    message: "user data"
  })

}

module.exports.SignupUser = async (req, res) => {
  //database
  const { username, email, password } = req.body;
  console.log(req.body);

  try {
    const userRef = new Users({
      username,
      email,
      password,
    });

    //

    userRef.save((err, doc) => {
      if (!err) {
        console.log(doc);
        return res.send({
          status: "200",
          message: "Document saved",
          data: doc,
        });
      } else {
        console.log(err);
        return res.send({
          status: "500",
          message: err.message,
        });
      }

    });
  } catch (e) {
    console.log(e);
    res.send({
      status: "500",
      message: "Something went wrong",
    });
  }
};
