# 🌙 Lumi - AI Companion

Lumi is a warm AI companion built using **React**, **FastAPI**, and **Google Gemini API**. Instead of being just another chatbot, Lumi focuses on creating natural, friendly, and emotionally intelligent conversations.

---

## ✨ Features

- 🤖 AI-powered conversations using Gemini 2.5 Flash
- 💜 Custom Lumi personality with prompt engineering
- 💬 Real-time chat interface
- 🌙 Typing indicator
- 📜 Markdown support for AI responses
- 💾 Persistent chat history using Local Storage
- 🗑️ Clear chat functionality
- 📱 Responsive and modern UI
- ⚡ FastAPI backend with secure API integration

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS
- JavaScript

### Backend
- FastAPI
- Python
- Google Gemini API
- Python Dotenv

---

## 📂 Project Structure

```
lumi-ai-companion/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── main.py
│   ├── prompts.py
│   ├── .env
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/lumi-ai-companion.git
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_API_KEY
```

---

## 🧠 How Lumi Works

```
User
   │
   ▼
React Frontend
   │
   ▼
FastAPI Backend
   │
   ▼
Google Gemini API
   │
   ▼
Lumi Response
```

---

## 🌙 Lumi's Personality

Lumi is designed to feel like a genuine companion.

She is:

- 💜 Kind
- 🌙 Warm
- 😂 Slightly chaotic
- 🤍 Honest
- 🧠 Emotionally intelligent

Lumi avoids sounding robotic and aims to make users feel heard while keeping conversations natural.

---

## 📸 Screenshots

### Landing Page

![alt text](image.png)

### Chat Interface

![alt text](image-1.png)

---

## 🚀 Future Improvements

- Voice conversations
- Image understanding
- File upload support
- Conversation memory
- Multi-chat support

---

## 👩‍💻 Author

**Sohika Sharma**

Computer Science Student | AI & Full Stack Enthusiast

---

## ⭐ If you like this project

Please consider giving it a ⭐ on GitHub!

![React](https://img.shields.io/badge/React-19-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![Gemini](https://img.shields.io/badge/Google-Gemini-orange)
![License](https://img.shields.io/badge/License-MIT-purple)