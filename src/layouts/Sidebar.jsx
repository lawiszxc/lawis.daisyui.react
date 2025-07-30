import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router";
import { RiLogoutCircleLine } from "react-icons/ri";
import logoutFunction from "../utils/logoutFunction";
import userGet from "../utils/getUser"; // adjust path as needed

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logoutFunction();
    if (success) {
      navigate("/login");
    }
  };

  const { user } = userGet();

  return (
    <>
      <aside className="hidden lg:flex flex-col h-screen w-80 bg-base-200 border-r-2 border-base-300">
        <div className="block border-b-2 border-base-300 shadow-lg p-4">
          <h2>Opol System</h2>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          <ul className="menu bg-base-200 text-base-content w-full p-4">
            <p className="opacity-60 font-semibold">Main</p>
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
        </div>
        <div className="border-t-2 border-base-300 shadow-lg p-3 justify-center items-center">
          <div className="flex">
            <div className="flex flex-wrap">
              <img
                className="size-10 w-10 rounded-box"
                src="https://img.daisyui.com/images/profile/demo/1@94.webp"
              />
            </div>
            <div className="flex flex-wrap flex-col ml-2 justify-center">
              <h6>{user.email}</h6>
              <div className="text-xs uppercase font-semibold opacity-60">
                Users
              </div>
            </div>
            <div
              className="bg-base-200 flex items-center ml-auto cursor-pointer tooltip"
              data-tip="Logout"
              onClick={() => handleLogout()}
            >
              <RiLogoutCircleLine className="text-error" size={25} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
