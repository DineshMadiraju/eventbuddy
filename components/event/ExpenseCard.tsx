"use client";


import {
  useEvent
} from "@/context/EventContext";





type ExpenseCardProps = {

  id:string;

  title:string;

  description?:string;

  category:string;

  amount:number;

  paidBy:string;

  participants:{
    name:string;
    amount:number;
  }[];

  onEdit:()=>void;

};









const categoryIcons:{[key:string]:string} = {


food:"🍕",

transport:"🚗",

hotel:"🏨",

drinks:"🍺",

activity:"🎟",

shopping:"🛒",

other:"📦",

};








export default function ExpenseCard({

id,

title,

description,

category,

amount,

paidBy,

participants,

onEdit,

}:ExpenseCardProps){





const {

deleteExpense,

}=useEvent();








const handleDelete=()=>{


const confirmDelete=

window.confirm(

"Delete this expense?"

);



if(confirmDelete){

deleteExpense(id);

}


};







return (

<div

className="
rounded-xl
border
bg-white
p-5
shadow-sm
"

>






<div

className="
flex
justify-between
"

>



<div>



<div

className="
flex
items-center
gap-2
"

>


<span className="text-2xl">

{
categoryIcons[category]
||
"📦"
}

</span>



<h3

className="
text-xl
font-bold
"

>

{title}

</h3>



</div>








{

description &&

<p

className="
mt-2
text-sm
text-gray-500
"

>

{description}

</p>

}





<p

className="
mt-3
text-sm
"

>

Paid by:

<b>

 {paidBy}

</b>


</p>



</div>









<div

className="
text-right
"

>



<p

className="
text-2xl
font-bold
"

>

${amount.toFixed(2)}

</p>







<div

className="
mt-3
flex
gap-2
"

>


<button

onClick={onEdit}

className="
rounded-lg
border
px-3
py-1
text-sm
"

>

✏ Edit

</button>




<button

onClick={handleDelete}

className="
rounded-lg
bg-red-500
px-3
py-1
text-sm
text-white
"

>

🗑 Delete

</button>



</div>


</div>






</div>









<div

className="
mt-5
border-t
pt-4
"

>



<p

className="
mb-2
font-medium
"

>

Split Between

</p>






{

participants.map((person,index)=>(


<div

key={index}

className="
flex
justify-between
rounded-lg
bg-gray-50
px-3
py-2
"

>


<span>

{person.name}

</span>


<span>

${person.amount.toFixed(2)}

</span>



</div>



))


}



</div>





</div>

);


}