/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Navbar from "../Fragments/Navbar";
import Label from "../Elements/Label";
import Input from "../Elements/Input";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 sm:px-8">
        <div className="sm: mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form action="">
              <div className="flex justify-center font-black text-5xl mb-6">
                <h1>Register</h1>
              </div>
              <Label htmlFor="username">Username</Label>
              <Input type="text" name="username" placeholder="mxxxx123" />
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" placeholder="********" />
            </form>

            <div className="flex justify-center mt-1">
              <p>
                do you have an account?{" "}
                <Link to={"/login"} className="text-blue-600 font-bold hover:underline">
                  Login
                </Link>
              </p>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="w-full py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ease-in-out bg-indigo-600 hover:bg-indigo-700"
              >
                Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
