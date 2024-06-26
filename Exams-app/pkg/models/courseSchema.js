const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: String,
  address: String,
  area: String,
});

module.exports = mongoose.model("Course", courseSchema);
