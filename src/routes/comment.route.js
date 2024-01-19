const router = require("express").Router()
const {
  postMyComment,
  getComments,
  getCommentsOfVideo,
  deleteMyComment,
  deleteComment
} = require("../controllers/comment.controller")

const { checkAuth, checkAdmin } = require("../middleware/auth")

router.get("/", checkAuth, checkAdmin, getComments) //checked
router.get("/:videoId", checkAuth, getCommentsOfVideo) //checked
router.post("/:videoId", checkAuth, postMyComment) //checked
router.delete("/:commentId", checkAuth, checkAdmin, deleteComment) //checked
router.delete("/:videoId/:commentId", checkAuth, deleteMyComment) //checked

module.exports = router
