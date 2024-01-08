const router = require("express").Router();
const { createUser, getAllUsers } = require("../controllers/user.controller");

const { checkAuth, checkAdmin } = require("../middleware/auth");

const { login, signUp } = require("../controllers/auth.controller");

router.get("/", getAllUsers);
router.post("/", checkAuth, checkAdmin, createUser);
router.post("/signUp", signUp);
router.post("/login", login);

module.exports = router;
