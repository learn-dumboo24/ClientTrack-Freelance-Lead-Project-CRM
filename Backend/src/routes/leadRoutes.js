const express = require("express");
const { createLead, getLeads, updateLead, deleteLead } = require("../controllers/leadController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createLead);
router.get("/", authMiddleware, getLeads);
router.put("/:id", authMiddleware, updateLead);
router.delete("/:id", authMiddleware, deleteLead);

module.exports = router;
