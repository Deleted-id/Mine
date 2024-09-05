const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Handle proposal response
app.post('/submit-response', (req, res) => {
    const { answer } = req.body;
    console.log('Received answer:', answer); // Log the received answer

    if (!answer) {
        return res.status(400).json({ message: 'No answer received.' });
    }

    let message;
    if (answer.toLowerCase() === 'yes') {
        message = "Yay! stay with me..! 💍💖";
    } else if (answer.toLowerCase() === 'no') {
        message = "Oh no, maybe next time 😢";
    } else {
        message = "Answer Please....";
    }

    console.log('Sending response:', message); // Log the response message
    res.json({ message });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
