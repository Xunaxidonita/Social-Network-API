const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trimmed: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: () => Promise.resolve(false),
      message: "Email validation failed",
    },
  },
  thoughts: [],
  friends: [],
});
user.validate().catch((error) => {
  assert.ok(error);
  assert.equal(error.errors["name"].message, "Oops!");
  assert.equal(error.errors["email"].message, "Email validation failed");
});

freindCount;

const User = model("User", UserSchema);
module.exports = User;
