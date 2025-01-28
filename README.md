# CareersLK

CareersLK is a MERN stack job portal designed to bridge the gap between job seekers and recruiters, offering a user-friendly interface and robust functionality to make job searching and hiring seamless.

---

## Features

### For Job Seekers:
- Browse job listings by category, location, or skills.
- Apply for jobs directly through the platform.
- Track application history.

### For Recruiters:
- Post job openings with detailed descriptions.
- Manage applications and track potential candidates.

### General Features:
- Secure authentication using JWT.
- Intuitive and responsive design for a seamless user experience.
- MongoDB for efficient and scalable data management.

---

## Tech Stack

- Frontend: React.js with Tailwind CSS for responsive design.
- Backend: Node.js with Express.js.
- Database: MongoDB Atlas for cloud database management.
- Authentication: JSON Web Tokens (JWT).
- Cloud Services: Cloudinary for image hosting.

---

## Installation

### Prerequisites:
- Node.js and npm installed on your system.
- MongoDB connection string.
- Cloudinary API credentials.

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/WQDiYaGE/CareersLK.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CareersLK
   ```

3. Install dependencies for the frontend and backend:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Create a `.env` file in the `server` directory and add the following:
   ```env
   MONGODB_URI=mongodb+srv://wadiyage567:AEPfa7ckBb06lP0C@carrierscluster.u2xse.mongodb.net/carriers
   PORT=8000
   SECRET_KEY=g53J@H7lMz$10a8Pq3eXt@24X#!wGp!5Q6Sjn!L^X0uAv5qZm&s*
   CLOUD_NAME=dpk4bzmue
   API_KEY=294286878529432
   API_SECRET=TpFqmJ4a1Juf2cpGtblhDY-hM18
   ```

5. Start the development servers:
   ```bash
   # Frontend
   cd client
   npm run dev

   # Backend
   cd ../server
   npm run dev
   ```

---

## Deployment

### Steps:
1. Host the backend on platforms like Render, Heroku, or AWS.
2. Deploy the frontend on Vercel, Netlify, or similar hosting services.
3. Update environment variables for production.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and create a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any queries or support, reach out to Sandaruwan Wadiyage. (mailto:wadiygage567@gmail.com).
