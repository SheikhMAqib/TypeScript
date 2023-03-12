"use strict";
//Generics
let arrNum = [1, 2, 3, 4, 5, 6];
let arrString = ['a', 'b', 'c', 'd', 'e', 'f'];
function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
let result;
getRandomElement(arrString);
getRandomElement(arrNum);
