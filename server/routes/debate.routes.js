"use strict";

const { Router } = require("express");
const { createDebate } = require("../controllers/debate.controller");

const router = Router();

router.post("/debate", createDebate);

module.exports = router;
