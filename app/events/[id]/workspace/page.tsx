"use client";

import {
  useEffect,
} from "react";


import {
  useParams,
} from "next/navigation";


import {
  useEvent,
} from "@/context/EventContext";


import EventHeader from "@/components/event/EventHeader";

import EventOverview from "@/components/event/EventOverview";

import EventTabs from "@/components/event/EventTabs";








export default function EventWorkspacePage() {



  const params = useParams();



  const eventId =

    params.id as string;







  const {

    currentEvent,

    setCurrentEvent,

  } = useEvent();








  useEffect(()=>{


    if(eventId){


      setCurrentEvent(eventId);


    }


  },[

    eventId,

    setCurrentEvent

  ]);









  if(!currentEvent){


    return (

      <main

        className="
          flex
          min-h-screen
          items-center
          justify-center
          bg-gray-50
        "

      >


        <div

          className="
            rounded-xl
            border
            bg-white
            p-8
            text-center
          "

        >


          <h1

            className="
              text-2xl
              font-bold
              text-gray-900
            "

          >

            Loading Event...

          </h1>



          <p

            className="
              mt-2
              text-gray-500
            "

          >

            Please wait while the event loads.

          </p>



        </div>


      </main>

    );


  }









  return (

    <main

      className="
        mx-auto
        max-w-6xl
        space-y-6
        px-6
        py-10
      "

    >







      {/* Event Header */}


      <EventHeader />









      {/* Workspace Tabs */}


      <EventTabs />









    </main>

  );

}