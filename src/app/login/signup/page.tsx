
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must contain at least 6 characters.");
      return;
    }

    setMessage("Account created successfully! 🎉");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 flex items-center justify-center px-6 py-10">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-md">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Account 🚀
          </h1>

          <p className="mt-2 text-gray-400">
            Sign up to get started
          </p>
        </div>

        <form onSubmit={handleSignup} className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            Create Account
          </button>

        </form>

        {message && (
          <div className="mt-5 rounded-xl bg-blue-500/10 p-3 text-center text-blue-300">
            {message}
          </div>
        )}

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />

          <span className="text-sm text-gray-500">
            OR
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        <button
          onClick={() => setMessage("Google signup clicked")}
          className="w-full rounded-xl border border-white/20 bg-white/5 py-3 font-medium text-white transition hover:bg-white/10"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>

        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </main>
  );
}

