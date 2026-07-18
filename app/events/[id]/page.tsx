"use client";

import { useEffect } from "react";

import { useParams } from "next/navigation";

import { useEvent } from "@/context/EventContext";

import EventHeader from "@/components/event/EventHeader";

import EventTabs from "@/components/event/EventTabs";





export default function EventPage() {


  const params = useParams();


  const eventId = params.id as string;




  const {
    getEventById,
    setCurrentEvent,
  } = useEvent();




  const event = getEventById(eventId);





  useEffect(() => {


    if(eventId){

      setCurrentEvent(eventId);

    }


  }, [eventId]);








  if(!event){


    return (

      <main

        className="
          flex
          min-h-screen
          items-center
          justify-center
          px-6
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

            Event not found

          </h1>


          <p

            className="
              mt-2
              text-gray-500
            "

          >

            This event does not exist.

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



      <EventHeader


        title={event.title}


        date={

          `${event.startDate} - ${event.endDate}`

        }


        location={event.location}


      />




      <EventTabs />


    </main>

  );

}