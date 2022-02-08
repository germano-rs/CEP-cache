const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DataSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  userPassword: { type: String, required: true },
});

DataSchema.pre("save", function (next) {
  this.userPassword = bcrypt.hashSync(this.userPassword, 10);
  next();
});

const Users = mongoose.model("Users", DataSchema);
module.exports = Users;
