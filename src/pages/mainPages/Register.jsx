const Register = () => {
  return (
    <div className="bg-black min-h-screen min-w-full content-center">
      <div className="max-w-md mx-auto p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600">
        <form>
          <div className="space-y-4 text-gray-200 text-sm font-medium">
            <h1 className="py-3 text-center text-3xl font-semibold">
              Create Your Account
            </h1>
            <div>
              <label className="block" htmlFor="name">
                Username
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                name="name"
                type="text"
                placeholder="User Name"
              />
            </div>
            <div>
              <label className="block" htmlFor="email">
                Email Address
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="text"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <label className="block" htmlFor="email">
                Passwords
              </label>
              <input
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
                type="password"
                name="password"
                placeholder="Password"
              />
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
        <h4 className="text-white flex justify-end mt-2">
          Already have an account?{" "}
          <a className="cursor-pointer text-blue-600" href="/login">
            Login Here
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Register;
