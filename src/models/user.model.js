const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    allowNull: true,
    default: "user",
  },
  followers: {
    type: Number,
    allowNull: false,
    default: 0,
  },
  following: {
    type: Number,
    allowNull: false,
    default: 0,
  },
  live: {
    type: Boolean,
    allowNull: false,
    default: false,
  },
  videosUploaded: {
    type: Number,
    allowNull: false,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
