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
  const fullUrl =
    req.protocol + "://" + req.get("host") + req.originalUrl + "/";
  const id = shortId.generate();
  shortUrls[id] = req.body.longUrl;
  const shortUrl = fullUrl + id;
  console.log(shortUrl);
  res.status(201).send({ shortId: shortUrl });
});

module.exports = router;
