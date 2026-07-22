"use client";


import {
  useEvent
} from "@/context/EventContext";







export default function EventBalances(){





const {

currentEvent,

}=useEvent();








if(!currentEvent){


return (

<section

className="
rounded-xl
border
bg-white
p-6
"

>

<p className="text-gray-500">

Event not loaded.

</p>


</section>

);


}







const members =

currentEvent.members || [];



const expenses =

currentEvent.expenses || [];









const balances:{[key:string]:number} = {};







/*

Initialize every member balance

*/

members.forEach(member=>{


balances[member.name]=0;


});









/*

Calculate balances


Positive number =
person should receive money


Negative number =
person owes money


*/


expenses.forEach(expense=>{






// Person who paid gets credit

balances[expense.paidBy] +=

expense.amount;








// Participants owe their share

expense.participants.forEach(participant=>{


balances[participant.name] -=

participant.amount;


});



});









return (

<section

className="
rounded-2xl
border
bg-white
p-6
"

>



<h2

className="
text-2xl
font-bold
mb-5
"

>

Balances

</h2>







<div

className="
space-y-3
"

>



{

members.map(member=>{


const balance =

balances[member.name] || 0;






return (

<div

key={member.id}

className="
flex
justify-between
rounded-xl
bg-gray-50
p-4
"

>



<div>


<p className="font-medium">

{member.name}

</p>



</div>







<div

className={

balance > 0

?

"text-green-600 font-bold"

:

balance < 0

?

"text-red-600 font-bold"

:

"text-gray-500"

}

>


{

balance > 0

?

`Gets back $${balance.toFixed(2)}`


:

balance < 0

?

`Owes $${Math.abs(balance).toFixed(2)}`


:

"Settled"

}



</div>






</div>


);



})


}



</div>





</section>


);


}