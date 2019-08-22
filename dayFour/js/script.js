//if and else/if statements
// const greeting = 'hello';

// if (greeting === 'hi') {
//     console.log('yes, this matches to HI');
// } else if (greeting === 'hello') {
//     console.log('yes, this matched HELLO');
// } else if (greeting === 1) {
//     console.log('yes, this matches and integer of 1');
// } else {
//     console.log('none of these matched.');
// }

//Changing the input of the user
//function changeToLowerCase(dayValue) {
    //return dayValue.toLowerCase();
    //return dayValue.toUpperCase();
//}
//console.log(changeToLowerCase('hi'));

//functions in the real world tangent
// function getWeatherReport(day,time,temperature){
//     const correctDayFormat = day.toUpperCase();
//     const correctTimeFormat = time.toLowerCase();
//     const correctTemperatureFormat = temperature.toUpperCase();
//     //const summary = `Today is ${correctDayFormat} and the time is ${correctTimeFormat}. The temperature is a rockin ${correctTemperatureFormat}`;
//     //return summary;
//     this.getWeaterSummary(correctDayFormat, correctTimeFormat, correctTemperatureFormat);
//     return getWeaterSummary();
// }
// function getWeaterSummary(day, time, temperature) {
//     const summary = `Today is ${day} and the time is ${time}. The temperature is a rockin ${temperature}`;
//     return summary;
// }
// console.log(getWeatherReport('wednesday', '6:00PM', '90'));

//ARRAYS
let favMovie = [
    'Baby Driver', 
    8, 
    true, 
    '2015'
];

console.log(favMovie);
console.log(favMovie.length); //checks length (how many)
console.log(favMovie[1]); //position in array (what position)
console.log(Array.isArray(favMovie)); //check if it is an array

favMovie.push('I like watermelon'); //add to the end
console.log(favMovie);
console.log(favMovie.length);

favMovie.unshift('I am now number 1'); //add to the begining
console.log(favMovie.length);
console.log(favMovie[0]);

favMovie.pop(); //removes last element
console.log(favMovie);
console.log(favMovie.length);

favMovie.shift(); //removes the first element
console.log(favMovie);
console.log(favMovie.length);

favMovie.splice();