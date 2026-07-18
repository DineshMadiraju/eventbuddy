"use client";

import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Login to continue to EventBuddy
        </p>
      </div>

      <form className="space-y-5">

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email
          </label>

          <div className="relative">
            <Mail
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 outline-none focus:border-blue-500"
            />
          </div>
        </div>


        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <div className="relative">
            <Lock
              className="absolute left-3 top-3 text-gray-400"
              size={20}
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 outline-none focus:border-blue-500"
            />
          </div>
        </div>


        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </button>

      </form>


      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link
  href="/register"
  className="font-medium text-blue-600">
          Register
        </Link>
      </p>

    </div>
  );
}