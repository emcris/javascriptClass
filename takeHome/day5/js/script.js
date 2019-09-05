function powerOfTwo() {

    let userNumber = prompt('Chose a number');
    let newUserNumber = Math.pow(userNumber, 2);

    if(userNumber == NaN) {
        prompt('This is not a number please refresh and try agian');
    } else {
        alert(`Your new number is ${newUserNumber}`);
    }
}
powerOfTwo();