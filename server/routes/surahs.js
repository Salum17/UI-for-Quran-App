const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  const clientId = process.env.QURAN_CLIENT_ID;
  const clientSecret = process.env.QURAN_CLIENT_SECRET;
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  try {
    // Step 1: Get OAuth token
    const tokenResponse = await axios.post(
      "https://prelive-oauth2.quran.foundation/oauth2/token",
      "grant_type=client_credentials&scope=content",
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // Step 2: Use token to fetch surahs
    const chapterResponse = await axios.get(
      "https://apis-prelive.quran.foundation/content/api/v4/chapters",
      {
        headers: {
          "x-auth-token": accessToken,
          "x-client-id": clientId,
        },
      }
    );

    res.json(chapterResponse.data);
  } catch (error) {
    console.error("Error fetching chapters:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch chapters" });
  }
});

module.exports = router;
