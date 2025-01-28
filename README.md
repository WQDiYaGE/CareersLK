# CareersLK

CareersLK is a MERN stack job portal designed to bridge the gap between job seekers and recruiters, offering a user-friendly interface and robust functionality to make job searching and hiring seamless.

---

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project
CareersLK is a comprehensive platform that simplifies the job search and recruitment process. By leveraging the power of modern web technologies, it provides users with an intuitive experience while maintaining high security and scalability.

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

- **Frontend:** React.js with Tailwind CSS for responsive design.
- **Backend:** Node.js with Express.js.
- **Database:** MongoDB Atlas for cloud database management.
- **Authentication:** JSON Web Tokens (JWT).
- **Cloud Services:** Cloudinary for image hosting.

---

## Screenshots

![Home Page](screenshots/home.png)
![Job Details](screenshots/job-details.png)
![Application Tracker](screenshots/tracker.png)

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
   MONGODB_URI=mongodb+srv://<your-connection-string>
   PORT=8000
   SECRET_KEY=<your-secret-key>
   CLOUD_NAME=<your-cloudinary-cloud-name>
   API_KEY=<your-cloudinary-api-key>
   API_SECRET=<your-cloudinary-api-secret>
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

For any queries or support, reach out to:
- **Sandaruwan Wadiyage**
- Email: [wadiygage567@gmail.com](mailto:wadiygage567@gmail.com)

---

## Live Demo

[CareersLK Live Site](https://careerslk.onrender.com)

---

## Video Walkthrough

[Watch the Video on LinkedIn]([https://linkedin.com/path-to-video](https://www.linkedin.com/posts/sandaruwan-wadiyage_mernstack-webdevelopment-jobportal-activity-7289634410503540736-GCpX?utm_source=share&utm_medium=member_desktop))
