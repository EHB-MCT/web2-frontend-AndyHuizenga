let Matches = []

//create HTML with all drinks 

let popIngridients = ["Strawberry", "Cherry", "Citrus", "Cloves", "Cinnamon"]
let popDrinks = ["Gin", "Rum", "Vodka", "Scotch", "Tequila"]

async function newDrink(ingredient) {
    console.log(ingredient)
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    const data = await response.json();
    Matches = data.drinks;

}
