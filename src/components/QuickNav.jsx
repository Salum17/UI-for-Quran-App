import { Link } from "react-router-dom";

const QuickNav = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <Link to="/lessons" className="bg-indigo-500 text-white p-4 rounded shadow text-center">
      📚 Lessons
    </Link>
    <Link to="/game" className="bg-green-500 text-white p-4 rounded shadow text-center">
      🎮 Game
    </Link>
    <Link to="/progress" className="bg-yellow-500 text-white p-4 rounded shadow text-center">
      📈 Progress
    </Link>
  </div>
);

export default QuickNav;
