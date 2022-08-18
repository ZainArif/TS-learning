/*
node commands

node -v                                 --- to check version of node

npm install -g typescript               --- to install typescript

tsc -v                                  --- to check version of typescript

tsc main.ts                             --- to transpiled into js

tsc main.ts -w                          --- compilation in watch mode

tsc -w                                  --- watch mode for whole project using ts config file

*/



const a = "1";

console.log(a);

let hello = "world";
let hello1: string  = "world";

const getFullName = (name: string, surname: string): string => {
    return name + " " + surname;
}

console.log(getFullName("Zain","Arif"));


interface IUser {
    name: string,
    age?: number,    // ? = optional property
    getMessage(): string
}

const user1: IUser = {
    name : "Zain",
    age: 25,
    getMessage() {
        return "This is " + name; 
    },
};

const user2: IUser = {
    name : "Arif",
    getMessage() {
        return "This is " + name; 
    },
};


console.log(user1.getMessage());

let page: string | number = "1";

let user3: IUser | null = null;   // | = union operator for mulitple type support

type popularTag = string;    // type alias

type mayBePopularTag = popularTag | null;  // union + type alias

const popularTags: mayBePopularTag[] = ["car","tea"];


const printName = (firstName: string, lastName: string): void =>{
    console.log(firstName + " " + lastName);
}

let objA: void = undefined ;

objA = null;

//objA = "object";     type "void" can be null or undefined


let objB: any = "abc";

objB = 2;

objB = true;

//console.log(objB.getName());     type "any" turns off typescript checks


const callNever = (): never =>{    // type "never" means nothing to do
    //console.log('type never');
    throw 'never';
}


let vAny: any = 10;
let vUnknown: unknown = 10;   // type "unknown" means no type

let s1: string = vAny;
//let s2: string = vUnknown;   // ts dont konw the type of variable "vUnknown" 

//console.log(vUnknown.foo());   ts checks that foo() is not property


let s3: string = vUnknown as string;   // "as" operator makes type assertion

let pageNumber: string = "1";
//let numericPageNumber: number = pageNumber as number;   // cant convert type directy to another type, first have to convert into unknown type
let numericPageNumber: number = (pageNumber as unknown) as number;