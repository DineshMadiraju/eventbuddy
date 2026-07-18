"use client";

import { useEvent } from "@/context/EventContext";





export default function EventBalances() {


  const {

    currentEvent,

  } = useEvent();







  if(!currentEvent){


    return (

      <section

        className="
          rounded-xl
          border
          bg-white
          p-6
        "

      >

        <p className="text-gray-500">

          Event not loaded.

        </p>


      </section>

    );


  }








  const balances: Record<string, number> = {};








  // Initialize members

  currentEvent.members.forEach(

    (member)=>{


      balances[member.name] = 0;


    }

  );









  // Calculate balances

  currentEvent.expenses.forEach(

    (expense)=>{



      // Person who paid gets credit

      balances[expense.paidBy] =

        (balances[expense.paidBy] || 0)

        +

        expense.amount;







      // Participants owe their share

      expense.participants.forEach(

        (participant)=>{


          balances[participant.name] =

            (balances[participant.name] || 0)

            -

            participant.amount;


        }

      );



    }

  );









  return (

    <section

      className="
        rounded-xl
        border
        bg-white
        p-6
      "

    >




      <div className="mb-6">


        <h2

          className="
            text-2xl
            font-bold
            text-gray-900
          "

        >

          Balances

        </h2>




        <p

          className="
            mt-1
            text-sm
            text-gray-500
          "

        >

          See who owes money and who should receive money.

        </p>


      </div>









      <div

        className="
          space-y-4
        "

      >



        {

          Object.entries(balances).map(

            ([name,amount])=>(


              <div

                key={name}

                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  bg-gray-50
                  p-4
                "

              >




                <div

                  className="
                    flex
                    items-center
                    gap-3
                  "

                >



                  <div

                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-200
                      font-semibold
                    "

                  >

                    {

                      name
                        .charAt(0)
                        .toUpperCase()

                    }


                  </div>





                  <span className="font-medium">

                    {name}

                  </span>



                </div>









                <div>


                  {

                    amount > 0 && (

                      <span

                        className="
                          font-semibold
                          text-green-600
                        "

                      >

                        Gets back $

                        {amount.toFixed(2)}


                      </span>


                    )

                  }







                  {

                    amount < 0 && (

                      <span

                        className="
                          font-semibold
                          text-red-600
                        "

                      >

                        Owes $

                        {Math.abs(amount).toFixed(2)}


                      </span>


                    )

                  }







                  {

                    amount === 0 && (

                      <span

                        className="
                          font-semibold
                          text-gray-500
                        "

                      >

                        Settled

                      </span>


                    )

                  }





                </div>





              </div>


            )


          )

        }



      </div>





    </section>

  );

}