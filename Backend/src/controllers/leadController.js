const Lead = require("../models/Lead");

exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create({
      ...req.body,
      freelancerId: req.user.id
    });
    res.json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find({ freelancerId: req.user.id }).sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    const lead = await Lead.findOneAndDelete({ 
      _id: req.params.id, 
      freelancerId: req.user.id 
    });
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json({ message: "Lead deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

