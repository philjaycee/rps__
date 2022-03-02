const express = require("express");
const router = express.Router();
const user = require("./user");
const suit = require("./suit");

router.use('/api/user', user);
router.use('/api/suit', suit);

module.exports = router;
