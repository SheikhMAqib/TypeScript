//Generics Constraints

type Person  ={

   firstname : string
}

function getPerson<T extends Person> (data : T) {
   return data
}

const details = { Lastname : " Aqib " , firstname : "Mohammmad"}
console.log(getPerson(details));

