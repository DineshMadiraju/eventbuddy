"use client";

const invitations = [
  {
    id: 1,
    title: "🍻 Friday Night",
    host: "John",
  },
  {
    id: 2,
    title: "🎉 Miami Trip",
    host: "Sarah",
  },
];

export default function PendingInvitations() {
  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-semibold text-gray-900">
        Pending Invitations
      </h2>

      <div className="space-y-4">

        {invitations.map((invite) => (

          <div
            key={invite.id}
            className="rounded-lg border p-4"
          >

            <h3 className="font-semibold text-gray-900">
              {invite.title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Invited by {invite.host}
            </p>

            <div className="mt-4 flex gap-2">

              <button
                className="
                  flex-1
                  rounded-lg
                  bg-green-600
                  py-2
                  text-white
                  hover:bg-green-700
                "
              >
                Accept
              </button>

              <button
                className="
                  flex-1
                  rounded-lg
                  border
                  py-2
                  hover:bg-gray-100
                "
              >
                Decline
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}