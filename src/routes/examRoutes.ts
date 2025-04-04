import { Router } from "express";
import { getExams } from "../controllers/examController";
import { createExam } from "../controllers/examController";

const router = Router();

// GET /exams - Implemented by Member Arcenel
router.get("/", getExams);
// POST /exams - Implemented by Member Pardillo
router.post("/", createExam);

export default router;
