"use client";

import { useState } from "react";

import InviteFriendsModal from "@/components/event/InviteFriendsModal";
import { useEvent } from "@/context/EventContext";



type StatCardProps = {
  emoji: string;
  value: string | number;
  label: string;
};





function StatCard({
  emoji,
  value,
  label,
}: StatCardProps) {


  return (

    <div
      className="
        rounded-xl
        border
        bg-gray-50
        p-5
        transition
        hover:shadow-md
      "
    >

      <div className="text-3xl">
        {emoji}
      </div>


      <div
        className="
          mt-3
          text-2xl
          font-bold
          text-gray-900
        "
      >
        {value}
      </div>


      <div
        className="
          mt-1
          text-sm
          text-gray-500
        "
      >
        {label}
      </div>


    </div>

  );

}









export default function EventHeader(){


  const {
    currentEvent,
  } = useEvent();




  const [
    showInviteModal,
    setShowInviteModal
  ] = useState(false);





  if(!currentEvent){

    return null;

  }






  const totalSpent =

    currentEvent.expenses.reduce(

      (total,expense)=>

        total + expense.amount,

      0

    );







  const outstanding =

    currentEvent.expenses.reduce(

      (total,expense)=>{


        const splitAmount =

          expense.participants.reduce(

            (sum,person)=>

              sum + person.amount,

            0

          );



        return (

          total +

          (expense.amount - splitAmount)

        );


      },

      0

    );









  const eventLink =

    `https://eventbuddy.app/invite/${currentEvent.id}`;









  const handleShare = async()=>{


    try{


      if(navigator.share){


        await navigator.share({

          title:
            currentEvent.title,

          text:
            `Join my event "${currentEvent.title}" on EventBuddy!`,

          url:
            eventLink,

        });


      }

      else{


        await navigator.clipboard.writeText(
          eventLink
        );


        alert(
          "Event link copied!"
        );


      }


    }

    catch(error){


      console.log(error);


    }


  };









  return (

    <>


      <section

        className="
          rounded-2xl
          border
          bg-white
          p-8
          shadow-sm
        "

      >



        {/* Header */}


        <div

          className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-start
            lg:justify-between
          "

        >



          <div>


            <h1

              className="
                text-3xl
                font-bold
                text-gray-900
              "

            >

              {currentEvent.title}

            </h1>





            <div

              className="
                mt-3
                flex
                flex-wrap
                gap-5
                text-gray-600
              "

            >

              <span>

                📅{" "}

                {

                  currentEvent.date ||

                  `${currentEvent.startDate} - ${currentEvent.endDate}`

                }

              </span>



              <span>

                📍{" "}

                {currentEvent.location}

              </span>



            </div>



          </div>






          <div

            className="
              flex
              items-center
              gap-3
            "

          >


            <span

              className="
                rounded-full
                bg-green-100
                px-4
                py-2
                text-sm
                font-medium
                text-green-700
              "

            >

              Active

            </span>


          </div>



        </div>









        {/* Stats */}


        <div

          className="
            mt-8
            grid
            grid-cols-2
            gap-4
            lg:grid-cols-4
          "

        >



          <StatCard

            emoji="👥"

            value={
              currentEvent.members.length
            }

            label="Members"

          />





          <StatCard

            emoji="💳"

            value={
              currentEvent.expenses.length
            }

            label="Expenses"

          />





          <StatCard

            emoji="💰"

            value={
              `$${totalSpent.toFixed(2)}`
            }

            label="Total Spent"

          />





          <StatCard

            emoji="⚖️"

            value={
              `$${outstanding.toFixed(2)}`
            }

            label="Outstanding"

          />



        </div>









        {/* Actions */}



        <div

          className="
            mt-8
            flex
            flex-wrap
            gap-4
          "

        >



          <button

            onClick={()=>
              setShowInviteModal(true)
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

            + Invite Friends

          </button>






          <button

            onClick={handleShare}

            className="
              rounded-lg
              border
              px-5
              py-3
              hover:bg-gray-100
            "

          >

            Share Event

          </button>







          <button

            className="
              rounded-lg
              border
              px-5
              py-3
              hover:bg-gray-100
            "

          >

            Event Settings

          </button>




        </div>





      </section>









      <InviteFriendsModal

        open={showInviteModal}

        onClose={()=>
          setShowInviteModal(false)
        }

      />



    </>

  );

}