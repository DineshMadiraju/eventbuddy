"use client";

import { CalendarPlus } from "lucide-react";

export default function GuestEventButton() {
  return (
    <button
      className="
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-purple-600
        py-3
        font-semibold
        text-white
        transition
        hover:bg-purple-700
      "
    >
      <CalendarPlus size={20} />

      Create Temporary Event/Poll
    </button>
  );
}