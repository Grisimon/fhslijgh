const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Path to the JSON file for storing data
const dataFilePath = path.join(__dirname, 'data.json');

// Helper function to read data from the file
const readData = () => {
    if (fs.existsSync(dataFilePath)) {
        const fileContent = fs.readFileSync(dataFilePath);
        return JSON.parse(fileContent);
    }
    return { message: "Default message" };
};

// Helper function to write data to the file
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 4));
};

// API endpoint to get the current data
app.get('/functions/data', (req, res) => {
    const data = readData();
    res.json(data);
});

// API endpoint to update the data
app.post('/functions/data', (req, res) => {
    const newData = req.body; // Expecting JSON payload like { "message": "New message" }
    if (!newData.message) {
        return res.status(400).json({ error: 'Missing "message" field in request body.' });
    }

    // Update the data in the file
    writeData(newData);
    res.json({ success: true, updatedData: newData });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
