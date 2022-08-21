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



// DOM manipulation

//const someElement = document.querySelector(".foo");
//console.log("someElement", (someElement as any).value);

/// recommended to type cast in specific element
const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("someElement", someElement.value);

const xElement = document.querySelector(".alpha");
xElement.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement;
    console.log("event", target.value);
});


interface UserInterface
{
    getFullName(): string;
}

class User implements UserInterface
{
    private firstName: string;
    private lastName: string;
    readonly name: string;
    static readonly maxAge: string = "50";
    
    constructor(firstName: string, lastName: string)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = firstName + " " + lastName;
    }

    changeName(): void
    {
        //this.name = "";     can not change readonly property
    }
    
    
    getFullName(): string
    {
        return this.firstName + " " + this.lastName;
    }
}


class Admin extends User
{
    private editor: string;

    setEditor(editor: string)
    {
        this.editor = editor;
    }

    getEditor(): string
    {
        return this.editor;
    }
}

const user5 = new User("Zain", "Arif");
console.log(user5.getFullName());
console.log(User.maxAge);

const admin = new Admin("admin","admin");
admin.setEditor("abc");
console.log(admin.getEditor());



// generics

/*
const addId = (obj) =>   /// obj is type of any
{
    const id = Math.random().toString(15);
    return {
        ...obj,
        id
    };
};
*/ 

// below is the recommended ways to define generics

// 1.
const addId = <T>(obj: T) =>
{
    const id = Math.random().toString(15);
    return {
        ...obj,
        id
    };
};

const person = {
    name: "Zain"
};

const result = addId(person);
console.log("result", result);

const result1 = addId<string>("person");
console.log("result1", result1);

// 2.
const addId2 = <T extends object>(obj: T) =>    // if T should be only of object type
{
    const id = Math.random().toString(15);
    return {
        ...obj,
        id
    };
};

interface IPerson {
    name: string;
}

const person2: IPerson = {
    name: "Zain"
};

const result3 = addId2<IPerson>(person2);
console.log("result3", result3);

// const result4 = addId2<string>("person");    string is not object


interface IRole<T,V> {
    name: string;
    data: T;
    meta: V;
}


const role: IRole<{meta: string}, string> = {
    name : "admin",
    data : {
        meta : "foo"
    },
    meta : "woo"
};

const role2: IRole<string[], number> = {
    name : "admin",
    data : ["home","security"],
    meta : 10
};


// enums


enum WorkStatus {
    notStarted,
    inProgress,
    done = "done"
};

let workStatus: WorkStatus = WorkStatus.notStarted;

console.log(workStatus);

// workStatus = "12";   can assigned because of type enum  WorkStatus

workStatus = WorkStatus.inProgress;
console.log(workStatus);

workStatus = WorkStatus.done;
console.log(workStatus);


