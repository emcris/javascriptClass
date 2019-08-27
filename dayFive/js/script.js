//anon function
let example = function () {
    console.log('hello,there');
}

//naming function
function exampleName() {
    console.log('hello,there');
}

//example();
//exampleName();

//arrow function (not hoist friendly) (gotta think about the order but this is the new way and they way you should you)
//fat arrow(this is a joke) because it is a =
// const turnValueUppercase = val => console.log(val.toUpperCase());
// const multiplyValues = (arg1, arg2) => console.log(arg1 * arg2);
// turnValueUppercase('hi');
// multiplyValues(2, 6);

//this naming fuction is hoistable
// (turnValueUppercase('hello'));

// function turnValueUppercase(val) {
//     console.log(val.toUpperCase());
// }

//real life gocery store test 
//create an arry of three names 
let names = [
    'Jerry',
    'Tom',
    'April',
    'Andy'
];
//create a greeting that will be taking in a name value 
const greeting = name => `Good evening ${name}`;

//tets the result first:
console.log(`The array of names ${names}`, `greeting function value: ${greeting('Example')}`);

const limit = 3; //limit can replace names.length if you know how big it will be 
//loop through names and add greeting function to it 
for(i = 0; i < names.length; i++) {
    console.log(greeting(names[i]));
}

