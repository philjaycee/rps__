const express = require("express");
const router = express.Router();
const restrict = require("../middlewares/restrict");
const suitController = require("../controllers/suitController");

router.post("/score/:gameid", restrict, suitController.createPoint);
router.get("/score", restrict, suitController.readPoint);
router.post("/gamelist", suitController.createGameList);

module.exports = router;
