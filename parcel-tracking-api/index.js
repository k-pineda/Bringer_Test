const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRETKEY;

app.use(express.json());

app.post('/Generate_Token', (req, res) => {
  const { login, password } = req.body;
  const token = jwt.sign({ login, password }, SECRET_KEY);
  res.json({ token });
});

// Endpoint to track a parcel
app.get('/Tracking_Parcel', async (req, res) => {
  const trackingNumber = req.query.Tracking_number;

  // Make a request to the third-party API
  try {
    const response = await axios.get(
      `https://bps.bringer.io/public/api/v2/get/parcel/tracking.json?tracking_number=${trackingNumber}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzIzMjY1NTUsImV4C...',
        },
      }
    );

    const parcelInfo = response.data;
    res.json(parcelInfo);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching parcel information' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
