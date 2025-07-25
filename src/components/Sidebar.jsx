import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/" },
    { name: "Lessons", path: "/lessons" },
    { name: "Game", path: "/game" },
  ];

  return (
    <aside className="w-56 bg-gray-800 text-white p-5 flex flex-col">
      <h2 className="text-2xl font-bold mb-10">🕋 HifzApp</h2>
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`p-2 rounded hover:bg-gray-700 ${
              pathname === item.path ? "bg-gray-700" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
