//const container = document.querySelector('.container');
//console.log(container);

//const h1 = document.querySelector('h1');

//function globalListItems() {
    //create a ul/ol, create li with  any class, attributes or ids needed 

    //create ul
    //const ul = document.createElement('ul');
    //create a li
    //const li = document.createElement('li');
    //attributes/classes/id
    //li.className = 'list-group-item list-group-item-info';
    //li.innerText = 'i am a list item';
    //li.id = 'mySpecialListItem';

    //const image = document.createElement('img');
    //image.setAttribute('class', 'img-responsive');
    //console.log(image);
    //append to container -> ul -> li
    //ul.appendChild(li);
   // container.appendChild(ul);
//}

//globalListItems();

function halloweenCard() {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.className = 'text-center col-md-6';

    const col = document.createElement('div');
    col.className = 'col-md-4';
    card.appendChild(col);

    const h1 = document.createElement('h1');
    h1.innerText = 'Happy Halloween!';
    col.appendChild(h1);

    const img = document.createElement('img');
    img.className = 'img-responsive';
    img.setAttribute('src', 'https://images.unsplash.com/photo-1543507804-4a4fdc216be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
    img.setAttribute('alt', 'at haning in a tree, she cute');
    col.appendChild(img);

    const p = document.createElement('p');
    p.innerText = 'hang in there pal it\'s almost halloween!'
    col.appendChild(p);

    const icon = document.createElement('icon');
    icon.className = 'fab fa-facebook';
    icon.innerText = 'facebook';
    col.appendChild(icon);

    console.log(card);
    container.appendChild(card);
}

halloweenCard();