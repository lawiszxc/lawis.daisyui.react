import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import DarkModeToggle from "../components/DarkModeToggle";
import { Link, useNavigate } from "react-router";
import axios from "../utils/axios";
import { useState } from "react";
import Cookies from "js-cookie";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", form);

      if (response.data.status === "success") {
        Cookies.set("token", response.data.token, { expires: 1 });

        navigate("/dashboard");
      } else {
        console.log("Login failed: Invalid response");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden flex-auto">
        <div className="flex w-full items-center justify-center bg-base-100 text-base-content">
          <form onSubmit={handleRegister} className="w-full">
            <div className="card w-full sm:h-auto h-screen max-w-md mx-auto items-center bg-base-300 p-6 text-center gap-2">
              <img src="/logo.png" alt="OCC Logo" className="h-auto w-20" />
              <h1 className="font-bold">Register</h1>
              <p className="text-gray-400 p-2">
                Please enter your details to sign in
              </p>

              <fieldset className="fieldset w-full gap-2">
                <input
                  type="email"
                  name="email"
                  className="input w-full focus:outline-none focus:ring-0 lowercase placeholder:normal-case"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="password"
                  className="input w-full focus:outline-none focus:ring-0"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />

                <div className="flex justify-end text-sm">
                  <Link to="/login" className="underline">
                    Already have an account!
                  </Link>
                </div>

                <button type="submit" className="btn w-full bg-warning">
                  Sign In
                </button>

                <div className="divider text-gray-400">or continue with</div>

                <div className="flex gap-2 justify-center">
                  <div className="card bg-base-200 p-2 cursor-pointer">
                    <FaGoogle size={25} />
                  </div>
                  <div className="card bg-base-200 p-2 cursor-pointer">
                    <FaFacebookSquare size={25} />
                  </div>
                  <div className="card bg-base-200 p-2 cursor-pointer">
                    <FaGithub size={25} />
                  </div>
                </div>

                <div className="flex justify-center py-5">
                  <div className="card bg-base-200 cursor-pointer">
                    <DarkModeToggle />
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
