//anon function
// let example = function () {
//     console.log('hello,there');
// }

//naming function
// function exampleName() {
//     console.log('hello,there');
// }

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
// let names = [
//     'Jerry',
//     'Tom',
//     'April',
//     'Andy'
// ];
//create a greeting that will be taking in a name value 
// const greeting = name => `Good evening ${name}`;

//tets the result first:
// console.log(`The array of names ${names}`, `greeting function value: ${greeting('Example')}`);

// const limit = 3; //limit can replace names.length if you know how big it will be 
//loop through names and add greeting function to it 
// for(i = 0; i < names.length; i++) {
//     console.log(greeting(names[i]));
// }

//grab elements from html
// const h1 = document.getElementById('greeting');
// const myList = document.getElementById('groceryList');
// const listItem = document.getElementById('groceryItem');
// const myInput = document.getElementById('getGroceryItem');

const greeting = document.getElementById('greeting');
const groceryList = document.getElementById('groceryList');
const groceryItem = document.getElementById('groceryItem');
const getGroceryItem = document.getElementById('getGroceryItem');

let arrayOfGroceryItems = [];

greeting.innerHTML = 'My Grocery List';

//create function to add onto grocery list

// const addGroceryItem = (arr, value) => arr.push(value);
// console.log(addGroceryItem(arrayOfGroceryItems, 'Carrots'));
// console.log(arrayOfGroceryItems);

function addGroceryItem(arr, value) {
    arr.push(value);
}

function ejectGroceryItemToList(val) {
    //grab list item
    //push array items to list on HTML
    for(grocery = 0; grocery < 2; grocery++) {
        groceryItem.innerHTML = val[grocery];
    }
}


addGroceryItem(arrayOfGroceryItems,'test');
addGroceryItem(arrayOfGroceryItems,'bread');
console.log(arrayOfGroceryItems);
ejectGroceryItemToList(arrayOfGroceryItems);