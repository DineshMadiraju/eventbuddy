"use client";

import {
  useState
} from "react";

import {
  useRouter
} from "next/navigation";

import {
  useEvent
} from "@/context/EventContext";





export default function EventForm(){



  const router = useRouter();


  const {
    createEvent
  } = useEvent();





  const [eventData,setEventData] =

    useState({

      title:"",

      description:"",

      startDate:"",

      startTime:"",

      endDate:"",

      endTime:"",

      location:"",

    });









  const handleChange = (

    e:
    React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement
    >

  )=>{


    setEventData({

      ...eventData,

      [e.target.name]:
        e.target.value,


    });


  };









  const handleSubmit = (

    e:React.FormEvent<HTMLFormElement>

  )=>{


    e.preventDefault();





    const eventId =
      Date.now().toString();





    createEvent({

      id:eventId,


      title:eventData.title,


      description:
        eventData.description,


      startDate:
        eventData.startDate,


      startTime:
        eventData.startTime,


      endDate:
        eventData.endDate,


      endTime:
        eventData.endTime,


      location:
        eventData.location,



      members:[

        {

          id:"1",

          name:"Dinesh",

          status:"accepted",

        }

      ],



      expenses:[],


    });






    router.push(

      `/events/${eventId}`

    );


  };








  return (

    <form

      onSubmit={handleSubmit}

      className="
        rounded-xl
        border
        bg-white
        p-8
        shadow-sm
        space-y-6
      "

    >



      <input

        name="title"

        value={eventData.title}

        onChange={handleChange}

        placeholder="Event Name"

        className="
          w-full
          rounded-lg
          border
          p-3
        "

      />






      <textarea

        name="description"

        value={eventData.description}

        onChange={handleChange}

        placeholder="Description"

        className="
          w-full
          rounded-lg
          border
          p-3
        "

      />








      <div className="grid md:grid-cols-2 gap-4">


        <input

          type="date"

          name="startDate"

          value={eventData.startDate}

          onChange={handleChange}

          className="
            rounded-lg
            border
            p-3
          "

        />



        <input

          type="time"

          name="startTime"

          value={eventData.startTime}

          onChange={handleChange}

          className="
            rounded-lg
            border
            p-3
          "

        />



        <input

          type="date"

          name="endDate"

          value={eventData.endDate}

          onChange={handleChange}

          className="
            rounded-lg
            border
            p-3
          "

        />



        <input

          type="time"

          name="endTime"

          value={eventData.endTime}

          onChange={handleChange}

          className="
            rounded-lg
            border
            p-3
          "

        />


      </div>








      <input

        name="location"

        value={eventData.location}

        onChange={handleChange}

        placeholder="Location"

        className="
          w-full
          rounded-lg
          border
          p-3
        "

      />








      <button

        type="submit"

        className="
          w-full
          rounded-lg
          bg-blue-600
          py-3
          text-white
          font-medium
        "

      >

        Create Event Proposal

      </button>




    </form>


  );

}