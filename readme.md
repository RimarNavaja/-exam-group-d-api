Member Arcenal: Add GET /exams endpoint (returns a hardcoded list of users).
Member Pardillo: Add POST /exams endpoint (adds a new exam to an array).
Member : Add Update /exams:id (e.g., update an exam).

API Documentation

1. GET /exams

- Method: `GET`
- URL: `http://localhost:3000/exams`

Request Body:
{
"title": "History",
"description": "World History Exam",
"durationMinutes": 75
}
Response:
{
"title": "History",
"description": "World History Exam",
"durationMinutes": 75,
"id": 1,
"createdAt": "2025-04-04T11:54:56.000Z"
}

2. PUT /exams/:id
   Method: PUT
   URL: http://localhost:3000/exams/1

Request Body:
{
"title": "Advanced Mathematics",
"durationMinutes": 120
}

Response:
{
"id": 1,
"title": "Advanced Mathematics",
"description": "Algebra and Calculus",
"durationMinutes": 120,
"createdAt": "2025-04-04T10:30:00Z"
}

3. Get /exams
Method: Get
   URL: http://localhost:3000/exams

Response:
[
  {
    "id": 1,
    "title": "Mathematics",
    "description": "Algebra and Calculus",
    "durationMinutes": 90
  },
  {
    "id": 2,
    "title": "Physics",
    "description": "Mechanics and Electromagnetism",
    "durationMinutes": 120
  },
  {
    "id": 3,
    "title": "Computer Science",
    "description": "Algorithms and Data Structures",
    "durationMinutes": 60
  }
]