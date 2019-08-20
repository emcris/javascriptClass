// const exampleString = 'I am a';
// const exampleObjectString = new String('1');
// const anotherString = 'I am a string';


//grabbing stuff from HTML
//const H1 = document.getElementById('greeting');
//console.log(H1);

// function checkExamples(){
    // if(exampleString === exampleObjectString){
    //     console.log(`Yes, ${exampleString} and ${exampleObjectString} do loosly equal`)

//     if(exampleString !== anotherString){
//         console.log(`Yes, ${exampleString} and ${anotherString} are not equal`)
//     } else {
//         console.log('Sorry, they are equal')
//     }
// }
//checkExamples();

// const luckyNumber = '3';
// if (luckyNumber === 5 || luckyNumber == '3'){
//     console.log('Sorry, your number is not luck to me.');
// } else{
//     console.log(`Hey your lucky number ${luckyNumber}`);
// }

// const exString = 'I like ice cream.';
// const moreString = new String('I like ice cream.');

// if (exString == moreString){
//     console.log(`Yes, ${exString} and ${moreString} are equal.`);
// } else {
//     console.log('Sorry, they are not equal.');
// }

// if (exString === moreString){
//     console.log(`Yes, ${exString} and ${moreString} are equal.`);
// } else {
//     console.log('Sorry, they are not equal.');
// }

// let a = 10;
// let b = 2;

// let result = 1;
// let b = 4;
// result *= b;
// console.log(result);

// let hello = 'Hello ';
// let there = 'there!';
// let sentance = hello += there;
// console.log(sentance);

//I am not working
// let a = '5.99';
// let b = 2;
// let transfromMe = parseFloat(a, 2);
// let result = transformMe += b;
// console.log(`Before ${a}, after: ${transfromMe}`, typeof(a), typeof(transfromMe));
// console.log(result);

// let testModulo = 2 % 10;
// console.log(testModulo);

// let testNan = isNaN('hello');
// console.log(testNan);

// let valueNan = 'I am indeed a NaN';
// let valueNan = 1;
// let testNan = isNaN(valueNan);

//Ternaries OPERATOR - only a true or false thing / she basic
// testNan ? console.log('THIS IS TRUE') : console.log('THIS IS FALSE');

// const H1 = document.getElementById('greeting');
// if(testNan === true) {
//     let result = 'this is true.';
//     console.log('this is true.');
//     H1.innerHTML = result;
// } else {
//     let result = 'this is false.';
//     console.log('this is flase.');
//     H1.innerHTML = result;
// }

//Switch Statements - case sensitive
// const H1 = document.getElementById('greeting');
// const askColor = prompt('Pick one of the following colors: red, blue, or orange. Await the folllowing responce...');

// switch(askColor) {
//     case 'red': 
//         H1.style.backgroundColor='tomato';
//         H1.innerHTML = `You chose ${askColor}.. which reminds me of the song, Lady In Red... IS DANCING WITH ME... `;
//     break;
//     case 'blue':
//         H1.style.backgroundColor='dodgerBlue';
//         H1.innerHTML = `You chose ${askColor}.. I'm dee abb daa blue adaa`;
//     break;
//     case 'orange':
//         H1.style.backgroundColor='orange';
//         H1.innerHTML = `You chose ${askColor} - only thing that comes to mind is Halloweentown!`;
//     break;
//     default:
//         H1.innerHTML = 'Follow the rules dude... not cool.';
// }

//try it out 
const age = prompt('Are you over 18? yes or no.');

function old(){
    prompt('Are you less than 80 years old? yes or no.');
}

function starWars(){
    prompt('Do you like Star Wars? yes or no.');
}

function prunes(){
    prompt('Do you like prunes? yes or no.');
}

function loser(){
    alert('You are a loser, goodbye.')

}

switch(age) {
    case 'yes':
        old();
            case 'yes':
                prompt('Do you like Star Wars? yes or no.');
                case 'yes':
                    prompt('welcome to the cool kids club, goodbye');
    break;

    case 'no':
        prompt('You are not old enough to access, goodbye.');
            case 'no':
                prompt('Do you like prunes? yes or no.');
                case 'no':
                    prompt('You are a loser, goodbye.');
    break;
}