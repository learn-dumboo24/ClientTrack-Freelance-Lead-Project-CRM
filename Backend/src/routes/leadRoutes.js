const express = require("express");
const { createLead, getLeads, deleteLead } = require("../controllers/leadController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.post("/", createLead);
router.get("/", getLeads);
router.delete("/:id", deleteLead);

module.exports = router;

