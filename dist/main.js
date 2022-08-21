/*
node commands

node -v                                 --- to check version of node

npm install -g typescript               --- to install typescript

tsc -v                                  --- to check version of typescript

tsc main.ts                             --- to transpiled into js

tsc main.ts -w                          --- compilation in watch mode

tsc -w                                  --- watch mode for whole project using ts config file

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// DOM manipulation
//const someElement = document.querySelector(".foo");
//console.log("someElement", (someElement as any).value);
/// recommended to type cast in specific element
var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
var xElement = document.querySelector(".alpha");
xElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("event", target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = firstName + " " + lastName;
    }
    User.prototype.changeName = function () {
        //this.name = "";     can not change readonly property
    };
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = "50";
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var user5 = new User("Zain", "Arif");
console.log(user5.getFullName());
console.log(User.maxAge);
var admin = new Admin("admin", "admin");
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
var addId = function (obj) {
    var id = Math.random().toString(15);
    return __assign(__assign({}, obj), { id: id });
};
var person = {
    name: "Zain"
};
var result = addId(person);
console.log("result", result);
var result1 = addId("person");
console.log("result1", result1);
// 2.
var addId2 = function (obj) {
    var id = Math.random().toString(15);
    return __assign(__assign({}, obj), { id: id });
};
var person2 = {
    name: "Zain"
};
var result3 = addId2(person2);
console.log("result3", result3);
var role = {
    name: "admin",
    data: {
        meta: "foo"
    },
    meta: "woo"
};
var role2 = {
    name: "admin",
    data: ["home", "security"],
    meta: 10
};
// enums
var WorkStatus;
(function (WorkStatus) {
    WorkStatus[WorkStatus["notStarted"] = 0] = "notStarted";
    WorkStatus[WorkStatus["inProgress"] = 1] = "inProgress";
    WorkStatus["done"] = "done";
})(WorkStatus || (WorkStatus = {}));
;
var workStatus = WorkStatus.notStarted;
console.log(workStatus);
// workStatus = "12";   can assigned because of type enum  WorkStatus
workStatus = WorkStatus.inProgress;
console.log(workStatus);
workStatus = WorkStatus.done;
console.log(workStatus);
