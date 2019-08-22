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

//console.log(favMovie);
//console.log(favMovie.length); //checks length (how many)
//console.log(favMovie[1]); //position in array (what position)
//console.log(Array.isArray(favMovie)); //check if it is an array

favMovie.push('I like watermelon'); //add to the end
//console.log(favMovie);
//console.log(favMovie.length);

favMovie.unshift('I am now number 1'); //add to the begining
//console.log(favMovie.length);
//console.log(favMovie[0]);

favMovie.pop(); //removes last element
//console.log(favMovie);
//console.log(favMovie.length);

favMovie.shift(); //removes the first element
//console.log(favMovie);
//console.log(favMovie.length);

favMovie.splice(1, 1, 'beech'); //replace values in your array 1-who are you replacing 2-how many you are replacing 3-what you are replacing with
//console.log(favMovie);
//console.log(favMovie.length);

let newArrayOfInfo = favMovie.slice(1) //a slice creates a completley new array, It is not the same as before 
//console.log(newArrayOfInfo);

let findPositionToRemove = newArrayOfInfo.indexOf('2011'); //I just want to look at where it is
//console.log(newArrayOfInfo.indexOf(true));
let refreshed = newArrayOfInfo.splice(findPositionToRemove, 1);
//console.log(refreshed);

//console.log(favMovie.reverse()); //reverse the order of the array

//try it out
let movie1 = ['Baby Driver', 'Baby']
let movie2 = ['End Game', 'Iron Man']
let movie3 = ['Into The Spiderverse', 'Miles Moralas']
let movie4 = ['The Shinning', 'Johnny']
let movie5 = ['The Lion King', 'Rafiki']

let favoriteMovies = [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5
];
//console.log(favoriteMovies);

let titles = [];
titles.push(movie1[0], movie2[0], movie3[0], movie4[0], movie5[0]);
//alert(titles);

let bestWorst = [
    movie1,
    movie3
];
//console.log(bestWorst);

//alert(favoriteMovies.length);

//Loops

//While Loops
// let x = 0;
// while (x < 10) {
//     console.log(x);
//     x++;
// }

//For Loops
// for(let i = 0; i < 20; i++) {
//     console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//     if (i = 4) {
//         continue;
//     }
//     console.log(i)
// }

//Do while
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 10);

//For Each
// let arr3 = [1, 2, 3, 4, 5];
// arr3.forEach(function(x){
//     console.log('I am ' + x);
// });

//For OF
// let myString = 'I am Emily';

// for (i of myString) {
//     console.log(i);
// }

//For In
// let people = [{
//     firstName : 'Emily',
//     lastName : 'Vagim',
//     age : 22
// }, 
// {
//     firstName : 'Jane',
//     lastName : 'Doe',
//     age : 24
// }
// ];

// for (person of people) {
//     console.log(people.firstName);
// }

// let people = {
//     firstName : 'E',
//     lastName : 'V',
//     age : 22
// };

// for (person in people) {
//     console.log(people[person]);
// }