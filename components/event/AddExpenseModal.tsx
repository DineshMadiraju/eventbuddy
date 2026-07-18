"use client";

import { useState } from "react";

import { useEvent } from "@/context/EventContext";



type AddExpenseModalProps = {

  open:boolean;

  onClose:()=>void;

  onAddExpense:(

    expense:{

      title:string;

      amount:number;

      paidBy:string;

      participants:{

        name:string;

        amount:number;

      }[];

    }

  )=>void;

};







const categories = [

  {
    value:"food",
    label:"🍕 Food",
  },

  {
    value:"hotel",
    label:"🏨 Hotel",
  },

  {
    value:"transport",
    label:"🚗 Transport",
  },

  {
    value:"tickets",
    label:"🎟 Tickets",
  },

  {
    value:"other",
    label:"📦 Other",
  },

];









export default function AddExpenseModal({

  open,

  onClose,

  onAddExpense,

}:AddExpenseModalProps){





  const {

    currentEvent,

  } = useEvent();







  const [

    title,

    setTitle

  ] = useState("");





  const [

    amount,

    setAmount

  ] = useState("");





  const [

    paidBy,

    setPaidBy

  ] = useState("");





  const [

    category,

    setCategory

  ] = useState("food");





  const [

    selectedMembers,

    setSelectedMembers

  ] = useState<string[]>([]);









  if(!open){

    return null;

  }







  const members =

    currentEvent?.members || [];









  const toggleMember = (

    name:string

  )=>{


    setSelectedMembers((previous)=>

      previous.includes(name)

      ?

      previous.filter(

        (item)=>

          item !== name

      )

      :

      [

        ...previous,

        name

      ]


    );


  };









  const splitAmount =


    selectedMembers.length > 0


    ?


    Number(amount || 0) /

    selectedMembers.length


    :


    0;









  const handleSave = ()=>{



    if(

      !title ||

      !amount ||

      !paidBy ||

      selectedMembers.length === 0

    ){


      alert(

        "Please complete all fields"

      );


      return;


    }









    onAddExpense({



      title,



      amount:

        Number(amount),




      paidBy,






      participants:

        selectedMembers.map(

          (name)=>(


            {

              name,


              amount:

                Number(

                  splitAmount.toFixed(2)

                )


            }


          )

        )



    });









    setTitle("");

    setAmount("");

    setPaidBy("");

    setSelectedMembers([]);

    setCategory("food");



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
          shadow-xl
        "

      >







        <div

          className="
            border-b
            px-6
            py-5
          "

        >


          <h2

            className="
              text-2xl
              font-bold
            "

          >

            Add Expense

          </h2>


        </div>









        <div

          className="
            space-y-5
            p-6
          "

        >





          <input


            value={title}


            onChange={(e)=>

              setTitle(

                e.target.value

              )

            }


            placeholder="Expense name"


            className="
              w-full
              rounded-lg
              border
              p-3
            "


          />









          <div

            className="
              grid
              grid-cols-2
              gap-4
            "

          >



            <select


              value={category}


              onChange={(e)=>

                setCategory(

                  e.target.value

                )

              }


              className="
                rounded-lg
                border
                p-3
              "


            >



              {

                categories.map(

                  (item)=>(


                    <option

                      key={item.value}

                      value={item.value}

                    >

                      {item.label}

                    </option>


                  )

                )

              }



            </select>









            <input


              type="number"


              value={amount}


              onChange={(e)=>

                setAmount(

                  e.target.value

                )

              }


              placeholder="Amount"


              className="
                rounded-lg
                border
                p-3
              "


            />




          </div>









          <select


            value={paidBy}


            onChange={(e)=>

              setPaidBy(

                e.target.value

              )

            }


            className="
              w-full
              rounded-lg
              border
              p-3
            "


          >


            <option value="">

              Paid By

            </option>





            {

              members.map(

                (member)=>(


                  <option


                    key={member.id}


                    value={member.name}


                  >

                    {member.name}


                  </option>


                )

              )

            }



          </select>












          <div>


            <h3

              className="
                mb-3
                font-medium
              "

            >

              Split Between

            </h3>






            <div

              className="
                space-y-2
              "

            >



              {

                members.map(

                  (member)=>(


                    <label


                      key={member.id}


                      className="
                        flex
                        items-center
                        gap-3
                        rounded-lg
                        border
                        p-3
                      "


                    >



                      <input


                        type="checkbox"


                        checked={

                          selectedMembers.includes(

                            member.name

                          )

                        }


                        onChange={()=>


                          toggleMember(

                            member.name

                          )


                        }


                      />




                      {member.name}





                    </label>


                  )

                )

              }



            </div>



          </div>









          <div

            className="
              rounded-lg
              bg-blue-50
              p-4
            "

          >

            Each person pays:

            <strong className="ml-2">

              ${splitAmount.toFixed(2)}

            </strong>


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


            onClick={handleSave}


            className="
              rounded-lg
              bg-blue-600
              px-5
              py-2
              text-white
            "


          >

            Save Expense

          </button>





        </div>





      </div>



    </div>

  );

}