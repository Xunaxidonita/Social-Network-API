const { Schema, model } = require("mongoose");

const reactionSchema = new Schema ({
    reactionId: {
        _id: Schema.Types.ObjectId,
        default: new.ObjectId,
    },
    reactionBody:{
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type:Date,
        default: new.Date,

    }
})

const Reaction = model("Reaction", ReactionSchema);
module.exports = Reaction;
