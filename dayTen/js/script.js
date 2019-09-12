const container = document.createElement('main');
//container.className = 'container'
container.classList.add('container');
//container.classList.remove('container');
document.body.appendChild(container);
container.innerHTML = "<h1>hello</h1>";
console.log(container);

function movieQuote() {
    alert('MINE MINE MINE');
}
let timer;
function callQuote() {
    timer = setInterval(movieQuote, 3000);
    console.log('triggered');
}

function stopRunning() {
    clearInterval(timer,1000);
}

const button = document.createElement('button');
button.setAttribute('onclick', 'callQuote()');
button.className = 'btn btn-primary lead btn-lg';
button.innerText = 'Click for a Movie Quote!';
container.appendChild(button);

const stopButton = document.createElement('button');
stopButton.className = 'alert alert-danger border-danger border';
stopButton.setAttribute('onclick', 'stopRunning()');
stopButton.innerText = 'STOP';
container.appendChild(stopButton);

// button.addEventListener('click', () => {
//     container.appendChild(stopButton);
// })