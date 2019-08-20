const H1 = document.getElementById('greeting');
//let firstName =prompt('what is your first name?');
//const askColor = prompt('Pick one of the following colors: red, orange, yellow, green, blue, pink, purple, black, white, or grey. Await the folllowing responce...');

function myFunction() {
    let firstName = prompt('what is your first name?');
    const askColor = prompt('Pick one of the following colors: red, orange, yellow, green, blue, pink, purple, black, white, or grey. Await the folllowing responce...');
  
switch(askColor) {
    case 'red': 
    case 'Red':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1536338701933-9fb6ce505c48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')";
        H1.style.color='white';
        H1.innerHTML = `${firstName} you have drive and determination, and you prefer action and risk-taking behaviors.`;
    break;

    case 'orange':
    case 'Orange':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1442458017215-285b83f65851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')";
        H1.style.color='white';
        H1.innerHTML = `${firstName} you love to be with people and socialize with them, as you want to be accepted and respected as part of a group.`;
    break;

    case 'yellow':
    case 'Yellow':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1528105862282-e4333365c1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')";
        H1.style.color='grey';
        H1.innerHTML=`${firstName} you enjoy lerning and sharing knowledge with others, and you feel the need to always express your individuality.`;
    break;

    case 'green':
    case 'Green':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')";
        H1.style.color='white';
        H1.innerHTML=`${firstName} you are loyal and very frank with others, and you consider your reputation a very important part of your life.`
    break;

    case 'blue':
    case 'Blue':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80')";
        H1.style.color='white';
        H1.innerHTML=`${firstName} you want to find inner peace and absolute truth, and you always make an effort to think of others and their needs.`;
    break;

    case 'pink':
    case 'Pink':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1503455637927-730bce8583c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')";
        H1.style.color='white';
        H1.innerHTML=`${firstName} all you want in life is unconditional love and to be accepted for who you are by your peers.`;
    break;

    case 'purple':
    case 'Purple':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1442405740009-7b57cca9d316?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')";
        H1.style.color='grey';
        H1.innerHTML=`${firstName} you are a perfectionist whorequires emotional sequrity in your life, and you are a good humanitarian who helps others in need.`;
    break;

    case 'black':
    case 'Black':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1529753253655-470be9a42781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')";
        H1.style.color='white';
        H1.innerHTML=`${firstName} you strive for power and control in life, but are often artistic and intuitive and do not share well with others.`;
    break;

    case 'white':
    case 'White':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1484503793037-5c9644d6a80a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2801&q=80')";
        H1.style.color='black'
        H1.innerHTML=`${firstName} you are organized and very independent, and rely on logic to solve your every problem.`;
    break;

    case 'grey':
    case 'Grey':
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1449867727329-3294ea016353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')";
        H1.style.color='white';
        H1.innerHTML=`${firstName} you are cool and composed and a very reliable person who tends to conform to keep the peace.`;
    break;

    default:
        H1.style.backgroundImage="url('https://images.unsplash.com/photo-1504309092620-4d0ec726efa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')";
        H1.style.color='white';
       H1.innerHTML = `You were one of those punks who never played colors correctly as a kid, get your aquamarine, chartreuse, magenta, clear whatever bullshit outa here.`;
}
}