"use client";


import {
  useState
} from "react";


import {
  useEvent
} from "@/context/EventContext";


import AddExpenseModal
from "@/components/event/AddExpenseModal";


import EditExpenseModal
from "@/components/event/EditExpenseModal";


import ExpenseCard
from "@/components/event/ExpenseCard";


import {
  Expense
} from "@/context/EventTypes";







export default function EventExpenses(){





const {

currentEvent,

addExpense,

updateExpense,

}=useEvent();







const [showAddExpense,setShowAddExpense]=

useState(false);




const [editingExpense,setEditingExpense]=

useState<Expense|null>(null);







if(!currentEvent){


return (

<div

className="
rounded-xl
border
bg-white
p-6
"

>

Event not loaded.

</div>

);


}







const expenses =

currentEvent.expenses || [];






const totalSpent =

expenses.reduce(

(total,item)=>

total + item.amount,

0

);








return (

<section

className="
space-y-6
"

>





<div

className="
flex
justify-between
items-center
"

>


<div>


<h2 className="text-2xl font-bold">

Expenses

</h2>


<p className="text-gray-500">

Total:

${totalSpent.toFixed(2)}

</p>


</div>







<button

onClick={()=>setShowAddExpense(true)}

className="
rounded-lg
bg-blue-600
px-5
py-3
text-white
"

>

+ Add Expense

</button>




</div>








<div

className="
space-y-4
"

>


{

expenses.map(expense=>(


<ExpenseCard


key={expense.id}


id={expense.id}


title={expense.title}


description={expense.description}


category={expense.category}


amount={expense.amount}


paidBy={expense.paidBy}


participants={expense.participants}



onEdit={()=>


setEditingExpense(expense)


}



/>


))


}



</div>









<AddExpenseModal


open={showAddExpense}


onClose={()=>setShowAddExpense(false)}


onAddExpense={(expense)=>{


addExpense(expense);


setShowAddExpense(false);


}}


/>








<EditExpenseModal


open={

editingExpense !== null

}


expense={editingExpense}



onClose={()=>


setEditingExpense(null)


}




onSave={(expense)=>{


updateExpense(

expense.id,

expense

);


setEditingExpense(null);


}}


/>





</section>

);


}