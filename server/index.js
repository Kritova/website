const express = require('express');
const cors = require('cors');
require('dotenv').config();

const helloRoute = require('./routes/controllers/helloController'); // Import route

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Use the route
app.use('/api', helloRoute);

// Base route
app.get('/', (req, res) => {
  res.send('Kritova Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

