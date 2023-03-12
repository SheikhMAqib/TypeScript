// Object type

type Fruit = {
   name : string ,
   taste : string ,
   color : string ,
   allseason : boolean
} 

let fruit1: Fruit = {
   
   name : "Mango",
   taste : "Sweet",
   color : "Yellow",
   allseason : false ,
}

let fruit2 :Fruit = {
   name : "orange",
   taste : "Sweet - tart",
   color : "orange",
   allseason : false
}

console.log(typeof fruit1.allseason);
