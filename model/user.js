const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    uniqe: true,
  },
  password: {
    type: String,
    required: true,
  },
  resetPasswordToken: {
    type: String,
    required: true,
  },
  resetPasswordExpires: {
    type: Date,
    required: true,
  },
});

user = mongoose.model("employee", userSchema);

module.exports = user;

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     uniqe: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
// });

// user = mongoose.model("employe", userSchema);

// module.exports = user;
