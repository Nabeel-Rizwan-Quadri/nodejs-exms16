const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
var jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: {
    type: Array
  }
});

userSchema.pre("save", function () {
  const user = this;
  console.log(this);

  const salt = bcryptjs.genSaltSync(10);
  const hash = bcryptjs.hashSync(user.password, salt);

  user.password = hash;

  console.log("after encryption", this.password);
});

userSchema.methods.comparePasswords = function (frontendPassword) {
  const user = this;
  //Backend password user.password

  return bcryptjs.compareSync(frontendPassword, user.password);
};

userSchema.methods.generateToken = function () {
  const user = this
  const { _id } = user

  var token = jwt.sign({ _id }, process.env.JWT_SECRET)



  return token
}

const Users = mongoose.model("users", userSchema);

module.exports = Users;
