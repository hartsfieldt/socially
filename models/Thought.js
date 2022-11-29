const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema({});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) =>
      DateTime.fromJSDate(createdAtVal).toLocaleString(DateTime.DATETIME_MED),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],
});
