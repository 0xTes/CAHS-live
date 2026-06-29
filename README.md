# CAHS – Cisse AlHaqqu Hantu Services
 
Full-stack e-commerce platform for premium Hantu (dissolvable Ruqyah papers) and Qur'an services.
 
## Tech Stack
 
- **Frontend**: React 18 + Vite + Tailwind CSS + React Router v6
- **Backend**: Node.js + Express 5 + MongoDB (Mongoose)
- **Auth**: JWT (access + refresh tokens)
- **Deployment**: Frontend → Netlify | Backend → Railway / Render
## Project Structure
 
```
cahs/
├── backend/          # Express API
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
└── frontend/         # React + Vite
    └── src/
        ├── assets/
        ├── components/
        ├── context/
        ├── hooks/
        ├── layouts/
        ├── pages/
        ├── services/
        └── utils/
