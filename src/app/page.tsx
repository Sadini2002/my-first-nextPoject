
"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      setMessage("Please enter your name 😊");
      return;
    }

    setMessage(`Welcome to our website, ${name}! 🎉`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-6">
      <main className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-xl text-center">
        
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={25}
          className="mx-auto mb-8"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome! 👋
        </h1>

        <p className="text-gray-600 mb-8">
          Enter your name and interact with the page.
        </p>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95"
          >
            Get Started 🚀
          </button>
        </div>

        {message && (
          <div className="mt-6 rounded-xl bg-blue-50 p-4 text-blue-700 font-medium">
            {message}
          </div>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4">
          <button
            onClick={() => setMessage("You clicked the Like button! ❤️")}
            className="rounded-xl bg-pink-100 p-4 text-pink-600 hover:bg-pink-200"
          >
            ❤️ Like
          </button>

          <button
            onClick={() => setMessage("Thanks for exploring! 😊")}
            className="rounded-xl bg-purple-100 p-4 text-purple-600 hover:bg-purple-200"
          >
            ✨ Explore
          </button>
        </div>

      </main>
    </div>
  );
}
