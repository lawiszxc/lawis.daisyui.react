import { HiMenu } from "react-icons/hi";
import DarkModeToggle from "../components/DarkModeToggle";
import logoutFunction from "../utils/logoutFunction";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    const success = await logoutFunction();
    if (success) {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="flex w-full">
        <div className="navbar bg-base-200 border-b-base-300 border-b-2 justify-between">
          <div className="flex p-3">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            >
              <HiMenu size={25} className="cursor-pointer lg:hidden" />
            </label>
          </div>
          <div className="flex gap-2">
            <div className="dropdown dropdown-end justify-items-center flex">
              <DarkModeToggle />
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={() => handleLogoutClick()}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
