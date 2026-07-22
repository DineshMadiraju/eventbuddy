import { Event } from "./EventTypes";


export const sampleEvents: Event[] = [

  {

    id: "1",

    title: "🏖 Beach Trip",

    description: "Trip with friends",

    startDate: "2026-08-20",

    startTime: "10:00",

    endDate: "2026-08-25",

    endTime: "18:00",

    location: "Miami Beach",


    members: [

      {
        id: "1",
        name: "Dinesh",
        status: "accepted",
      },

      {
        id: "2",
        name: "John",
        status: "accepted",
      },

      {
        id: "3",
        name: "Sarah",
        status: "accepted",
      },

    ],


    expenses: [

      {

        id: "expense-1",

        title: "Dinner",

        description: "Welcome dinner",

        category: "food",

        amount: 120,

        paidBy: "Dinesh",

        createdAt: "2026-07-20T10:00:00",

        updatedAt: "2026-07-20T10:00:00",


        participants: [

          {
            name:"Dinesh",
            amount:40,
          },

          {
            name:"John",
            amount:40,
          },

          {
            name:"Sarah",
            amount:40,
          },

        ],

      },

    ],

  },

];