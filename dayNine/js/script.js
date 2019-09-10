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

const asadaTaco = new tacoRecipe('carne asada', ['garlic powder', 'cumin', 'onion powder', 'salt & pepper'], ['lemon', 'tomato', 'onion', 'letuce', 'cilantro', 'radish'], 'corn tortilla');

console.log(asadaTaco.prepIngredients());
