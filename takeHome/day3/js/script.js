const H1 = document.getElementById('greeting');

let firstName =prompt('what is your first name?');

function name (){
    alert(`Hello there ${firstName}!`)
}


const askColor = prompt('Pick one of the following colors: red, orange, yellow, green, blue, pink, purple, black, white, or grey. Await the folllowing responce...');

switch(askColor) {
    case 'red': 
        H1.style.backgroundColor='red';
        H1.innerHTML = `${firstName} you have drive and determination, and you prefer action and risk-taking behaviors.`;
    break;

    case 'orange':
        H1.style.backgroundColor='orange';
        H1.innerHTML = `${firstName} you love to be with people and socialize with them, as you want to be accepted nd respected as part of a group.`;
    break;

    case 'yellow':
        H1.style.backgroundColor='gold';
        H1.innerHTML=`${firstName} you enjoy lerning and sharing knowledge with others, and you feel the need to always express your individuality.`;
    break;

    case 'green':
        H1.style.backgroundColor='green';
        H1.innerHTML=`${firstName} you are loyal and very frank with others, and you consider your reputation a very important part of your life.`
    break;

    case 'blue':
        H1.style.backgroundColor='dodgerBlue';
        H1.innerHTML=`${firstName} you want to find inner peace and absolute truth, and you always make an effort to think of others and their needs.`;
    break;

    case 'pink':
        H1.style.backgroundColor='pink';
        H1.innerHTML=`${firstName} all you want in life is unconditional love and to be accepted for who you are by your peers.`;
    break;

    case 'purple':
        H1.style.backgroundColor='purple';
        H1.innerHTML=`${firstName} you are a perfectionist whorequires emotional sequrity in your life, and you are a good humanitarian who helps others in need.`;
    break;

    case 'black':
        H1.style.backgroundColor='black';
        H1.innerHTML=`${firstName} you strive for power and control in life, but are often artistic and intuitive and do not share well with others.`;
    break;

    case 'white':
        H1.style.backgroundColor='seashell';
        H1.style.color='grey'
        H1.innerHTML=`${firstName} you are organized and very independent, and rely on logic to solve your every problem.`;
    break;

    case 'grey':
        H1.style.backgroundColor='grey';
        H1.innerHTML=`${firstName} you are cool and composed and a very reliable person who tends to conform to keep the peace.`;
    break;
}