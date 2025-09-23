import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import userSchema from "../helpers/userSchema";
import axios from "axios";
import lib from "../lib/lib";

type Inputs = {
  name: string;
  email: string;
  password: string;
};
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: joiResolver(userSchema) });
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/auth/registration",
        data
      );
      console.log(JSON.stringify(res.data) + "Sign up successfully");
      lib.SuccessToast("Sign up successfully");
    } catch (error: any) {
      console.log(error.response?.data || error.message);
      alert(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex justify-center items-center p-6">
      <div className="w-[35%] mx-auto mt-10 p-6 bg-gray-900/80 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-500 mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-gray-300 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              // defaultValue="test"
              {...register("name", { required: true })}
              className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {errors.name && (
              <span className="absolute left-0 text-red-500 text-xs top-full">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-gray-300 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
            />
            {errors.email && (
              <span className="absolute left-0 text-red-500 text-xs top-full">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-300 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full px-4 py-3 bg-gray-900/70 border border-gray-700 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-inner"
            />
            {errors.password && (
              <span className="absolute left-0 text-red-500 text-xs top-full">
                {errors.password.message}
              </span>
            )}
          </div>
          {
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full mt-9 py-3 rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 transition
              ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white hover:shadow-pink-700 hover:scale-[1.02]"
              }`}
            >
              {isSubmitting ? (
                <>
                  {" "}
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <FaUserPlus /> Sign Up
                </>
              )}
            </button>
          }
        </form>

        {/* Link to Sign In */}
        <p className="text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-pink-400 hover:text-pink-300 font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
