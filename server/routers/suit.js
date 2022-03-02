const express = require("express");
const router = express.Router();
const restrict = require("../middlewares/restrict");
const suitController = require("../controllers/suitController");

router.post("/getpoint", restrict, suitController.getPoint);

module.exports = router;
