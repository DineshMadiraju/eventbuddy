"use client";

type Participant = {
  name: string;
  amount: number;
};

type ExpenseCardProps = {
  title: string;
  amount: number;
  paidBy: string;
  participants: Participant[];
};

export default function ExpenseCard({
  title,
  amount,
  paidBy,
  participants,
}: ExpenseCardProps) {
  const getIcon = () => {
    const value = title.toLowerCase();

    if (value.includes("food") || value.includes("dinner") || value.includes("lunch") || value.includes("breakfast")) {
      return "🍕";
    }

    if (value.includes("hotel")) {
      return "🏨";
    }

    if (value.includes("gas") || value.includes("fuel")) {
      return "⛽";
    }

    if (value.includes("flight") || value.includes("ticket")) {
      return "🎟️";
    }

    if (value.includes("shopping")) {
      return "🛍️";
    }

    return "💳";
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">

      {/* Header */}
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-3xl">
            {getIcon()}
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {title}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Paid by{" "}
              <span className="font-medium text-gray-800">
                {paidBy}
              </span>
            </p>
          </div>

        </div>

        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">
            ${amount.toFixed(2)}
          </p>

          <button className="mt-3 text-xl text-gray-400 hover:text-gray-700">
            ⋮
          </button>
        </div>

      </div>

      {/* Divider */}
      <div className="my-5 border-t" />

      {/* Participants */}
      <div>

        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
          Split Between
        </h4>

        <div className="space-y-3">

          {participants.map((participant) => (

            <div
              key={participant.name}
              className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3"
            >

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 font-medium">
                  {participant.name.charAt(0).toUpperCase()}
                </div>

                <span className="font-medium text-gray-800">
                  {participant.name}
                </span>
              </div>

              <span className="font-semibold text-gray-700">
                ${participant.amount.toFixed(2)}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t pt-4 text-sm text-gray-500">

        <span>Today</span>

        <span>
          {participants.length} participant
          {participants.length !== 1 ? "s" : ""}
        </span>

      </div>

    </div>
  );
}