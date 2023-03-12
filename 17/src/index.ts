// Optional properties & Non -null Assertion 


type Fruit = {
    name : string ,
    taste : string ,
    color : string ,
    allseason : boolean
    price? : number 
 } 
  

 let fruit1: Fruit = {
    
    name : "Mango",
    taste : "Sweet",
    color : "Yellow",
    allseason : false ,
    price : 10 
      
 }

//  console.log(fruit1.price);
 
 
 let fruit2 :Fruit = {
    name : "orange",
    taste : "Sweet - tart",
    color : "orange",
    allseason : false
 }

function getprice(price:number, discount?  : number) {
   if (discount)
   return price + discount

   
}

 console.log(getprice(fruit1.price!));
 console.log(getprice(fruit2.price!));
