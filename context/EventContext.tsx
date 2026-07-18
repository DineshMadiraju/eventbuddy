"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";



export type Member = {

  id:string;

  name:string;

  status:"accepted" | "pending";

};



export type Expense = {

  title:string;

  amount:number;

  paidBy:string;

  participants:{

    name:string;

    amount:number;

  }[];

};




export type Event = {

  id:string;

  title:string;

  description:string;

  startDate:string;

  startTime:string;

  endDate:string;

  endTime:string;

  location:string;

  members:Member[];

  expenses:Expense[];

};





type EventContextType = {


  events:Event[];

  currentEvent:Event|null;


  createEvent:(

    event:Event

  )=>void;



  getEventById:(

    id:string

  )=>Event|undefined;



  setCurrentEvent:(

    id:string

  )=>void;



  addMemberToEvent:(

    member:Member

  )=>void;



  addExpense:(

    expense:Expense

  )=>void;


};







const EventContext =

createContext<EventContextType | undefined>(undefined);








export function EventProvider({

children,

}:{

children:ReactNode;

}){





const [events,setEvents] = useState<Event[]>([

{

id:"1",

title:"🏖 Beach Trip",

description:"Trip with friends",

startDate:"2026-08-20",

startTime:"10:00",

endDate:"2026-08-25",

endTime:"18:00",

location:"Miami Beach",


members:[


{

id:"1",

name:"Dinesh",

status:"accepted",

},


{

id:"2",

name:"John",

status:"accepted",

},


{

id:"3",

name:"Sarah",

status:"accepted",

},


],



expenses:[

{

title:"Dinner",

amount:120,

paidBy:"Dinesh",

participants:[

{

name:"Dinesh",

amount:40,

},

{

name:"John",

amount:40,

},

{

name:"Sarah",

amount:40,

},

],

},

],


}


]);








const [currentEvent,setCurrentEventState] =

useState<Event|null>(null);









const createEvent=(event:Event)=>{


setEvents((previous)=>[

...previous,

event

]);


};









const getEventById=(id:string)=>{


return events.find(

(event)=>

event.id===id

);


};









const setCurrentEvent=(id:string)=>{


const event = events.find(

(item)=>

item.id===id

);



if(event){


setCurrentEventState({

...event,

members:[...event.members],

expenses:[...event.expenses]

});


}


};









const addMemberToEvent=(member:Member)=>{


setEvents((previous)=>{


const updatedEvents = previous.map((event)=>{


if(event.id !== currentEvent?.id){

return event;

}



return {


...event,


members:[

...event.members,

member

]


};



});





const updatedEvent = updatedEvents.find(

(event)=>

event.id===currentEvent?.id

);





if(updatedEvent){


setCurrentEventState(updatedEvent);


}




return updatedEvents;



});



};









const addExpense=(expense:Expense)=>{


setEvents((previous)=>{


const updatedEvents = previous.map((event)=>{


if(event.id !== currentEvent?.id){

return event;

}



return {


...event,


expenses:[

...event.expenses,

expense

]


};



});





const updatedEvent = updatedEvents.find(

(event)=>

event.id===currentEvent?.id

);





if(updatedEvent){


setCurrentEventState(updatedEvent);


}




return updatedEvents;



});



};









return (

<EventContext.Provider

value={{

events,

currentEvent,

createEvent,

getEventById,

setCurrentEvent,

addMemberToEvent,

addExpense,

}}

>


{children}


</EventContext.Provider>

);


}







export function useEvent(){


const context = useContext(EventContext);



if(!context){

throw new Error(

"useEvent must be used inside EventProvider"

);

}



return context;


}