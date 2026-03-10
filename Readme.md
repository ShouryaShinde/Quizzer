# 🧠 Quizzer — AI-Powered Summarizer & Quiz Generator

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-4B32C3?style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![NVIDIA AI](https://img.shields.io/badge/NVIDIA%20AI-Llama--3-76B900?style=for-the-badge&logo=nvidia&logoColor=white)
![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

Quizzer is an **AI-powered web app** that helps learners summarize educational videos and automatically generate **interactive quizzes** to test understanding — making learning more efficient and engaging.

---
# 🌍 Visit the Live Site

🚀 Experience **Quizzer** live here:

🔗 [https://quizzer-w3m3.onrender.com](https://quizzer-7t6k.onrender.com)

---

# 🚀 Features

✅ **Audio Upload & Transcription** — Upload lecture audio in **MP3 format** and automatically convert speech into text.

✅ **AI-Powered Summarization** — Extract key ideas and main concepts from lecture transcripts.

✅ **Automatic Quiz Generation** — Generate multiple-choice questions to test understanding.

✅ **Interactive Learning Experience** — Transform lecture recordings into structured study material instantly.

✅ **Modern UI** — Clean and responsive interface for smooth user interaction.

---

# 🧩 Tech Stack

| Layer | Technologies |
|------|-------------|
| **Frontend** | EJS / HTML / CSS / JavaScript / Bootstrap / TailwindCSS |
| **Backend** | Node.js / Express.js |
| **AI APIs** | NVIDIA Llama-3 API (via NVIDIA Build) / AssemblyAI |
| **Deployment** | Render |

---

## 📂 Project Structure
```
Quizzer/
│
├── public/ # Static assets (CSS, JS, images)
| ├── images/
| ├── js/
|  └── uploadHandler.js
| └── styles/
|  └── main.css
├── views/ # EJS templates (frontend)
│ ├── index.ejs
│ ├── upload.ejs
│ ├── transcribe.ejs
│ ├── quiz.ejs
│ └── partials/ # Includes Header and Footer .ejs files
├── app.js # Main server file
├── assemblyServer.js # JS to handle transcription
├── summarize.js # JS to handle creation of Summary
├── package.json
└── README.md
```
## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ShouryaShinde/Quizzer
cd Quizzer
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Set up environment variables
Create a .env file in the root directory and add the following:
```env
NVIDIA=your_nvidia_api_key
ASSEMBLY_API_KEY=your_assemblyai_api_key
PORT=your_port_number
```
### 4️⃣ Run the app
```bash
npm start
```
Then open your browser and visit → <http://localhost:5173/>

---


---

# 🧠 How It Works

### 1️⃣ Upload Lecture Audio 🎧

Users upload lecture recordings in **MP3 format** through the upload interface.

---

### 2️⃣ Speech-to-Text Transcription ✍️

The backend uses **AssemblyAI** to convert lecture audio into accurate text transcripts.

---

### 3️⃣ AI Summarization 🪄

The transcript is processed using **NVIDIA Llama-3 API** to generate concise summaries.

---

### 4️⃣ Quiz Generation 📝

Based on the summarized content, the AI generates **multiple-choice quiz questions** to reinforce learning.

---

# ⚡ Hackathon Details

This project was built during the **12-hour VORTEXA Hackathon** held on **24 September**.

### 🧩 Problem Statement

> "Build a web application that automatically transcribes lectures, summarizes educational content, and generates quizzes to enhance learning."

Quizzer solves this problem by converting lecture audio into structured learning material using AI.

---

# 🌐 Deployment

The application is deployed using **Render**.

If you push new commits to the repository, you can:

• Enable **automatic deploys**  
or  
• Trigger **manual redeploy** from the Render dashboard.

Live site:

🔗 [https://quizzer-w3m3.onrender.com](https://quizzer-7t6k.onrender.com)

---

# 🧑‍💻 Contributors

| Name | Role |
|----|----|
| Shourya Shinde | Full Stack Developer |
| Ranjit Bhogil | Full Stack Developer |
| Raj Bhokare | Front-End Developer |
| Vedant Toke | Front-End Developer |
| **Team Spectre** | Concept, Design & Development |

---

# 🛡️ License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute it for educational or personal purposes.

---

# ⭐ Show Your Support

If you found **Quizzer** helpful:

⭐ Star the repository  
📢 Share it with others

> *Transform learning through AI — one quiz at a time.* 🧩
