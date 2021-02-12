//==number, string, boolean==//
let age: number = 30;
let club: string = 'Paris';
const isFamous: boolean = false;
let famous: boolean;
console.log(isFamous);

////==End number, string, boolean==//


//===function parameter type==//
function add(num1: number | string, num2: number | string){
    return num1 + num2;
}
add(3, 40);
add('mun', 'newaz');
add(4, 'Someone');

//another
function fullName(FirstName: string, LastName: string): string{
    return FirstName + ' ' + LastName;
}
const user: string = fullName('Muhammad', 'Shahnewaz');
console.log(user);

//==End function parameter type==//