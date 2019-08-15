let firstName = prompt('What is your first name?');
console.log(firstName);

let lastName = prompt('What is your last name?');
alert(`Is this your last name: ${lastName}`)

let birthday = prompt('What is your birthday?');
confirm(`Is this your correct birthday? ${new Date (birthday)}`);
alert(`Your birthdy ${new Date (birthday)} has been saved!`);