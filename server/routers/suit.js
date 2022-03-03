const express = require("express");
const router = express.Router();
const restrict = require("../middlewares/restrict");
const suitController = require("../controllers/suitController");

router.post("/getpoint/:gameid", restrict, suitController.getPoint);
router.post("/gamelist", suitController.createGameList);

module.exports = router;
