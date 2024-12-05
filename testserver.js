const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Hardcoded credentials
const USERNAME = "admin";
const PASSWORD = "password123";

// User details (mocked)
const userDetails = {
    username: "admin",
    fullName: "John Doe",
    email: "admin@example.com",
    role: "Administrator"
};

// API Endpoints

// Root endpoint
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Login API" });
});

// Login endpoint
app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    // Check hardcoded credentials
    if (username === USERNAME && password === PASSWORD) {
        return res.json({
            success: true,
            message: "Login successful",
            token: "fake-jwt-token",
            user: userDetails // Include user details in response
        });
    } else {
        return res.status(401).json({ success: false, message: "Invalid username or password" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
