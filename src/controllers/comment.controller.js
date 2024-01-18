const User = require("../models/user.model");
const Video = require("../models/video.model");
const Comment = require("../models/comment.model");

async function getComments(req, res) {
  try {
    const comments = await Comment.find();
    if (!comments) {
      return res.status(404).send("No comments found");
    } else {
      return res.status(200).json(comments);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getCommentsOfVideo(req, res) {
  try {
    const video = await Video.findById(req.params.videoId);
    if (!video) {
      return res.status(404).send("No comments of video found");
    } else {
      return res.status(200).json(video.comments);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function postMyComment(req, res) {
  try {
    const user = await User.findById(res.locals.user.id);
    const video = await Video.findById(req.params.videoId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    if (!video) {
      return res.status(404).json({ message: "Video not found." });
    }

    const newComment = await Comment.create({
      text: req.body.text,
      commentedVideo: video._id,
      commentedBy: user._id,
    });

    const savedComment = await newComment.save();
    video.comments.push({
      commentId: savedComment._id,
      text: savedComment.text,
    });
    await video.save();
    console.log("Comment saved", savedComment);
    res
      .status(201)
      .json({ message: "Comment uploaded", comment: savedComment });
  } catch (error) {
    console.error("Error saving the comment:", error);
    return res.status(500).json({
      error: "Error saving the comment",
      details: error.message,
    });
  }
}

async function deleteMyComment(req, res) {
    try {
      const user = await User.findById(res.locals.user.id);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const commentIdToDelete = req.params.commentId;
      const commentToDelete = await Comment.findOne({ _id: commentIdToDelete, user: user._id });
  
      if (!commentToDelete) {
        return res.status(404).json({ message: "Comment not found or does not belong to the user" });
      }
  
      await Comment.deleteOne({ _id: commentIdToDelete });
  
      return res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      return res.status(500).json({
        error: "Error deleting the comment",
        details: error.message,
      });
    }
  }
module.exports = {
  postMyComment,
  getComments,
  getCommentsOfVideo,
  deleteMyComment,
};
