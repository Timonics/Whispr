# Whispr

Whispr is a modern messaging application designed for secure, fast, and user-friendly communication. This project is organized into two main folders:

## Project Structure

```
Whispr/
├── whisprBackend/
└── whispr-frontend/
```

### 1. Whispr Backend

Contains the server-side code, including API endpoints, authentication, database models, and business logic.

- **Technologies:** Node.js, Express, MongoDB
- **Features:**
  - User authentication (sign up, login)
  - Real-time messaging (WebSocket support)
  - Message storage and retrieval
  - User management

### 2. Whispr Frontend

Contains the client-side code for the Whispr web application.

- **Technologies:** React, TailwindCSS, WebSocket client
- **Features:**
  - Responsive chat interface
  - User registration and login forms
  - Real-time message updates
  - Contact list and chat history

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/Whispr.git
   cd Whispr
   ```

2. **Install backend dependencies:**

   ```bash
   cd whisprBackend
   npm install
   ```

3. **Create your .env file:**
   ```bash
   PORT = your port
   NODE_ENV = development
   DB_URI = your mongodb uri
   API_URL = /api/v1/
   JWT_SECRET_KEY = your jwt secret key
   ```

4. **Install frontend dependencies:**
     ```bash
     cd ../whispr-frontend
     npm install
     ```

### Running the App

1. **Start the backend server:**
     ```bash
     cd whisprBackend
     npm run dev
     ```

2. **Start the frontend development server:**
     ```bash
     cd ../whispr-frontend
     npm run dev
     ```

3. **Access the app:**
     Open your browser and go to `http://localhost:5173`

## Contributing

Pull requests are welcome!

## License

This project is licensed under the MIT License.

---
````
