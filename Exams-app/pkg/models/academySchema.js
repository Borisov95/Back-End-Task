const mongoose = require("mongoose");

const academySchema = new mongoose.Schema({
  name: String,
  address: String,
});

module.exports = mongoose.model("Academy", academySchema);
