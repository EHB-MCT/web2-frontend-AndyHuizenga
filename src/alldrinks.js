import _ from 'lodash';


let listAllDrinks = [];
let favoriteDrinks = [];
let onlyThisletter = "a";


console.log('listAllDrinks', listAllDrinks)
console.log('favoriteDrinks', favoriteDrinks)
console.log('onlythisletter', onlyThisletter)

getData()


//Filter 
var selectorAZ = document.getElementById("chosenLetter");

function show() {
    var letter = document.getElementById('chosenLetter').value;
    console.log("letter", letter);
    onlyThisletter = letter;
    console.log("filterletter", onlyThisletter);
    listAllDrinks = [];
    getData(onlyThisletter)
}
selectorAZ.onchange = show;
show();

//Fetch all drinks 
async function getData(onlyThisletter) {
    //get the list

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${onlyThisletter}`)
    const data = await response.json();
    console.log("data", data)
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
        instruction: ${drink.strInstructions},
        id: ${drink.idDrink}
        `)
    })
    buildList()
}

//create HTML with all drinks 
function buildList() {
    let html = ``;
    listAllDrinks.forEach(drink => {
        html += `   <div>
                        <h2>${drink.strDrink}</h2>
                    <div class="addHolder"><img id='oneDrinkImg'src="${drink.strDrinkThumb}" alt="">
                             <btn href="#" id="${drink.idDrink}" class="btn">+</btn>
                             </div>
                             <div class="ingredientShow">
                             <img id="ingredientImg" src = "https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png" alt = "">
                        <span> ${drink.strIngredient1}</span></div>
                             <div class="ingredientShow">  <img id="ingredientImg" src = "https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient2}-Small.png" alt = "">
                        <span> ${drink.strIngredient2}</span></div>
                    </div>`
    })
    document.getElementById('row4').innerHTML = html;

    document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', event => {
            //Get the id of the clicked item
            let id = event.target.id;
            console.log("ID of the drink", id)
            let addToFav = listAllDrinks.find(drink => drink.idDrink == id);
            //Add the favoriteDrink to the Array of drinks and start Fetch post
            favoriteDrinks.push(addToFav);

            uploadFavoriteDrinks(addToFav);
            console.log("Array with favoriteDrinks", favoriteDrinks)
        });
    });
}

function uploadFavoriteDrinks(drink) {
    const url = 'https://web2-courseproject-andyh.herokuapp.com/favoriteDrinks';
    // post body data 
    const newFavDrink = {

        name: drink.strDrink,
        ingredient1: drink.strIngredient1,
        ingredient2: drink.strIngredient2,
        ingredient3: drink.strIngredient3,
        img: drink.strDrinkThumb,
        amount1: drink.strMeasure1,
        amount2: drink.strMeasure2,
        amount3: drink.strMeasure3,
        instruction: drink.strInstructions,
        timesTried: 0,
        id: drink.idDrink

    };
    console.log("step2 fav:", newFavDrink)

    // request options
    const options = {
        method: 'POST',
        body: JSON.stringify(newFavDrink),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // send POST request
    fetch(url, options)
        .then(res => res.json())
        .then(res => alert(`Succesfully added the drink ${newFavDrink.name} in favorites`));



}





// document.querySelectorAll('.btn-tried').forEach(item => {
//     item.addEventListener('click', event => {
//         //Get the id of the clicked item
//         let id = event.target.id;
//         console.log("step1", id)

//     });

//     const putMethod = {
//         method: 'PUT', // Method itself
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
//         },
//         body: JSON.stringify(drinktochange) // We send data in JSON format
//     }

//     // make the HTTP put request using fetch api

