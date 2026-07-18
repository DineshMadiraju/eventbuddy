"use client";

import { useState } from "react";

import { useEvent } from "@/context/EventContext";



type InviteFriendsModalProps = {

  open:boolean;

  onClose:()=>void;

};







const suggestedUsers = [

  {
    id:"5",
    name:"Alex Johnson",
  },

  {
    id:"6",
    name:"Emma Wilson",
  },

  {
    id:"7",
    name:"David Smith",
  },

];









export default function InviteFriendsModal({

  open,

  onClose,

}:InviteFriendsModalProps){





  const {

    currentEvent,

    addMemberToEvent,

  } = useEvent();







  const [

    search,

    setSearch

  ] = useState("");




  const [

    email,

    setEmail

  ] = useState("");




  const [

    phone,

    setPhone

  ] = useState("");




  const [

    selectedUser,

    setSelectedUser

  ] = useState<string | null>(null);







  const inviteLink =

    "https://eventbuddy.app/invite/ABCD1234";








  if(!open){

    return null;

  }









  const handleCopy = async()=>{


    await navigator.clipboard.writeText(

      inviteLink

    );


    alert(

      "Invite link copied!"

    );


  };









  const handleInvite = ()=>{


    let invitedName = "";







    if(selectedUser){



      const user =

        suggestedUsers.find(

          (item)=>

            item.id === selectedUser

        );



      if(user){

        invitedName = user.name;

      }



    }



    else if(email){


      invitedName =

        email.split("@")[0];


    }



    else if(phone){


      invitedName = phone;


    }



    else{


      alert(

        "Please select or enter someone to invite"

      );


      return;


    }









    const alreadyExists =

      currentEvent?.members.some(

        (member)=>

          member.name.toLowerCase() ===

          invitedName.toLowerCase()

      );







    if(alreadyExists){


      alert(

        "This person is already invited"

      );


      return;


    }









    addMemberToEvent({



      id:

        Date.now().toString(),




      name:

        invitedName,




      status:

        "pending",



    });








    alert(

      `${invitedName} invited`

    );








    setSearch("");

    setEmail("");

    setPhone("");

    setSelectedUser(null);



    onClose();


  };












  return (

    <div

      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/50
        p-4
      "

    >



      <div

        className="
          w-full
          max-w-xl
          rounded-2xl
          bg-white
        "

      >






        <div

          className="
            border-b
            px-6
            py-5
          "

        >


          <h2 className="text-2xl font-bold">

            Invite Friends

          </h2>


          <p className="mt-1 text-sm text-gray-500">

            Add people to this event

          </p>



        </div>








        <div

          className="
            space-y-6
            p-6
          "

        >





          <input

            value={search}

            onChange={(e)=>

              setSearch(e.target.value)

            }


            placeholder="Search friends"


            className="
              w-full
              rounded-lg
              border
              p-3
            "


          />









          <div className="space-y-3">


            {

              suggestedUsers

              .filter((user)=>

                user.name

                .toLowerCase()

                .includes(

                  search.toLowerCase()

                )

              )

              .map((user)=>(



                <button


                  key={user.id}


                  onClick={()=>


                    setSelectedUser(user.id)


                  }


                  className={`

                    flex

                    w-full

                    justify-between

                    rounded-lg

                    border

                    p-3


                    ${

                      selectedUser === user.id

                      ?

                      "border-blue-600 bg-blue-50"

                      :

                      ""

                    }


                  `}


                >


                  👤 {user.name}



                  {

                    selectedUser === user.id &&

                    <span>

                      ✓

                    </span>

                  }



                </button>


              ))

            }


          </div>









          <input

            type="email"

            value={email}

            onChange={(e)=>

              setEmail(e.target.value)

            }

            placeholder="friend@email.com"

            className="
              w-full
              rounded-lg
              border
              p-3
            "

          />









          <input

            value={phone}

            onChange={(e)=>

              setPhone(e.target.value)

            }

            placeholder="+1 555 555 5555"

            className="
              w-full
              rounded-lg
              border
              p-3
            "

          />








          <div

            className="
              rounded-xl
              bg-gray-50
              p-4
            "

          >


            <p className="font-medium">

              Share Event Link

            </p>




            <div

              className="
                mt-3
                flex
                gap-3
              "

            >


              <input

                readOnly

                value={inviteLink}

                className="
                  flex-1
                  rounded-lg
                  border
                  bg-white
                  p-3
                "

              />



              <button

                onClick={handleCopy}

                className="
                  rounded-lg
                  bg-blue-600
                  px-4
                  text-white
                "

              >

                Copy

              </button>


            </div>


          </div>




        </div>









        <div

          className="
            flex
            justify-end
            gap-3
            border-t
            px-6
            py-4
          "

        >



          <button

            onClick={onClose}

            className="
              rounded-lg
              border
              px-5
              py-2
            "

          >

            Cancel

          </button>





          <button

            onClick={handleInvite}

            className="
              rounded-lg
              bg-blue-600
              px-5
              py-2
              text-white
            "

          >

            Send Invite

          </button>



        </div>




      </div>


    </div>

  );

}