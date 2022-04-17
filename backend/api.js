const express = require("express");
const router = express.Router();

const urls = require("./routes/urls");

router.use("/urls", urls);

module.exports = router;
