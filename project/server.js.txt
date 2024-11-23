const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Registration endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Basic validation
    if (!username || !password) {
        return res.json({ success: false, message: 'Username and password are required.' });
    }

    // Here you would typically hash the password and save the user to a database
    // For demonstration, we will just log the user data
    console.log(`Username: ${username}, Password: ${password}`);

    // Simulate successful registration
    res.json({ success: true, message: 'Registration successful!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});