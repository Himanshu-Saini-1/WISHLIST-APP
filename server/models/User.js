const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String, // mock usage otherwise hash
});
module.exports = mongoose.model("User", UserSchema);
