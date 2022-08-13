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
