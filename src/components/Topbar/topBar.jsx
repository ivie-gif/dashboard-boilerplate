import { Bell, Search, User } from "lucide-react";

const Topbar = () => {
  return (
    <header className="w-full bg-white shadow px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-semibold">My Dashboard</div>

      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-black">
          <Search size={20} />
        </button>

        <button className="text-gray-600 hover:text-black">
          <Bell size={20} />
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
          <User size={16} />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
