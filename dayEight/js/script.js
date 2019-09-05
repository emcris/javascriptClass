const body = document.body;
const container = document.createElement('div');
container.className = 'container text-center';

let test = body.appendChild(container);
console.log(test);

const row = document.createElement('main');
row.className = 'row';

const content = document.createElement('div');

content.className = 'col-md-6 col-md-offset-3 content';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);

//form tag > imput:email(type email) - imput:subject(type text) - textarea(type text) - button:submit(type submit)

const form = document.createElement('form');
form.setAttribute('name','sendEmail');
form.className = 'inputs';
content.appendChild(form);

const email = document.createElement('input');
email.setAttribute('name', 'email');
email.setAttribute('type', 'email');
email.setAttribute('placeholder', 'youremail@email.com');
email.setAttribute('class', 'form-control specialElements');
form.appendChild(email);

const subject = document.createElement('input');
subject.setAttribute('name', 'subject');
subject.setAttribute('type', 'text');
subject.setAttribute('placeholder', 'Subject');
subject.setAttribute('class', 'form-control specialElements');
form.appendChild(subject);

const textArea = document.createElement('input');
textArea.setAttribute('type', 'textarea');
textArea.setAttribute('type', 'textarea');
textArea.setAttribute('class', 'form-control specialElements');
textArea.setAttribute('placeholder', 'Type your message here ...');
form.appendChild(textArea);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('text', 'submit');
submitButton.className = 'btn-primary btn specialElements';
submitButton.innerText = 'submit';


//email.setAttribute = 'type', 'text';
form.appendChild(submitButton);

// let emailForm = document.forms.sendEmail;

function globalFormElements(element, elemntType, elementName, elementClass, elementPlaceholder, elementId){
    //element : create the type of element you seek
    const newElement = document.createElement(element);
    newElement.setAttribute('type', elemntType);
    newElement.className = elementClass;
    newElement.setAttribute('name', elementName);
    newElement.setAttribute('placeholder', elementPlaceholder);
    newElement.id = elementId;
    return newElement;
}
const testAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2)  => {
    const element = document.createElement('textarea');
    element.setAttribute('type', 'text');
    element.className = elementClass;
    element.setAttribute('name', name);
    element.setAttribute('placeholder', placeholder);
    element.setAttribute('cols', cols);
    element.setAttribute('rows', rows);
    element.id = elementId;

}
console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your example here'));

console.log(globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please, let us know your concerns here.'));