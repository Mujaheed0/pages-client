import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpHandler } from "../store/features/Auth/thunk";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpHandler({ name, email, password }));
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="rounded-lg bg-white p-16 shadow-lg">
        <h2 className="mb-4 text-3xl">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full rounded-lg border border-gray-400 p-2"
              id="name"
              type="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
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
              Sign Up
            </button>
            <button
              onClick={() => navigate("/login")}
              className="rounded bg-gray-500 py-2 px-4 font-bold text-white"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
