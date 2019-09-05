function powerOfTwo() {

    let userNumber = prompt('Chose a number');
    let newUserNumber = Math.pow(userNumber, 2);

    if(!isNaN(userNumber)) {
        alert(`Your new number is ${newUserNumber}`);
        
    } else {
        prompt(`${userNumber} is not a number, try again`);
    }
}
powerOfTwo();