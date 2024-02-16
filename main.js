const express = require('express');
const path = require('path'); // Require the path module
const app = express();
const port = 3000;

// Serve your static files (e.g., HTML, CSS, JS) from the 'public' directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  // Use res.sendFile to send the HTML file
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
