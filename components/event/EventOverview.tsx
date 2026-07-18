"use client";


import { useEvent } from "@/context/EventContext";





export default function EventOverview(){



const {

currentEvent

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







const totalSpent =

currentEvent.expenses.reduce(

(total,expense)=>

total + expense.amount,

0

);







const acceptedMembers =

currentEvent.members.filter(

(member)=>

member.status==="accepted"

);







const pendingMembers =

currentEvent.members.filter(

(member)=>

member.status==="pending"

);









return (

<section

className="
space-y-6
"

>





<div

className="
rounded-2xl
border
bg-white
p-6
"

>


<h2 className="text-2xl font-bold">

About Event

</h2>



<p className="mt-3 text-gray-600">

{currentEvent.description ||

"No description added for this event."}

</p>



</div>







<div

className="
grid
gap-4
md:grid-cols-3
"

>



<div

className="
rounded-xl
border
bg-white
p-5
"

>


<p className="text-sm text-gray-500">

Members

</p>



<p className="mt-2 text-3xl font-bold">

{currentEvent.members.length}

</p>


</div>






<div

className="
rounded-xl
border
bg-white
p-5
"

>


<p className="text-sm text-gray-500">

Expenses

</p>



<p className="mt-2 text-3xl font-bold">

{currentEvent.expenses.length}

</p>


</div>






<div

className="
rounded-xl
border
bg-white
p-5
"

>


<p className="text-sm text-gray-500">

Total Spent

</p>



<p className="mt-2 text-3xl font-bold">

${totalSpent.toFixed(2)}

</p>


</div>



</div>







<div

className="
rounded-2xl
border
bg-white
p-6
"

>


<div className="flex justify-between mb-5">


<h2 className="text-xl font-bold">

Members

</h2>



<span className="text-sm text-gray-500">

{pendingMembers.length} pending

</span>


</div>







<div className="space-y-3">


{

currentEvent.members.map((member)=>(


<div

key={member.id}

className="
flex
items-center
justify-between
rounded-xl
bg-gray-50
p-3
"

>


<span className="font-medium">

{member.name}

</span>




<span

className={

member.status==="accepted"

?

"text-green-600"

:

"text-yellow-600"

}

>

{member.status}

</span>



</div>


))


}



</div>


</div>







</section>

);


}