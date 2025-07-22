import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <>
      <aside className="hidden lg:block overflow-y-auto h-screen w-80 bg-base-200 scrollbar-hidden border-r-2 border-base-200">
        <div className="border-b-2 border-base-300 shadow-lg p-4">
          <h2>Opol System</h2>
        </div>
        <ul className="menu bg-base-200 text-base-content w-full p-4 justify-between">
          <p className="text-gray-400">Main</p>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "active bg-neutral text-white rounded-md"
                  : "rounded-md"
              }
            >
              {" "}
              <LuLayoutDashboard size={18} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive
                  ? "active bg-neutral text-white rounded-md"
                  : "rounded-md"
              }
            >
              <HiOutlineUsers size={18} />
              Users
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
