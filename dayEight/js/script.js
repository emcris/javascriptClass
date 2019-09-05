const body = document.body;
const container = document.createElement('div');
container.className = 'container text-center';

let test = body.appendChild(container);
console.log(test);

const row = document.createElement('main');
row.className = 'row';

const content = document.createElement('div');

content.className = 'col-md-6 col-md-offset-2';