const { Schema, model } = require("mongoose");
const { Thought } = require("./thought");

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
    match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid email: {VALUE}"],
  },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

userSchema.virtual("thoughts", {
  ref: "Thought", //The Model to use
  localField: "_id", //Find in Model, where localField
  foreignField: "username", // is equal to foreignField
});

userSchema.virtual("thoughtsCount", {
  ref: "Thought", //The Model to use
  localField: "_id", //Find in Model, where localField
  foreignField: "username", // is equal to foreignField
  count: true,
});

userSchema.virtual("friendsCount").get(function () {
  return this.friends.length;
});

userSchema.pre("remove", function (next) {
  // 'this' is the thought being removed. Provide callbacks here if you want
  // to be notified of the calls' result.
  Reaction.remove({ username_id: this._id }).exec();
  Thought.remove({ username_id: this._id }).exec();
  next();
});

// Set Object and Json property to true. Default is set to false
userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

const User = model("User", userSchema);

module.exports = User;
