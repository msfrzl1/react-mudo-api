/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Navbar from "../Fragments/Navbar";
import { useState } from "react";
import Label from "../Elements/Label";
import Input from "../Elements/Input";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      username: username,
      password: password,
    };

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        const token = res.data.data.token;
        localStorage.setItem("access", token);
        setNotif({ message: res.data.message, success: true });
      })
      .catch((error) => {
        setNotif({ message: error.response.data.message, success: false });
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:px-6 sm:px-8">
        <div className="sm: mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form action="">
              <div className="flex justify-center font-black text-5xl mb-6">
                <h1>Login</h1>
              </div>
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
                onClick={handleLogin}
              >
                Login
              </button>
              {notif.message && (
                <div className={notif.success ? "text-green-500 flex justify-center mt-2" : "text-red-500 flex justify-center mt-2"}>
                  <p>{notif.message}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
