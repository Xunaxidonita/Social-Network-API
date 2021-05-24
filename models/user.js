const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    requiered 
    unique 
    trimmed
  },
  email: {
    type: String,
    required 
    unique
    match 
  },
  thoughts: [],s
  friends: [],
});

freindCount

const User = model('User', UserSchema);
module.exports = User;