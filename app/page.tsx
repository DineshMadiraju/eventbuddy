import GuestEventButton from "@/components/auth/GuestEventButton";
import SocialLogin from "@/components/auth/SocialLogin";
import LoginForm from "@/components/auth/LoginForm";


export default function Home() {

  return (

    <main className="min-h-screen bg-gray-100">

      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">


        {/* Left Section */}

        <section
          className="
            flex
            flex-col
            justify-center
            px-10
            md:px-20
          "
        >

          <h1 className="text-5xl font-bold text-gray-900">

            EventBuddy 🎉

          </h1>


          <p className="
            mt-6
            max-w-lg
            text-lg
            text-gray-600
          ">

            Plan events, create polls,
            make decisions together,
            and share expenses with friends.

          </p>


          <div className="mt-8 max-w-md">

            <GuestEventButton />

          </div>


        </section>



        {/* Right Section */}

        <section
          className="
            flex
            items-center
            justify-center
            p-8
          "
        >

          <div
            className="
              w-full
              max-w-md
              rounded-2xl
              bg-white
              p-8
              shadow-lg
            "
          >

            <h2
              className="
                mb-6
                text-center
                text-2xl
                font-bold
              "
            >

              Join EventBuddy

            </h2>


            <SocialLogin />


            <div className="
              my-6
              flex
              items-center
              gap-3
            ">

              <div className="h-px flex-1 bg-gray-300" />

              <span className="text-sm text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-300" />


            </div>


            <LoginForm />


          </div>


        </section>


      </div>


    </main>

  );
}