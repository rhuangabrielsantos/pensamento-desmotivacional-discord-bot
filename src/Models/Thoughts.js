const { Schema, model } = require("mongoose");

const ThoughtsSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Thoughts", ThoughtsSchema);
