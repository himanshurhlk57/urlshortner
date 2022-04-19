const express = require("express");
const app = express();
const api = require("./api");
const path = require("path");
const shortUrl = require("./shortUrl");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/", api);

app.get("/:id", (req, res) => {
  const response = shortUrl[req.params.id];
  if (response) {
    res.redirect(response);
  } else {
    res.status(404).send("Invalid Url");
  }
});

// serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("set it to production");
  });
}

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
