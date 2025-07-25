import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import Game from "./pages/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;