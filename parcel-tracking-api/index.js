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

app.get('/Tracking_Parcel', async (req, res) => {
  const trackingNumber = req.query.Tracking_number;

  try {
    const response = await axios.get(
      `https://bps.bringer.io/public/api/v2/get/parcel/tracking.json?tracking_number=${trackingNumber}`,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NzIzMjY1NTUsImV4cCI6MTcwMzg2MjU1NSwiYXVkIjoiaHR0cHM6Ly9icmluZ2VycGFyY2VsLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNTI1eXM2YWh4d3UyIiwianRpIjoiZDdlZGE3NDgtNzMxOS00YWIzLWI2MGEtMDEzMzI0NmVkNmY2In0.uJi6d6-E2zDWj24wryh2sVWKs4ceny4QllbrHrzK5L0',
        },
      }
    );

    const parcelInfo = response.data;
    res.json(parcelInfo);
  } catch (error) {
    console.error('Error:', error.message);
    console.error('API Response:', error.response.data);
    res.status(500).json({ error: 'Error fetching parcel information' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
