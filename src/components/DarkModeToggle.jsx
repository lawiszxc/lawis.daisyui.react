import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useEffect } from "react";

const DarkModeToggle = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);
  return (
    <>
      {" "}
      <label className="swap swap-rotate btn btn-circle btn-ghost">
        <input
          type="checkbox"
          onChange={(e) => {
            const newTheme = e.target.checked ? "lofi" : "dark";
            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
          }}
          defaultChecked={localStorage.getItem("theme") === "lofi"}
        />

        <FiSun className="swap-off h-6 w-6 fill-current" />
        <FaMoon className="swap-on h-6 w-6  fill-current" />
      </label>
    </>
  );
};

export default DarkModeToggle;
