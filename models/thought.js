const moment = require("moment");
const { Schema, model } = require("mongoose");
//const { Reaction } = require("./reaction");

const reactionSchema = new Schema({
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const thoughtSchema = new Schema({
  thoughText: {
    type: String,
    required: true,
    minlength: 1,
    maxlenght: 280,
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
  // reactions: [reactionSchema],
  // reaction: reactionSchema,
});

thoughtSchema.virtual("formatedDate").get(function () {
  return moment(this.createdAt).format("MMM Do YY");
});

thoughtSchema.set("toObject", { virtuals: true });
thoughtSchema.set("toJSON", { virtuals: true });

const Thought = model("Thought", thoughtSchema);
module.exports = Thought;
