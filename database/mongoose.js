const mongoose = require("mongoose");

exports.connection = mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    err ? console.log(err) : console.log("Mongoose conectado!");
  }
);
