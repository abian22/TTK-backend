const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const commentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    responses: {
        type: Number,
        default:0
    }, //Not sure about responses field
    likes: {
      tpye: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Comment", commentSchema);
