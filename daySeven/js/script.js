const container = document.querySelector('.container');
console.log(container);

const h1 = document.querySelector('h1');

function globalListItems() {
    //create a ul/ol, create li with  any class, attributes or ids needed 

    //create ul
    const ul = document.createElement('ul');
    console.log('unordered list', ul);
    //create a li
    const li = document.createElement('li');
    console.log('list item', li);
    //attributes/classes/id
    li.className = 'list-group-item list-group-item-info';
    console.log('li, with classes', li);
    li.innerHTML = 'i am a list item';
    ul.appendChild(li);
    console.log('complete ul', ul);
    container.appendChild(ul);
    console.log('complete ul in container', ul);
}

globalListItems();