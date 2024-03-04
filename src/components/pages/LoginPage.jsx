/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Navbar from "../Fragments/Navbar";
import { useState } from "react";
import Label from "../Elements/Label";
import Input from "../Elements/Input";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 sm:px-8">
        <div className="sm: mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form action="">
              <Label htmlFor="username">Username</Label>
              <Input type="text" name="username" placeholder="mxxxx123" onChange={handleUsername} />
              <Label htmlFor="password">Password</Label>
              <Input type="password" name="password" placeholder="********" onChange={handlePassword} />
            </form>

            <div className="flex justify-center mt-1">
              <p>
                don't you have an account?{" "}
                <Link to={"/register"} className="text-blue-600 font-bold hover:underline">
                  Registration
                </Link>
              </p>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="w-full py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ease-in-out bg-indigo-600 hover:bg-indigo-700"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
