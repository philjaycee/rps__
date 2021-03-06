const express = require("express");
const router = express.Router();
const restrict = require("../middlewares/restrict");
const userController = require("../controllers/userController");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/profile", restrict, userController.readProfile);
router.put("/profile", restrict, userController.updateProfile);
router.get("/score", restrict, userController.readScore);
router.get("/isplayed", restrict, userController.isplayed);

module.exports = router;
