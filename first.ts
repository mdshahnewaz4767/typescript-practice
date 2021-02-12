//==number, string, boolean==//
let age: number = 30;
let club: string = 'Paris';
const isFamous: boolean = false;
let famous: boolean;
famous: true;
console.log(isFamous);
console.log(club);

////==End number, string, boolean==//


//===function parameter type==//
function add(num1: any, num2: number | string){
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



//===Arrow function type==//
let multiply2: (x: number, y: number) => number;
multiply2 = (x, y) => x * y;

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(2, 6));

//===End arrow function type==//


//===Array and Object type==//
const number: number[] = [3, 10, 22, 30, 40, 50, 60];
number.push(22);
// console.log(number);
const friends: string[] = ['Newaz', 'Shahnewaz', 'Muhammad', 'Mun'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const name: string = friends[i];
    if(name.length > megaName.length){
        megaName = name;
    }
}
console.log('Largest Name:', megaName);

//Object
const friend:{name: string, age: number} = {
    name: 'newaz',
    age: 23
}
friend.age = 27;
console.log(friend.age);


//Another easy way
let player: {                  //types
    name: string,
    age: number,
    salary: number;
}
player = {        // value declarations
    name: 'Muhammad Shahnewaz',
    age: 23,
    salary: 50000,
}
console.log(player);



//===End Array and Object type==//
