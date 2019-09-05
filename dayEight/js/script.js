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
//email.setAttribute('placeholder', 'email@email.com');
form.appendChild(email);

const subject = document.createElement('input');
subject.setAttribute('name', 'subject');
subject.setAttribute('type', 'text');
form.appendChild(subject);

const textArea = document.createElement('input');
textArea.setAttribute('type', 'textarea');
textArea.setAttribute('type', 'text');
form.appendChild(textArea);

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
//submitButton.setAttribute('placeholder', 'submit');


//email.setAttribute = 'type', 'text';
form.appendChild(submitButton);

let emailForm = document.forms.sendEmail;
emailForm.elements.email.placeholder = 'example@emial.com';
emailForm.elements.subject.placeholder = 'subject';
emailForm.elements.textarea.placeholder = 'Type message here ...';
emailForm.elements.submit.placeholder = 'Submit';
