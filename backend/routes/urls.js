const express = require("express");
const router = express.Router();
const shortId = require("short-id");

const shortUrls = {};

router.get("/", (req, res) => {
  res.send(shortUrls);
});

router.get("/:id", (req, res) => {
  res.redirect(shortUrls[req.params.id]);
});

router.post("/", (req, res) => {
  const id = shortId.generate();
  shortUrls[id] = req.body.longUrl;
  res.status(201).send({ shortId: id });
});

module.exports = router;
