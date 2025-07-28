import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import Game from "./pages/Game";
import Account from "./pages/Account";
import More from "./pages/More";
import Practice from "./pages/Practice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/game" element={<Game />} />
      <Route path="/account" element={<Account />} />
      <Route path="/more" element={<More />} />
    </Routes>
  );
}

export default App;