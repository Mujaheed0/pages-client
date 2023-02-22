import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signInHandler } from "../store/features/Auth/thunk";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(signInHandler({ email, password, navigate }));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="rounded-lg bg-white p-16 shadow-lg">
        <h2 className="mb-4 text-3xl">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full rounded-lg border border-gray-400 p-2"
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full rounded-lg border border-gray-400 p-2"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              className="rounded bg-blue-500 py-2 px-4 font-bold text-white"
              type="submit"
            >
              Login
            </button>
            <button
              className="rounded bg-green-500 py-2 px-4 font-bold text-white"
              type="submit"
              onClick={() => {
                setEmail("test@test");
                setPassword("test");
              }}
            >
              Login As Guest
            </button>
            <button
              className="rounded bg-gray-500 py-2 px-4 font-bold text-white"
              type="button"
              onClick={() => navigate("/sign-up")}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
