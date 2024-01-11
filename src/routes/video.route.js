const router = require("express").Router();
const {
  uploadMyVideo,
  deleteMyVideo,
  getVideos,
  getMyVideos,
  getSomeoneVideos,
  deleteVideo,
  uploadVideo
} = require("../controllers/video.controller");

const { checkAuth, checkAdmin } = require("../middleware/auth");

router.get("/", checkAuth, getVideos); //checked
router.get("/:userId", checkAuth, getSomeoneVideos); //checked
router.get("/me", checkAuth, getMyVideos); //checked
router.post("/", checkAuth, uploadMyVideo); //checked
router.post("/:userId", checkAuth, checkAdmin, uploadVideo) //checked
router.delete("/me/:videoId", checkAuth, deleteMyVideo); //checked
router.delete("/:videoId", checkAuth, checkAdmin, deleteVideo); //checked


module.exports = router;
