const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
    },
    team: {
      type: String,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = model("Player", playerSchema);
