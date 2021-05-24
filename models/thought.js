const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema ({

    thoughText: {
        type: String,
        required
        length
    },
    createdAt: {
        type: Date,
        default
        getter method 
    },
    username: {
        type: String,
        required
    },
    reactions: []
})

reactionCount

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;
