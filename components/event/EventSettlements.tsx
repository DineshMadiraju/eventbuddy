"use client";

import { useEvent } from "@/context/EventContext";



type Settlement = {

  from: string;

  to: string;

  amount: number;

};






export default function EventSettlements() {


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








  currentEvent.members.forEach(

    (member)=>{


      balances[member.name] = 0;


    }

  );









  currentEvent.expenses.forEach(

    (expense)=>{


      // Person who paid gets credit

      balances[expense.paidBy] =

        (balances[expense.paidBy] || 0)

        +

        expense.amount;







      // Everyone owes their share

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









  const creditors =

    Object.entries(balances)

      .filter(

        ([,amount]) => amount > 0

      )

      .map(

        ([name,amount])=>(

          {

            name,

            amount,

          }

        )

      );








  const debtors =

    Object.entries(balances)

      .filter(

        ([,amount]) => amount < 0

      )

      .map(

        ([name,amount])=>(

          {

            name,

            amount: Math.abs(amount),

          }

        )

      );









  const settlements: Settlement[] = [];









  debtors.forEach(

    (debtor)=>{


      let remaining = debtor.amount;






      creditors.forEach(

        (creditor)=>{


          if(remaining <= 0){

            return;

          }






          if(creditor.amount <= 0){

            return;

          }







          const payment = Math.min(

            remaining,

            creditor.amount

          );







          settlements.push({

            from: debtor.name,

            to: creditor.name,

            amount: payment,

          });







          remaining -= payment;


          creditor.amount -= payment;



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





      <h2

        className="
          text-2xl
          font-bold
          text-gray-900
        "

      >

        Settlements

      </h2>







      <p

        className="
          mt-1
          mb-6
          text-sm
          text-gray-500
        "

      >

        Final payment breakdown between members.

      </p>









      {

        settlements.length === 0 ?


        (

          <div

            className="
              rounded-xl
              bg-gray-50
              p-5
              text-center
              text-gray-500
            "

          >

            No pending settlements.

          </div>


        )


        :


        (

          <div

            className="
              space-y-4
            "

          >



            {

              settlements.map(

                (settlement,index)=>(


                  <div

                    key={index}

                    className="
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      bg-gray-50
                      p-4
                    "

                  >





                    <div>


                      <span className="font-semibold">

                        {settlement.from}

                      </span>



                      <span className="mx-2 text-gray-500">

                        pays

                      </span>



                      <span className="font-semibold">

                        {settlement.to}

                      </span>



                    </div>







                    <div

                      className="
                        font-bold
                        text-green-600
                      "

                    >

                      ${settlement.amount.toFixed(2)}

                    </div>



                  </div>


                )

              )

            }



          </div>


        )

      }






    </section>

  );

}