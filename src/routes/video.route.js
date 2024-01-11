const router = require("express").Router();
const {
  uploadVideo,
  deleteVideo,
  getVideos,
  getMyVideos,
  getSomeoneVideos
} = require("../controllers/video.controller");

const { checkAuth, checkAdmin } = require("../middleware/auth");

router.get("/", checkAuth, getVideos); //checked
router.get("/:userId", checkAuth, getSomeoneVideos); //checked
router.get("/me", checkAuth, getMyVideos); //checked
router.post("/", checkAuth, uploadVideo); //checked
router.delete("/:videoId", checkAuth, deleteVideo); //checked

module.exports = router;
