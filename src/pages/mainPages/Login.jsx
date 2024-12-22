import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(true);

  // toggle password
  const handlePasswordToggle = () => {
    setTogglePassword(!togglePassword);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await login({ email, password });

      if (response.success) {
        toast.success("Sign-In Successful");
        navigate("/");
      } else {
        toast.error(response.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-black min-h-screen min-w-full flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
        <form onSubmit={onSubmit}>
          <div className="space-y-4 text-gray-200 text-sm font-medium">
            <h1 className="py-3 text-center text-3xl font-semibold">Login</h1>
            {/* Email */}
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                name="email"
                type="email"
                placeholder="Enter Email"
                required
              />
            </div>
            {/* <div>
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                name="password"
                type="password"
                placeholder="Enter Password"
                required
              />
            </div> */}
            {/* Password */}
            <div>
              <label className="block" htmlFor="password">
                Password
              </label>
              <div className="flex items-center relative">
                <input
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  type={togglePassword ? "password" : "text"}
                  name="password"
                  placeholder="Enter Password"
                />
                <span
                  className="absolute right-2 cursor-pointer"
                  onClick={handlePasswordToggle}
                >
                  {(!togglePassword && (
                    <svg
                      className="w-6 h-6 text-[#9CA3AF]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeWidth="2"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )) || (
                    <svg
                      className="w-6 h-6 text-[#9CA3AF] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </div>
          </div>

          <div className="w-full mt-8">
            <button
              className="w-full bg-gradient-to-r from-sky-600 via-sky-400 to-sky-800 text-white px-4 py-2 font-bold rounded-md hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-sky-500"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <h4 className="text-white flex justify-center gap-2 mt-4">
          Don&apos;t have an account ?
          <Link
            to="/register"
            className="cursor-pointer  bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-400 to-red-400 hover:underline  font-medium"
          >
            Register Here
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
