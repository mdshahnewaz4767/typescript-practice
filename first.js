"use strict";
//==number, string, boolean==//
var age = 30;
var club = 'Paris';
var isFamous = false;
var famous;
famous: true;
console.log(isFamous);
console.log(club);
////==End number, string, boolean==//
//===function parameter type==//
function add(num1, num2) {
    return num1 + num2;
}
add(3, 40);
add('mun', 'newaz');
add(4, 'Someone');
//another
function fullName(FirstName, LastName) {
    return FirstName + ' ' + LastName;
}
var user = fullName('Muhammad', 'Shahnewaz');
console.log(user);
//==End function parameter type==//
//===Arrow function type==//
var multiply2;
multiply2 = function (x, y) { return x * y; };
var multiply = function (x, y) { return x * y; };
console.log(multiply(2, 6));
//===End arrow function type==//
//===Array and Object type==//
var number = [3, 10, 22, 30, 40, 50, 60];
number.push(22);
// console.log(number);
var friends = ['Newaz', 'Shahnewaz', 'Muhammad', 'Mun'];
var megaName = '';
for (var i = 0; i < friends.length; i++) {
    var name_1 = friends[i];
    if (name_1.length > megaName.length) {
        megaName = name_1;
    }
}
console.log('Largest Name:', megaName);
//Object
var friend = {
    name: 'newaz',
    age: 23
};
friend.age = 27;
console.log(friend.age);
//Another easy way
var player;
player = {
    name: 'Muhammad Shahnewaz',
    age: 23,
    salary: 50000,
};
console.log(player);
//===End Array and Object type==//
