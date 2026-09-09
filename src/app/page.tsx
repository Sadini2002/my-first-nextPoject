
"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [likes, setLikes] = useState(0);

  const handleWelcome = () => {
    if (!name.trim()) {
      setMessage("Please enter your name first 😊");
      return;
    }

    setMessage(`Welcome, ${name}! 🎉 We're happy to have you here.`);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12 border-b border-white/10">
        <h1 className="text-2xl font-bold">
          My<span className="text-blue-400">Website</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>

          <a href="#features" className="hover:text-white transition">
            Features
          </a>

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <button className="rounded-full bg-blue-600 px-5 py-2 hover:bg-blue-700 transition">
            Login
          </button>
        </div>

        <button className="md:hidden rounded-lg border border-white/20 px-3 py-2">
          ☰
        </button>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-[80vh] items-center justify-center px-6"
      >
        <div className="w-full max-w-4xl text-center">

          <div className="mb-6 inline-block rounded-full border border-blue-400/30 bg-blue-400/10 px-5 py-2 text-sm text-blue-300">
            🚀 Welcome to our platform
          </div>

          <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Build Something
            <span className="block text-blue-400">
              Amazing Today
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            A modern and interactive Next.js website designed to provide
            users with a simple, beautiful, and engaging experience.
          </p>

          {/* User Interaction */}
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-4">

            <input
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder-gray-400 outline-none backdrop-blur focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
            />

            <button
              onClick={handleWelcome}
              className="rounded-xl bg-blue-600 px-6 py-4 font-semibold transition hover:bg-blue-700 hover:scale-[1.02] active:scale-95"
            >
              Get Started 🚀
            </button>

          </div>

          {/* Dynamic Message */}
          {message && (
            <div className="mx-auto mt-6 max-w-md rounded-xl border border-blue-400/30 bg-blue-400/10 p-4 text-blue-200">
              {message}
            </div>
          )}

          {/* Like Button */}
          <button
            onClick={handleLike}
            className="mt-6 rounded-full border border-white/20 bg-white/10 px-6 py-3 transition hover:bg-white/20"
          >
            ❤️ Like {likes}
          </button>

        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="text-blue-400 font-semibold">
              FEATURES
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Everything You Need
            </h2>

            <p className="mt-4 text-gray-400">
              Simple features with a modern user experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Card 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10">
              <div className="mb-5 text-4xl">
                ⚡
              </div>

              <h3 className="text-xl font-bold">
                Fast Performance
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                Built with Next.js for fast loading and smooth performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10">
              <div className="mb-5 text-4xl">
                🎨
              </div>

              <h3 className="text-xl font-bold">
                Modern Design
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                Clean and responsive interface that works across devices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10">
              <div className="mb-5 text-4xl">
                🔒
              </div>

              <h3 className="text-xl font-bold">
                Secure
              </h3>

              <p className="mt-3 text-gray-400 leading-7">
                Designed with modern development practices and security in mind.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/10 px-6 py-20 text-center"
      >
        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Start exploring the platform and experience a modern
            Next.js application.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 rounded-xl bg-purple-600 px-8 py-4 font-semibold transition hover:bg-purple-700"
          >
            Back to Top ↑
          </button>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-gray-500">
        © 2026 MyWebsite. All rights reserved.
      </footer>

    </main>
  );
}
