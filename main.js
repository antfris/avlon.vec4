const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;


let prompt = "Write a story about a cat and a dog who are best friends.";

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/prompt', (req, res) => {
    res.json({prompt: prompt});
});

// Handle form submission to '/prompt' endpoint
app.post('/prompt', (req, res) => {
  const userPrompt = req.body.prompt; // Access the submitted prompt
  console.log(`Received prompt: ${userPrompt}`);
  prompt = userPrompt;
  // Process the prompt as needed
  res.send(`Submitted prompt: ${userPrompt}`); // Send a response back to the client
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
