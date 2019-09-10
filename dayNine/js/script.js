//prototype and this
//fat arrow funtions do NOT like this\

//Create taco recipe using Prototyples. First we create what will be needed for the recipe itself

function tacoRecipe(meat, seasonings, vegtables, tortilla) {
    this.meat = meat;
    this.seasonings = seasonings;
    this.vegtables = vegtables;
    this.tortilla = tortilla;
}

tacoRecipe.prototype.prepIngredients = function () {
    console.log(`Get 2 pounds of ${this.meat} and add to pan. In a seprate bowl collect ${this.seasonings}. Make sure to get your ${this.vegtables} ready to washed and cut. Then dip the ${this.tortilla} in some oil and ready to fry in the pan.`);
}

tacoRecipe.prototype.howToMakeSalsa = function () {
    console.log(`To make pico de gallo you will need ${this.seasonings}. Chop these up and mix them all together. Then take ${this.vegtables} chop up to make fajita vegtables`);
}

tacoRecipe.prototype.pricePerTaco = function(perTaco) {
    if(this.meat === 'carne asade') {
        perTaco * 1.50
    }
}

const asadaTaco = new tacoRecipe('carne asada', ['garlic powder', 'cumin', 'onion powder', 'salt & pepper'], ['lemon', 'tomato', 'onion', 'letuce', 'cilantro', 'radish'], 'corn tortilla');

const carnitas = new tacoRecipe('carnitas', 'salt & pepper', 'pico de gallo', 'corn tortilla');

const additionalRecipe = new tacoRecipe ('',['tomato', 'onion', 'cilantro', 'lemon & lime'], ['red & yellow bell peppers', 'lime', 'onion', '& cumin'], '');

asadaTaco.prepIngredients(), carnitas.prepIngredients(), additionalRecipe.howToMakeSalsa();




//random non prototype function
function Test (phrase){
    this.phrase = phrase;
}
function exampleTest(meat) {
    tacoRecipe.call(this, meat);
    this.random = 'i am hungry';
}
console.log(new exampleTest('I fail at life'));