"use client";

import Link from "next/link";
import { User, Mail, Lock } from "lucide-react";

export default function RegisterForm() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <div className="mb-6 text-center">

          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Join EventBuddy and start planning events
          </p>

        </div>


        <form className="space-y-5">

          {/* Full Name */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Full Name
            </label>

            <div className="relative">

              <User
                size={20}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="text"
                placeholder="John Smith"
                className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  py-2
                  pl-10
                  pr-3
                  outline-none
                  focus:border-blue-500
                "
              />

            </div>

          </div>


          {/* Email */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <div className="relative">

              <Mail
                size={20}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="email"
                placeholder="john@example.com"
                className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  py-2
                  pl-10
                  pr-3
                  outline-none
                  focus:border-blue-500
                "
              />

            </div>

          </div>


          {/* Password */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-3 top-3 text-gray-400"
              />

              <input
                type="password"
                placeholder="Create password"
                className="
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  py-2
                  pl-10
                  pr-3
                  outline-none
                  focus:border-blue-500
                "
              />

            </div>

          </div>


          <button
            type="submit"
            className="
              w-full
              rounded-lg
              bg-blue-600
              py-3
              font-semibold
              text-white
              hover:bg-blue-700
            "
          >
            Create Account
          </button>


        </form>


        <p className="mt-6 text-center text-sm text-gray-600">

          Already have an account?{" "}

          <Link
            href="/"
            className="font-medium text-blue-600"
          >
            Login
          </Link>

        </p>


      </div>

    </main>
  );
}