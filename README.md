@index - Skill-Based Job Matching Platform
@index is a full-stack web application designed to transform the job search process by moving beyond simple keyword matching. It connects users to a dynamic database of over 500+ roles through intelligent, real-time, skill-based filtering.

The Problem
Traditional job platforms often rely on rigid job titles and keyword searches, leading to a frustrating experience where qualified candidates miss relevant opportunities and recruiters are flooded with mismatched applicants. The goal of @index is to solve this by focusing on the most important factor: the candidate's actual skills.

Key Features
Real-Time Skill Filtering: Instantly filters and displays jobs that match a user's specific skill set, powered by the Adzuna API for live, relevant listings.

Scalable MERN Stack Architecture: Built with a robust and high-performance backend using Node.js, Express, and MongoDB to ensure a responsive and reliable user experience.

Dynamic Frontend: A clean, intuitive, and responsive user interface built with React.js for a seamless job discovery process.

Future-Proofed for AI: The backend has been architected to support future integration with NLP/LLM models, enabling even smarter, context-aware job recommendations.

Tech Stack & Architecture
This project was built using the MERN stack, chosen specifically for its performance, scalability, and flexibility in handling diverse data structures.

Category

Technology

Frontend

React.js, JavaScript (ES6+), HTML5, CSS3

Backend

Node.js, Express.js

Database

MongoDB

API

Adzuna API (for real-time job data)

Deployment

Vercel (Frontend), Render (Backend)

My Strategic Decisions:
Why MERN Stack? I chose the MERN stack because MongoDB's document-based, flexible schema is perfectly suited for a job platform where skill requirements and job descriptions can vary widely. Node.js and Express provide a high-performance, non-blocking backend ideal for handling numerous API requests efficiently.

Why Separate Deployments? Deploying the React frontend to Vercel and the Node.js backend to Render allowed for independent, scalable, and optimized hosting environments, following modern microservice best practices.

🚀 How To Run Locally
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js and npm installed

A MongoDB Atlas cluster or local MongoDB instance

An API key from Adzuna

Installation
Clone the repo

git clone [https://github.com/your_username/@index.git](https://github.com/your_username/@index.git)

Install NPM packages for both the client and server

# In the root directory
cd server && npm install

# In a separate terminal, from the root directory
cd client && npm install

Create a .env file in the server directory and add your variables

MONGO_URI='your_mongodb_connection_string'
ADZUNA_APP_ID='your_adzuna_app_id'
ADZUNA_API_KEY='your_adzuna_api_key'

Start the development servers

# To run the backend server
cd server && npm run dev

# To run the React frontend
cd client && npm start

🧠 Future Enhancements
The next planned iteration for @index is to integrate a fine-tuned NLP/LLM to move beyond simple skill tagging. This will enable the platform to:

Parse resumes to automatically extract a user's skills.

Understand the nuanced context of job descriptions for more accurate matching.

Recommend up-skilling pathways for users to qualify for their desired roles.
