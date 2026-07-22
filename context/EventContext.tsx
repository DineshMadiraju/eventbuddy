"use client";


import {

  createContext,

  useContext,

  useState,

  ReactNode,

} from "react";


import {

  Event,

  Member,

  Expense,

} from "./EventTypes";







type EventContextType = {


  events: Event[];


  currentEvent: Event | null;



  createEvent:(

    event:Event

  )=>void;




  getEventById:(

    id:string

  )=>Event | undefined;




  setCurrentEvent:(

    id:string

  )=>void;




  addMemberToEvent:(

    member:Member

  )=>void;





  addExpense:(

    expense:Expense

  )=>void;





  updateExpense:(

    id:string,

    expense:Expense

  )=>void;





  deleteExpense:(

    id:string

  )=>void;


};









const EventContext =

createContext<EventContextType | undefined>(undefined);









export function EventProvider({

children,

}:{

children:ReactNode;

}){





const [events,setEvents] =

useState<Event[]>([


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

id:"expense-1",

title:"Dinner",

description:"Welcome dinner",

category:"food",

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


createdAt:

new Date().toISOString(),


updatedAt:

new Date().toISOString(),


}


]



}


]);









const [

currentEvent,

setCurrentEventState

] =

useState<Event|null>(null);












// CREATE EVENT

const createEvent=(

event:Event

)=>{


setEvents(previous=>[

...previous,

event

]);


};












// FIND EVENT

const getEventById=(

id:string

)=>{


return events.find(

event=>

event.id===id

);


};











// LOAD CURRENT EVENT

const setCurrentEvent=(

id:string

)=>{


const event =

events.find(

item=>

item.id===id

);





if(event){


setCurrentEventState({

...event,

members:[...event.members],

expenses:[...event.expenses],

});


}



};












// ADD MEMBER

const addMemberToEvent=(

member:Member

)=>{


if(!currentEvent){

return;

}





setEvents(previous=>{


const updatedEvents =

previous.map(event=>{


if(event.id !== currentEvent.id){

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





const updatedEvent =

updatedEvents.find(

event=>

event.id===currentEvent.id

);





if(updatedEvent){


setCurrentEventState({

...updatedEvent,

members:[...updatedEvent.members],

expenses:[...updatedEvent.expenses],

});


}




return updatedEvents;


});


};











// ADD EXPENSE

const addExpense=(

expense:Expense

)=>{


if(!currentEvent){

return;

}





setEvents(previous=>{


const updatedEvents =

previous.map(event=>{


if(event.id !== currentEvent.id){

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






const updatedEvent =

updatedEvents.find(

event=>

event.id===currentEvent.id

);





if(updatedEvent){


setCurrentEventState({

...updatedEvent,

members:[...updatedEvent.members],

expenses:[...updatedEvent.expenses],

});


}





return updatedEvents;


});



};











// UPDATE EXPENSE

const updateExpense=(

id:string,

updatedExpense:Expense

)=>{


if(!currentEvent){

return;

}





setEvents(previous=>{


const updatedEvents =

previous.map(event=>{


if(event.id !== currentEvent.id){

return event;

}





return {


...event,


expenses:

event.expenses.map(expense=>


expense.id===id

?

updatedExpense

:

expense


)


};


});








const updatedEvent =

updatedEvents.find(

event=>

event.id===currentEvent.id

);






if(updatedEvent){


setCurrentEventState({

...updatedEvent,

members:[...updatedEvent.members],

expenses:[...updatedEvent.expenses],

});


}





return updatedEvents;



});



};











// DELETE EXPENSE

const deleteExpense=(

id:string

)=>{


if(!currentEvent){

return;

}







setEvents(previous=>{


const updatedEvents =

previous.map(event=>{


if(event.id !== currentEvent.id){

return event;

}





return {


...event,


expenses:

event.expenses.filter(

expense=>

expense.id!==id

)


};



});







const updatedEvent =

updatedEvents.find(

event=>

event.id===currentEvent.id

);





if(updatedEvent){


setCurrentEventState({

...updatedEvent,

members:[...updatedEvent.members],

expenses:[...updatedEvent.expenses],

});


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


updateExpense,


deleteExpense,


}}


>


{children}


</EventContext.Provider>


);



}









export function useEvent(){


const context =

useContext(EventContext);





if(!context){


throw new Error(

"useEvent must be used inside EventProvider"

);


}



return context;


}