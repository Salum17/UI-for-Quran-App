// client/src/App.jsx
// Importing necessary libraries and components
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import Game from "./pages/Game";
import Account from "./pages/Account";
import More from "./pages/More";
import Practice from "./pages/Practice";
import SurahList from "./pages/mushaf/SurahList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/surahlist" element={<SurahList />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/game" element={<Game />} />
      <Route path="/account" element={<Account />} />
      <Route path="/more" element={<More />} />
    </Routes>
  );
}

export default App;
