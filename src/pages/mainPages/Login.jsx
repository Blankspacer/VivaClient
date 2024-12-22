import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

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
            <div>
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
          Don&apos;t have an account?
          <a
            className="cursor-pointer text-blue-600 hover:underline"
            href="/register"
          >
            Register Here
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Login;
