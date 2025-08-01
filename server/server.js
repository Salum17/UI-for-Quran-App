const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 8080;

// Enable CORS for your frontend
app.use(cors({ origin: 'http://localhost:5173' }));

// Route to fetch Surah list
app.get('/api/surahs', async (req, res) => {
  try {
    // Step 1: Get OAuth token
    const credentials = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');
    
    const tokenResponse = await axios.post(
      'https://prelive-oauth2.quran.foundation/oauth2/token',
      'grant_type=client_credentials&scope=content',
      {
        headers: {
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Step 2: Use token to fetch chapters
    const chaptersResponse = await axios.get(
      'https://apis-prelive.quran.foundation/content/api/v4/chapters',
      {
        headers: {
          'x-auth-token': accessToken,
          'x-client-id': process.env.CLIENT_ID,
        },
      }
    );

    res.json(chaptersResponse.data); // Send the chapters to the frontend
  } catch (error) {
    console.error('❌ Error fetching from Quran API:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch Surahs' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
