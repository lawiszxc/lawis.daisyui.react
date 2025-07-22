function App() {
  return (
    <div className="h-screen flex flex-col">
      <nav className="navbar bg-base-100 shadow-sm mb-1">
        <div className="flex-1">
          <h2 className="ml-3">Opol Community College</h2>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
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
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-1 overflow-hidden">
        <div className="drawer lg:drawer-open w-full">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex flex-col">
            <main className="flex-1 p-4 overflow-y-auto bg-base-100">
              <h2 className="font-bold">Dashboard</h2>
              <h6>Main content goes here...</h6>

              <fieldset className="fieldset">
                <label className="flex gap-2 cursor-pointer items-center">
                  <input
                    type="radio"
                    name="theme-radios"
                    className="radio radio-sm theme-controller"
                    value="default"
                  />
                  Default
                </label>
                <label className="flex gap-2 cursor-pointer items-center">
                  <input
                    type="radio"
                    name="theme-radios"
                    className="radio radio-sm theme-controller"
                    value="retro"
                  />
                  Retro
                </label>
                <label className="flex gap-2 cursor-pointer items-center">
                  <input
                    type="radio"
                    name="theme-radios"
                    className="radio radio-sm theme-controller"
                    value="cyberpunk"
                  />
                  Cyberpunk
                </label>
                <label className="flex gap-2 cursor-pointer items-center">
                  <input
                    type="radio"
                    name="theme-radios"
                    className="radio radio-sm theme-controller"
                    value="valentine"
                  />
                  Valentine
                </label>
                <label className="flex gap-2 cursor-pointer items-center">
                  <input
                    type="radio"
                    name="theme-radios"
                    className="radio radio-sm theme-controller"
                    value="aqua"
                  />
                  Aqua
                </label>
              </fieldset>
            </main>
          </div>

          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content w-70 min-h-full p-4">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 1</a>
              </li>

              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
