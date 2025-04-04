import { Router } from "express";
import { getExams } from "../controllers/examController";
import { createExam } from "../controllers/examController";
import { updateExam } from "../controllers/examController";

const router = Router();

// GET /exams - Implemented by Member Arcenel
router.get("/", getExams);
// POST /exams - Implemented by Member Pardillo
router.post("/", createExam);
// PUT /exams/:id - Implemented by Member Labe
router.put("/:id", updateExam);

export default router;
