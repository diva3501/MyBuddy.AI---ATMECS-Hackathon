// Importing required modules
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// Create an instance of Express
const app = express();
const PORT = 5000;

// Middleware to enable CORS
app.use(cors());
app.use(express.json());

// Sample endpoint to handle product recommendations
app.get('/recommendations', async (req, res) => {
  const query = req.query.q; // Get the search query from the request
  if (!query) {
    return res.status(400).json({ error: 'Query parameter "q" is required.' });
  }

  try {
    // In a real scenario, you would call an API or implement scraping logic here
    // For demonstration, we will return mock recommendations
    const recommendations = [
      `Product related to ${query}`,
      `Another item related to ${query}`,
      `More products for ${query}`,
    ];

    // Respond with the mock recommendations
    res.json(recommendations);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'An error occurred while fetching recommendations.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
