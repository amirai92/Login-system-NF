const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  nickname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, require: true, minlength: 6 },
});

module.exports = mongoose.model("User", userSchema);
