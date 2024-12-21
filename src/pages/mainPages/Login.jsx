import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Heading from "../../components/reusable/Heading";

import Containter from "@/components/reusable/Containter";
import LoadingButtion from "@/components/reusable/LoadingButtion";
import useAuth from "../../hooks/useAuth";

const LoginPage = () => {
  const [togglePassword, setTogglePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  // from handler
  const onSubmit = async (data) => {
    setLoading(true);

    // handle login
    const res = await login({
      email: data.email,
      password: data.password,
    });

    if (res.success) {
      setLoading(false);
      toast.success(res.message);
      navigate(from, { replace: true });
    } else {
      setLoading(false);
      toast.error(res.message);
    }

    resetField("email");
    resetField("password");
  };

  // password view toggle
  const handlePasswordToggle = () => {
    setTogglePassword(!togglePassword);
  };

  return (
    <Containter>
      <Helmet>
        <title>Login - Sufiza</title>
        <meta name="" content="" />
      </Helmet>

      <div className="flex justify-center items-center  ">
        <div className="max-w-md w-full mx-auto bg-[#241a19]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-opacity-70  rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] space-y-6"
          >
            <div className="mb-10">
              <Heading title={"Login"} style={"text-3xl font-extrabold"} />
            </div>

            {/* email input */}
            <div>
              <label className="text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="bg-transparent border-2 rounded-md outline-none  border-gray-200 focus:border-gray-300 w-full text-sm pl-4 pr-10 py-2.5 "
                  placeholder="Enter email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-4 h-4 absolute right-4"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clipPath="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeMiterlimit="10"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
              {errors.email && (
                <span className="text-red-500 text-xs">Email is required</span>
              )}
            </div>

            {/* password input */}
            <div>
              <label className="text-sm mb-2 block">Password</label>
              <div className="relative flex items-center">
                <input
                  {...register("password", { required: true })}
                  type={togglePassword ? "password" : "text"}
                  className="bg-transparent border-2 rounded-md outline-none  border-gray-200 focus:border-gray-300 w-full text-sm pl-4 pr-10 py-2.5 "
                  placeholder="Enter password"
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
              {errors?.password?.type === "required" && (
                <span className="text-red-500 text-xs">
                  Password is required
                </span>
              )}
            </div>

            {/* forgot password */}
            <div className="mt-6">
              <button disabled className="text-sm hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* sign in button */}
            <div className="mt-10">
              <button
                disabled={loading}
                type="submit"
                className="w-full py-3 px-4 text-sm font-semibold rounded-full bg-[#97842d] hover:bg-[#7e6e2a]  text-white focus:outline-none transition-all duration-300"
              >
                {loading ? <LoadingButtion label={"loading"} /> : "Login"}
              </button>

              <p className="text-sm text-center mt-6">
                Don&apos;t have an account{" "}
                <Link
                  to="/register"
                  className="text-[#917e2d] font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Containter>
  );
};

export default LoginPage;
