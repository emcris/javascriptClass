//https://dog.ceo/api/breeds/image/random
// function playWithApi() {
//     const url = 'https://dog.ceo/api/breeds/list/all';
//     fetch(url);
//     console.log(url);
// }

// playWithApi();

// const box = document.createElement('div');
// const button = document.createElement('button');
// button.setAttribute('href', 'url');
// box.appendChild(button);
// button.addEventListener('click', (getUrl) => {

// });

//Playing with Json
// const exampleJson = '{ "name ": "Emily", "age": 22}';
// const exapmleParse = JSON.parse(exapmleParse);
// //wrap.innerText = exampleJson.name;
// wrap.innerText = exapmleParse.name;
// const exampleStringify = JSON.stringify(exampleTwo);
// wrapper.innerText = exampleStringify;
// console.log(exampleJson);

//closure
// function practiceScope() {
//     let random = 'Inside scope.';

//     const phrase = function () {
//         console.log('this is super cool, jax');
//     }

//     return phrase();
// }

// let practiceOutside = practiceScope();
let wrapper = document.createElement('div');
wrapper.className = 'wrapper';

class aboutMe {
    constructor(name, age, petName, petBreed) {
        this.name = name;
        this.age = age;
        this.petName = petName;
        this.petBreed = petBreed;
    }
        
}

aboutMe.prototype.myDog = function() {
    const url = `https://dog.ceo/api/${this.petBreed}/list/all`;
    fetch(url)
    .then ( (transformJson) => {
        return transformJson.json();
    } )

    .then ( (breedData) => {
        console.log(breedData);
        const image = document.createElement('img');
        image.setAttribute('src', breedData.message);
        wrapper.appendChild(image);
    } )
    
    .catch( (err) => {
        console.log(err);
    } )
}
    

const emily = new aboutMe('Emily', 22, 'Ruby', 'boxer')
emily.myDog();

