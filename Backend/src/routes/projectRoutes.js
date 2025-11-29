const express = require("express");
const { 
  createProject, 
  getProjects, 
  updateProject, 
  addFollowUpNote,
  convertLeadToProject,
  getDashboard
} = require("../controllers/projectController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.use(authMiddleware);

router.post("/", createProject);
router.get("/", getProjects);
router.get("/dashboard", getDashboard);
router.put("/:id", updateProject);
router.post("/:id/notes", addFollowUpNote);
router.post("/convert/:leadId", convertLeadToProject);

module.exports = router;

