const express = require("express");
const router = express.Router();

router.get("/posts", (req, res) => {
  res.json({ message: "Posts route working!" });
});

module.exports = router;
