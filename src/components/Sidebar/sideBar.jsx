import { NavLink } from "react-router-dom";
import { FiHome, FiSettings, FiFileText, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/" },
    { name: "System Settings", icon: <FiSettings />, path: "/settings" },
    { name: "Service Logs", icon: <FiFileText />, path: "/logs" },
    { name: "Logout", icon: <FiLogOut />, path: "/logout" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-6">My Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition ${
                isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
