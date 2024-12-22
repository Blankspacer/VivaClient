import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [togglePassword, setTogglePassword] = useState(true);
  const navigate = useNavigate();
  // toggle password
  const handlePasswordToggle = () => {
    setTogglePassword(!togglePassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // const avatar = form.avatar?.files[0];
    const password = form.password.value;

    try {
      const User = {
        email,
        name,
        // avatar,
        phone,
        password,
      };
      console.log(User);
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/signup`,
        User
      );
      toast.success("SignUp Successful");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Sign up failed");
    }
  };

  return (
    <div className="bg-black min-h-screen min-w-full content-center">
      <div className="max-w-md mx-auto p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 text-gray-200 text-sm font-medium">
            <h1 className="py-3 text-center text-3xl font-semibold">
              Create Your Account
            </h1>
            {/* Name  */}
            <div>
              <label className="block" htmlFor="name">
                Full Name
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border   border-gray-600 rounded-md text-white"
                name="name"
                type="text"
                placeholder="Enter  Full Name"
              />
            </div>
            {/* email */}
            <div>
              <label className="block" htmlFor="email">
                Email Address
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                name="email"
                placeholder="Enter Email Address"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="block" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
              />
            </div>
            {/* image */}
            {/* <div className="mb-4">
              <label htmlFor="avatar" className="block ">
                Profile Image
              </label>
              <input
                type="file"
                id="avatar"
                className="w-full mt-2  text-sm  border rounded-md  file:border-0 file:py-2 file:px-4 file:mr-4   file:bg-gradient-to-r from-orange-600 via-orange-400 to-red-500"
                placeholder="Insert  Thumbnail Image "
              />
            </div> */}
            {/* password */}
            <div>
              <label className="block" htmlFor="password">
                Password
              </label>
              <div className="flex items-center relative">
                <input
                  className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                  type={togglePassword ? "password" : "text"}
                  name="password"
                  placeholder="Password"
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
              className="min-w-full bg-gradient-to-r from-sky-600 via-sky-400-400 to-sky-800 text-white px-4 py-2 font-bold rounded-md hover:opacity-50"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <h4 className="text-white flex justify-center gap-2 mt-2">
          Already have an account ?{" "}
          <Link
            to="/login"
            className=" bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-400 to-red-400 font-medium"
          >
            Login Here
          </Link>
        </h4>
      </div>
    </div>
  );
};

export default Register;
