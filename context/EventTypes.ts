export type Member = {
  id: string;
  name: string;
  status: "accepted" | "pending";
};


export type ExpenseParticipant = {
  name: string;
  amount: number;
};


export type Expense = {

  id: string;

  title: string;

  description?: string;

  category: string;

  amount: number;

  paidBy: string;

  participants: ExpenseParticipant[];

  createdAt: string;

  updatedAt: string;

};


export type Event = {

  id: string;

  title: string;

  description: string;

  startDate: string;

  startTime: string;

  endDate: string;

  endTime: string;

  location: string;

  members: Member[];

  expenses: Expense[];

};