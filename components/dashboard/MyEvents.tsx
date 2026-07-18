"use client";

import EventCard from "@/components/dashboard/EventCard";

import { useEvent } from "@/context/EventContext";





export default function MyEvents(){



  const {

    events

  } = useEvent();







  return (

    <section>


      <h2

        className="
          mb-5
          text-2xl
          font-semibold
          text-gray-900
        "

      >

        My Events

      </h2>







      {

        events.length === 0 ?


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

            No events yet.

          </div>


        )


        :


        (

          <div

            className="
              space-y-5
            "

          >



            {

              events.map((event)=>(



                <EventCard


                  key={event.id}



                  id={event.id}



                  title={event.title}



                  date={

                    `${event.startDate} - ${event.endDate}`

                  }



                  location={event.location}



                  status={

                    event.members.some(

                      (member)=>

                        member.status==="pending"

                    )

                    ?

                    "PROPOSED"

                    :

                    "CONFIRMED"

                  }



                  members={

                    event.members.length

                  }



                  organizer={true}



                />



              ))

            }



          </div>


        )


      }




    </section>

  );

}