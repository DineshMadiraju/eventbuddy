"use client";


import {
  useEvent
} from "@/context/EventContext";







type BalanceMap = {

  [name:string]:number;

};







export default function EventSettlements(){





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









const balances:BalanceMap = {};







members.forEach(member=>{


balances[member.name]=0;


});









expenses.forEach(expense=>{



// payer receives money

balances[expense.paidBy] +=

expense.amount;





// participants owe money

expense.participants.forEach(person=>{


balances[person.name] -=

person.amount;


});


});









const creditors = Object.entries(balances)

.filter(

([,amount])=>

amount > 0

)

.map(([name,amount])=>({

name,

amount

}));







const debtors = Object.entries(balances)

.filter(

([,amount])=>

amount < 0

)

.map(([name,amount])=>({

name,

amount:Math.abs(amount)

}));









const settlements:{


from:string;

to:string;

amount:number;


}[]=[];









let creditorIndex=0;

let debtorIndex=0;








while(

creditorIndex < creditors.length &&

debtorIndex < debtors.length

){



const creditor =

creditors[creditorIndex];



const debtor =

debtors[debtorIndex];





const payment =

Math.min(

creditor.amount,

debtor.amount

);







settlements.push({

from:debtor.name,

to:creditor.name,

amount:payment,

});







creditor.amount -= payment;





debtor.amount -= payment;







if(

creditor.amount === 0

){

creditorIndex++;

}



if(

debtor.amount === 0

){

debtorIndex++;

}



}









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
mb-5
text-2xl
font-bold
"

>

Settlements

</h2>







{

settlements.length===0

?

(

<div

className="
rounded-xl
bg-gray-50
p-5
text-gray-500
"

>

Everyone is settled 🎉

</div>

)

:

(

<div

className="
space-y-3
"

>


{

settlements.map((item,index)=>(


<div

key={index}

className="
rounded-xl
bg-gray-50
p-4
"

>


<p className="text-lg">


<b>

{item.from}

</b>


{" owes "}


<b>

{item.to}

</b>


</p>





<p

className="
mt-1
text-xl
font-bold
text-blue-600
"

>

${item.amount.toFixed(2)}

</p>



</div>



))


}



</div>

)

}





</section>


);


}