"use client";

import { useState } from "react";

import AddExpenseModal from "@/components/event/AddExpenseModal";
import ExpenseCard from "@/components/event/ExpenseCard";

import { useEvent } from "@/context/EventContext";







export default function EventExpenses() {


  const {

    currentEvent,

    updateCurrentEvent,

  } = useEvent();







  const [

    showAddExpense,

    setShowAddExpense

  ] = useState(false);









  if(!currentEvent){


    return (

      <section

        className="
          rounded-2xl
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









  const expenses =

    currentEvent.expenses;









  const handleAddExpense = (

    expense: typeof expenses[number]

  )=>{



    updateCurrentEvent({


      ...currentEvent,


      expenses:[

        ...currentEvent.expenses,

        expense,

      ],


    });



    setShowAddExpense(false);



  };









  return (

    <section

      className="
        rounded-2xl
        border
        bg-white
        p-6
      "

    >







      <div

        className="
          mb-6
          flex
          items-center
          justify-between
        "

      >



        <div>


          <h2

            className="
              text-2xl
              font-bold
              text-gray-900
            "

          >

            Expenses

          </h2>




          <p

            className="
              mt-1
              text-sm
              text-gray-500
            "

          >

            Track all event expenses

          </p>


        </div>









        <button

          onClick={()=>


            setShowAddExpense(true)


          }


          className="
            rounded-lg
            bg-blue-600
            px-5
            py-3
            font-medium
            text-white
            hover:bg-blue-700
          "

        >

          + Add Expense

        </button>





      </div>












      {

        expenses.length === 0 ?


        (

          <div

            className="
              rounded-xl
              bg-gray-50
              p-6
              text-center
              text-gray-500
            "

          >

            No expenses added yet.

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


              expenses.map(

                (expense,index)=>(


                  <ExpenseCard


                    key={index}


                    title={expense.title}


                    amount={expense.amount}


                    paidBy={expense.paidBy}


                    participants={

                      expense.participants

                    }


                  />


                )


              )


            }



          </div>


        )


      }









      <AddExpenseModal


        open={showAddExpense}


        onClose={()=>


          setShowAddExpense(false)


        }



        onAddExpense={handleAddExpense}



      />





    </section>


  );

}