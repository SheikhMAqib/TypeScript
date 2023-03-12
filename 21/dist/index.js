"use strict";
function getFruit(Fruit) {
    return `${Fruit.name} is having price of $${Fruit.price}`;
}
let mango = { name: 'Mango', price: 20 };
mango.price = 90;
console.log(getFruit(mango));
