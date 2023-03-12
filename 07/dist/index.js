"use strict";
function calTotalprice(price) {
    return +(price + (price * 0.18)).toFixed(1);
}
const priceofToy = calTotalprice(1233);
const Discountprice = priceofToy / 2;
console.log(Discountprice);
