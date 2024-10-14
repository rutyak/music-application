const express = require("express");
const fetchController = require("../controller/fetchController");

const router = express.Router();

router.get("/fetch/songs", fetchController);

module.exports = router;
