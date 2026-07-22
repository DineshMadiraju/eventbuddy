"use client";

import { useEffect, useState } from "react";

import { Expense } from "@/context/EventTypes";
import { useEvent } from "@/context/EventContext";

type EditExpenseModalProps = {
  open: boolean;
  expense: Expense | null;
  onClose: () => void;
  onSave: (expense: Expense) => void;
};

const categories = [
  { value: "food", label: "🍕 Food" },
  { value: "transport", label: "🚗 Transport" },
  { value: "hotel", label: "🏨 Hotel" },
  { value: "drinks", label: "🍺 Drinks" },
  { value: "activity", label: "🎟 Activity" },
  { value: "shopping", label: "🛒 Shopping" },
  { value: "other", label: "📦 Other" },
];

export default function EditExpenseModal({
  open,
  expense,
  onClose,
  onSave,
}: EditExpenseModalProps) {
  const { currentEvent } = useEvent();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("food");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  useEffect(() => {
    if (!expense) return;

    setTitle(expense.title);
    setDescription(expense.description ?? "");
    setCategory(expense.category);
    setAmount(expense.amount.toString());
    setPaidBy(expense.paidBy);

    setParticipants(
      expense.participants.map((p) => p.name)
    );
  }, [expense]);

  if (!open || !expense) return null;

  const toggleParticipant = (name: string) => {
    setParticipants((previous) =>
      previous.includes(name)
        ? previous.filter((item) => item !== name)
        : [...previous, name]
    );
  };

  const handleSave = () => {
    if (
      !title ||
      !amount ||
      !paidBy ||
      participants.length === 0
    ) {
      alert("Please complete all fields.");
      return;
    }

    const total = Number(amount);
    const share = Number(
      (total / participants.length).toFixed(2)
    );

    onSave({
      ...expense,

      title,

      description,

      category,

      amount: total,

      paidBy,

      participants: participants.map((name) => ({
        name,
        amount: share,
      })),

      updatedAt: new Date().toISOString(),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          Edit Expense
        </h2>

        <div className="space-y-4">

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Expense title"
            className="w-full rounded-lg border p-3"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full rounded-lg border p-3"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border p-3"
          >
            {categories.map((item) => (
              <option
                key={item.value}
                value={item.value}
              >
                {item.label}
              </option>
            ))}
          </select>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="w-full rounded-lg border p-3"
          />

          <label className="font-medium">
            Paid By
          </label>

          <select
            value={paidBy}
            onChange={(e) => setPaidBy(e.target.value)}
            className="w-full rounded-lg border p-3"
          >
            {currentEvent?.members.map((member) => (
              <option
                key={member.id}
                value={member.name}
              >
                {member.name}
              </option>
            ))}
          </select>

          <div>

            <p className="mb-2 font-medium">
              Split Between
            </p>

            <div className="space-y-2">
              {currentEvent?.members.map((member) => (
                <label
                  key={member.id}
                  className="flex items-center gap-3 rounded-lg border p-3"
                >
                  <input
                    type="checkbox"
                    checked={participants.includes(member.name)}
                    onChange={() =>
                      toggleParticipant(member.name)
                    }
                  />

                  {member.name}
                </label>
              ))}
            </div>

          </div>

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}