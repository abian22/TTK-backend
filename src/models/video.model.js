const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema

const videoSchema = mongoose.Schema(
  {
    uploadedBy: {
      type: ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      require: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
