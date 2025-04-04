import { Router } from "express";

const router = Router();

// GET /exam-group - Placeholder route
router.get("/", (req, res) => {
  res.json({
    message: "Group-D",
    members: ["Arcenel", "Pardillo", "Labe"],
  });
});

export default router;
