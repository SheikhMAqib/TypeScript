declare type Fruit = {
    name: string;
    taste: string;
    color: string;
    allseason: boolean;
    price?: number;
};
declare let fruit1: Fruit;
declare let fruit2: Fruit;
declare function getprice(price: number, discount?: number): number | undefined;
