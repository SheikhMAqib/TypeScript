declare type Person = {
    firstname: string;
};
declare function getPerson<T extends Person>(data: T): T;
declare const details: {
    Lastname: string;
    firstname: string;
};
