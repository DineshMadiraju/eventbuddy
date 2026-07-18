"use client";

import Link from "next/link";

import PendingInvites from "@/components/dashboard/PendingInvites";
import MyEvents from "@/components/dashboard/MyEvents";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white-900">
            Welcome Back 👋
          </h1>

          <p className="mt-1 text-white-600">
            Plan events, invite friends, and split expenses.
          </p>
        </div>

        <Link
          href="/create-event"
          className="
            rounded-lg
            bg-blue-600
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-blue-700
          "
        >
          + Create Event
        </Link>

      </div>


      <div className="grid gap-8 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <MyEvents />
        </div>

        <div>
          <PendingInvites />
        </div>

      </div>

    </main>
  );
}