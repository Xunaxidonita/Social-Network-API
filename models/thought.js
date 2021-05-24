const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughText: {
    type: String,
    required: true,
    length,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    timestamps: true,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reactions: [],
});

reactionCount;

const Thought = model("Thought", ThoughtSchema);
module.exports = Thought;
