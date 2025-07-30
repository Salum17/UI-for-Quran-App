// src/api/auth.js
import axios from "axios";

export async function getAccessToken() {
  const clientId = import.meta.env.VITE_QURAN_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_QURAN_CLIENT_SECRET;

  const auth = btoa(`${clientId}:${clientSecret}`);

  try {
    const response = await axios.post(
      "https://prelive-oauth2.quran.foundation/oauth2/token",
      "grant_type=client_credentials&scope=content",
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    return null;
  }
}
