const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const commentSchema = require("./comment.model");

const videoSchema = mongoose.Schema(
  {
    uploadedBy: {
      type: ObjectId,
      ref: "User",
    },
    description: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    filePath: {
      type: String, 
    },
    comments: [
      {
        _id: false,//not sure about this
        commentId: {
          type: ObjectId,
          ref: "Comment",
        },
        text: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
