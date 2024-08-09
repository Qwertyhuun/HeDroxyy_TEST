const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Route to handle POST requests to /response
app.post('/response', (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'No message provided' });
  }

  let response;
  switch (message.trim().toLowerCase()) {
    case 'hey':
      response = 'Hey there';
      break;
    case 'how are yuh':
      response = "I'm fine";
      break;
    default:
      response = 'Error occurred';
      break;
  }

  res.json({ response });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
