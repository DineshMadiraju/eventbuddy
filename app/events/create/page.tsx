import EventForm from "@/components/event/EventForm";


export default function CreateEventPage() {

  return (

    <main
      className="
        mx-auto
        max-w-4xl
        px-6
        py-10
      "
    >

      <div className="mb-8">

        <h1
          className="
            text-3xl
            font-bold
            text-gray-900
          "
        >
          Create Event
        </h1>


        <p
          className="
            mt-2
            text-gray-600
          "
        >
          Plan an event and invite friends to join.
        </p>

      </div>


      <EventForm />


    </main>

  );
}