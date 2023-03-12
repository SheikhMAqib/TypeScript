"use strict";
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    abcd() { }
}
class MyCoordinate extends Coordinate {
    get X() {
        return this.x;
    }
    set X(value) {
        this.x = value;
    }
}
const point = new MyCoordinate(44, 5);
point.X = 55;
console.log(point.X);
