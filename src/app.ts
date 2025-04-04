import express from "express";
import examRoutes from "./routes/examRoutes";
import examGroupRoutes from "./routes/examGroupRoutes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/exams", examRoutes);
app.use("/exam-group", examGroupRoutes); // Added exam group route

// Root route
app.get("/", (req, res) => {
  res.send("Exam API is running");
});

export default app;
