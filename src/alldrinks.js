let listAllDrinks = []
console.log('listAllDrinks', listAllDrinks)
const row4 = document.getElementById("row4");

getData()
async function getData() {
    //get the list

    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    const data = await response.json();
    list = data.drinks;


    console.log("hello", list);

    list.forEach(drink => {

        listAllDrinks.push(drink)
        console.log(`
        name: ${drink.strDrink}, 
        ingredient1: ${drink.strIngredient1}, 
        ingredient2: ${drink.strIngredient2}, 
        ingredient3: ${drink.strIngredient3}, 
        img: ${drink.strDrinkThumb}, 
        amount1: ${drink.strMeasure1},
        amount2: ${drink.strMeasure2},
        amount3: ${drink.strMeasure3},
        instruction: ${drink.strInstructions}
        `)
    })
    buildList()
}

function buildList() {
    let html = ``;

    listAllDrinks.forEach(drink => {
        html += `   <div>
                        <h2>${drink.strDrink}</h2>
                     <img id='oneDrinkImg'src="${drink.strDrinkThumb}" alt="">
                        <p>${drink.strIngredient1}</p>
                        <span>${drink.strMeasure1}</span>
                        <p>${drink.strIngredient2}</p>
                        <span>${drink.strMeasure2}</span>
                    </div>`
    })
    document.getElementById('row4').innerHTML = html;



}