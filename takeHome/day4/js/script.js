//creat 3 variables of prompt values
const taskOne = prompt('Input 1 to-do you have for this weekend. (1/3)');
const taskTwo = prompt('Input 1 to-do you have for this weekend. (2/3)');
const taskThree = prompt('Input 1 to-do you have for this weekend. (3/3)');

let arrayOfTasks = [
    taskOne,
    taskTwo,
    taskThree
];

//parent and child array
let secondArrayOfTasks = [
    [taskOne],
    [taskTwo],
    [taskThree]
];

console.log(arrayOfTasks);
console.log('second one',secondArrayOfTasks);

const limit = 3;
for(j = 0; j < limit; j++) {
    secondArrayOfTasks[j].push(`this will take ${Math.floor(Math.random() * 5)}`);
    console.log(secondArrayOfTasks[j]);
}

//this is michales
let numberOfItems = 3;
let toDoList = [];

for(let i = 0; i < numberOfItems; ++i) {
    toDoList.push([prompt(`Enter todo Item# ${i+1}`)]);
}

let longestTaskName = toDoList[0][0];
let longestTaskDays = toDoList[0][1];
let indicator = 0;

while(indicator < toDoList.length) {
    if(toDoList[indicator][1]>longestTaskDays) {
        longestTaskName = toDoList[indicator][0];
        longestTaskDays = toDoList
    }
}