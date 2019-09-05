//Refrence from Michael Osborne 
let toDoList = [];
let listItems = 3

for (let i = 0; i < listItems; i++) {
    //enter ToDo items
    toDoList.push([prompt(`Enter ToDo Item # ${i+1}`)]); 
}
//console.log(toDoList);

for(let i = 0; i < toDoList.length; i++)
{
    //add amount of days item will take
    toDoList[i].push((i+1)*2); 
}

//default to first name value in list
let longestTaskName = toDoList[0][0];
//default to first day(s) value in list
let longestTaskDays = toDoList[0][1]; 
let iterator = 0;

while(iterator < toDoList.length)
{
    if(toDoList[iterator][1] > longestTaskDays)
    {
        longestTaskName = toDoList[iterator][0];
        longestTaskDays = toDoList[iterator][1];
    }
    iterator++;
}

console.log(`The longest task will be: ${longestTaskName}, it will take: ${longestTaskDays} days.`);

let j = 0;

do
{
    if(longestTaskName != toDoList[j][0])
    {
        toDoList[j].push("easy-peasy");
        alert(`${toDoList[j][0]}, is easy-peasy!`);
    }
    else
    {
        toDoList[j].push("difficult");
    }

    j++;

} while(j < toDoList.length)

console.log(toDoList);