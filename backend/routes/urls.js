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
  const url = `http://localhost:5000/api/urls/${id}`;
  shortUrls[id] = req.body.longUrl;
  res.send({ shortId: url });
});

module.exports = router;
