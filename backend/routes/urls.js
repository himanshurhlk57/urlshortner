const express = require("express");
const router = express.Router();
const shortId = require("short-id");
const shortUrl = require("../shortUrl");

router.get("/", (req, res) => {
  res.json({ shortUrl: shortUrl });
});

router.post("/", (req, res) => {
  const id = shortId.generate();
  shortUrl[id] = req.body.longUrl;
  res.status(201).send({ shortId: id });
});

module.exports = router;
