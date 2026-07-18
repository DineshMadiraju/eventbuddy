"use client";

import { useState } from "react";

import EventOverview from "@/components/event/EventOverview";
import EventExpenses from "@/components/event/EventExpenses";
import EventBalances from "@/components/event/EventBalances";
import EventSettlements from "@/components/event/EventSettlements";





const tabs = [

  "Overview",

  "Expenses",

  "Balances",

  "Settlements",

] as const;




type Tab = typeof tabs[number];







export default function EventTabs() {


  const [

    activeTab,

    setActiveTab,

  ] = useState<Tab>("Overview");









  const renderContent = () => {


    switch(activeTab){



      case "Overview":

        return <EventOverview />;





      case "Expenses":

        return <EventExpenses />;





      case "Balances":

        return <EventBalances />;





      case "Settlements":

        return <EventSettlements />;




      default:

        return null;


    }


  };









  return (

    <div

      className="
        space-y-6
      "

    >





      <div

        className="
          rounded-xl
          border
          bg-white
          p-2
        "

      >



        <div

          className="
            grid
            grid-cols-2
            gap-2
            md:grid-cols-4
          "

        >



          {

            tabs.map(

              (tab)=>(


                <button


                  key={tab}


                  onClick={() =>

                    setActiveTab(tab)

                  }


                  className={`

                    rounded-lg

                    px-4

                    py-3

                    text-sm

                    font-medium

                    transition


                    ${

                      activeTab === tab

                      ?

                      "bg-blue-600 text-white"

                      :

                      "text-gray-600 hover:bg-gray-100"

                    }


                  `}


                >

                  {tab}


                </button>


              )

            )

          }




        </div>



      </div>









      {renderContent()}



    </div>

  );

}