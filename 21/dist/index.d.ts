interface Fruit {
    name: string;
    price: number;
    color?: string;
}
declare function getFruit(Fruit: Fruit): string;
declare let mango: {
    name: string;
    price: number;
};
