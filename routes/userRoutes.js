const express = require("express");
const router = express.Router();
const { signUp } = require("../controllers/signUp");
const User = require("../models/User");

// POST /api/users - Create user
router.post("/", signUp);

module.exports = router;
