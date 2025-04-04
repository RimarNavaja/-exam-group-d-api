import express from "express";
import examRoutes from "./routes/examRoutes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/exams", examRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Exam API is running");
});

export default app;
