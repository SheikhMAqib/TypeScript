"use strict";
// Optional properties & Non -null Assertion 
let fruit1 = {
    name: "Mango",
    taste: "Sweet",
    color: "Yellow",
    allseason: false,
    price: 10
};
//  console.log(fruit1.price);
let fruit2 = {
    name: "orange",
    taste: "Sweet - tart",
    color: "orange",
    allseason: false
};
function getprice(price, discount) {
    if (discount)
        return price + discount;
}
console.log(getprice(fruit1.price));
console.log(getprice(fruit2.price));
