const express = require("express");
const app = express();
const api = require("./api");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/", api);

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
