"use client";

import { Mail, Phone } from "lucide-react";

export default function SocialLogin() {
  return (
    <div className="space-y-3">

      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-gray-300
          py-3
          font-medium
          text-gray-700
          hover:bg-gray-50
        "
      >
        Continue with Google
      </button>


      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-gray-300
          py-3
          font-medium
          text-gray-700
          hover:bg-gray-50
        "
      >

        <Phone size={18} />

        Continue with Phone

      </button>


      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-gray-300
          py-3
          font-medium
          text-gray-700
          hover:bg-gray-50
        "
      >

        <Mail size={18} />

        Continue with Email

      </button>


    </div>
  );
}