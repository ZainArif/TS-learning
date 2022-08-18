/*
node commands

node -v                                 --- to check version of node

npm install -g typescript               --- to install typescript

tsc -v                                  --- to check version of typescript

tsc main.ts                             --- to transpiled into js

tsc main.ts -w                          --- compilation in watch mode

tsc -w                                  --- watch mode for whole project using ts config file

*/
var a = "1";
console.log(a);
var hello = "world";
var hello1 = "world";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Zain", "Arif"));
var user1 = {
    name: "Zain",
    age: 25,
    getMessage: function () {
        return "This is " + name;
    }
};
var user2 = {
    name: "Arif",
    getMessage: function () {
        return "This is " + name;
    }
};
console.log(user1.getMessage());
var page = "1";
var user3 = null; // | = union operator for mulitple type support
var popularTags = ["car", "tea"];
var printName = function (firstName, lastName) {
    console.log(firstName + " " + lastName);
};
var objA = undefined;
objA = null;
//objA = "object";     type "void" can be null or undefined
var objB = "abc";
objB = 2;
objB = true;
//console.log(objB.getName());     type "any" turns off typescript checks
var callNever = function () {
    //console.log('type never');
    throw 'never';
};
var vAny = 10;
var vUnknown = 10; // type "unknown" means no type
var s1 = vAny;
//let s2: string = vUnknown;   // ts dont konw the type of variable "vUnknown" 
//console.log(vUnknown.foo());   ts checks that foo() is not property
var s3 = vUnknown; // "as" operator makes type assertion
var pageNumber = "1";
//let numericPageNumber: number = pageNumber as number;   // cant convert type directy to another type, first have to convert into unknown type
var numericPageNumber = pageNumber;
