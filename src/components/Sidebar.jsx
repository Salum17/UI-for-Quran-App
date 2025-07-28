import { Link, useLocation } from "react-router-dom";
import { FiHome, FiBookOpen, FiPlay, FiUser, FiMoreHorizontal, FiAward } from "react-icons/fi"; // example icons

const Sidebar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Lessons", path: "/lessons", icon: <FiBookOpen /> },
    { name: "Practice", path: "/practice", icon: <FiAward /> },
    { name: "Game", path: "/game", icon: <FiPlay /> },
    { name: "Account", path: "/account", icon: <FiUser /> },
    { name: "More", path: "/more", icon: <FiMoreHorizontal /> },
  ];

  return (
    <aside className="w-56 bg-gray-800 text-white p-5 flex flex-col min-h-screen">
      <h2 className="text-2xl font-bold mb-10 flex items-center gap-2">Hifdh App</h2>
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
              pathname === item.path ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
