const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy endpoint for sending messages
app.post('/api/send-message', (req, res) => {
  const userMessage = req.body.message;

  // Dummy response logic
  let botReply = "I'm a bot, and I received your message!";
  if (userMessage.toLowerCase().includes('hello')) {
    botReply = "Hello! How can I assist you today?";
  } else if (userMessage.toLowerCase().includes('name')) {
    botReply = "I'm a friendly chatbot!";
  }

  // Send the bot's reply
  res.json({ reply: botReply });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
