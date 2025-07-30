import { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../../layouts/MainLayout";
import { getAccessToken } from "../../api/auth"; // adjust path if needed

const SurahList = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    const fetchChapters = async () => {
      const accessToken = await getAccessToken(); // fetch token
      const clientId = import.meta.env.VITE_QURAN_CLIENT_ID; // from .env

      try {
        const response = await axios.get(
          "https://apis-prelive.quran.foundation/content/api/v4/chapters",
          {
            headers: {
              "x-auth-token": accessToken,
              "x-client-id": clientId,
            },
          }
        );
        setSurahs(response.data.chapters);
      } catch (error) {
        console.error("Error fetching chapters:", error);
      }
    };

    fetchChapters();
  }, []);

  return (
    <MainLayout>
      <div className="p-4 max-w-md mx-auto sm:max-w-xl md:max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-center">📖 Surah List</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {surahs.map((surah) => (
            <li
              key={surah.id}
              className="bg-white shadow-md rounded p-3 hover:bg-gray-100 cursor-pointer"
            >
              <div className="font-semibold">{surah.name_simple}</div>
              <div className="text-sm text-gray-500">
                Surah {surah.id} - {surah.translated_name.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default SurahList;
