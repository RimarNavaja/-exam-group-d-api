import { Router } from "express";
import { getExams } from "../controllers/examController";

const router = Router();

// GET /exams - Implemented by Member Arcenel
router.get("/", getExams);

export default router;
