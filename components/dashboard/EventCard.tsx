"use client";

type EventCardProps = {
  id: string;
  title: string;
  location: string;
  date: string;
  members: number;
  status?: string;
};


export default function EventCard({
  title,
  location,
  date,
  members,
  status = "Active",
}: EventCardProps) {

  return (

    <div
      className="
        rounded-2xl
        border
        bg-white
        p-6
        shadow-sm
        transition
        hover:shadow-md
      "
    >

      <div className="flex items-start justify-between">

        <div>

          <h3
            className="
              text-xl
              font-bold
              text-gray-900
            "
          >
            {title}
          </h3>


          <div
            className="
              mt-3
              space-y-1
              text-sm
              text-gray-500
            "
          >

            <p>
              📍 {location}
            </p>

            <p>
              📅 {date}
            </p>

          </div>

        </div>


        <span
          className="
            rounded-full
            bg-green-100
            px-3
            py-1
            text-sm
            font-medium
            text-green-700
          "
        >
          {status}
        </span>

      </div>


      <div
        className="
          mt-6
          flex
          items-center
          justify-between
          border-t
          pt-4
        "
      >

        <span
          className="
            text-sm
            text-gray-600
          "
        >
          👥 {members} members
        </span>


        <button
          className="
            rounded-lg
            bg-blue-600
            px-4
            py-2
            text-sm
            font-medium
            text-white
            hover:bg-blue-700
          "
        >
          Open Event
        </button>

      </div>


    </div>

  );
}