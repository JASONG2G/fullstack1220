const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send("hello from routes folder");
});

module.exports = router; // expose router
