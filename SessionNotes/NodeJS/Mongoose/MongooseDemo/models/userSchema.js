const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
    gender: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

// User is the collection name inside mongooseDemo database
const User = mongoose.model("User", userSchema);
module.exports = User;
