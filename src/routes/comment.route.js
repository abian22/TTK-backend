const router = require("express").Router();
const {
  postMyComment,
  getComments,
  getCommentsOfVideo,
  deleteMyComment
} = require("../controllers/comment.controller");

const { checkAuth, checkAdmin } = require("../middleware/auth");

router.get("/", checkAuth, checkAdmin, getComments);
router.get("/:videoId", checkAuth, getCommentsOfVideo);
router.post("/:videoId", checkAuth, postMyComment);
router.delete("/:videoId/:commentId", checkAuth, deleteMyComment)

module.exports = router;
