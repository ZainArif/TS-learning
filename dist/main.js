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
