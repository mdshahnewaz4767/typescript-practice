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
