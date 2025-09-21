import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center p-6">
      <div className="w-[35%] mt-10 p-6 bg-gray-900/80 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 mb-6">
          Sign In
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-inner"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-pink-700 hover:scale-[1.02] transition flex items-center justify-center gap-2"
          >
            <FaSignInAlt /> Sign In
          </button>
        </form>

        {/* Link to Sign Up */}
        <p className="text-center text-gray-400 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
