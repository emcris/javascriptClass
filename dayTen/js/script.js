const container = document.createElement('main');
//container.className = 'container'
container.classList.add('container');
//container.classList.remove('container');
document.body.appendChild(container);
container.innerHTML = "<h1>hello</h1>";
console.log(container);