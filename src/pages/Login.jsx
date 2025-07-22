import { FaGoogle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import DarkModeToggle from "../components/DarkModeToggle";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex w-full items-center justify-center bg-base-100 text-base-content">
          <div className="card flex w-full h-full overflow-hidden lg:h-150 lg:w-250 items-center bg-base-300 p-15 text-center">
            <img src="/logo.png" alt="OCC Logo" className="h-auto w-20" />
            <h1>Welcome to Login Page</h1>
            <p className="text-gray-400 p-2">
              Please enter your details to sign in
            </p>

            <fieldset className="fieldset gap-2 w-xs">
              <input type="text" className="input" placeholder="Your Email" />

              <input
                type="password"
                className="input"
                placeholder="Your Email"
              />
            </fieldset>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="underline">
                  <a href=""> Forgot password?</a>
                </p>
                <p className="underline">
                  <Link to={"/register"}> Create new account?</Link>
                </p>
              </div>
              <div className="flex justify-end w-80">
                <button className="btn w-full text-base-100 bg-neutral">
                  Sign In
                </button>
              </div>

              <div className="divider">
                <p className="text-gray-400"> or continue with</p>
              </div>

              <div className="flex gap-2 justify-center border-gray-100">
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

              <div className="flex justify-center border-gray-100 p-5">
                <div className="card bg-base-200 cursor-pointer">
                  <DarkModeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
