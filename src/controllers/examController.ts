import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Exam } from "../entity/Exam";

const examRepository = AppDataSource.getRepository(Exam);
// Implemented by Member Pardillo
export const createExam = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { title, description, durationMinutes } = req.body;

    // Input validation
    if (!title || !description) {
      res.status(400).json({ message: "Title and description are required" });
      return;
    }

    const exam = new Exam();
    exam.title = title;
    exam.description = description;
    exam.durationMinutes = durationMinutes || 60;

    await examRepository.save(exam);
    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ message: "Error creating exam", error });
  }
};

// Implemented by Member Arcenel
export const getExams = async (req: Request, res: Response): Promise<void> => {
  try {
    // Hardcoded list of exams for initial implementation
    const exams = [
      {
        id: 1,
        title: "Mathematics",
        description: "Algebra and Calculus",
        durationMinutes: 90,
      },
      {
        id: 2,
        title: "Physics",
        description: "Mechanics and Electromagnetism",
        durationMinutes: 120,
      },
      {
        id: 3,
        title: "Computer Science",
        description: "Algorithms and Data Structures",
        durationMinutes: 60,
      },
    ];

    res.status(200).json(exams);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exams", error });
  }
};

// Implemented by Member Labe
export const updateExam = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, durationMinutes } = req.body;

    // Input validation
    if (!title && !description && !durationMinutes) {
      res
        .status(400)
        .json({ message: "At least one field to update is required" });
      return;
    }

    // In a real implementation, find and update in database
    // const exam = await examRepository.findOneBy({ id });
    // if (!exam) {
    //   res.status(404).json({ message: "Exam not found" });
    //   return;
    // }

    // Update mock exam
    const exam = {
      id,
      title: title || "Updated Exam",
      description: description || "Updated Description",
      durationMinutes: durationMinutes || 60,
    };

    res.status(200).json(exam);
  } catch (error) {
    res.status(500).json({ message: "Error updating exam", error });
  }
};
