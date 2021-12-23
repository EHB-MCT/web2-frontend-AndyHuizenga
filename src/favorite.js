let listAllDrinks = [];
async function getData() {
    //get the list

    const response = await fetch(`https://web2-courseproject-andyh.herokuapp.com/favoriteDrinks`)
    const data = await response.json();

    data.forEach(drink => {

        listAllDrinks.push(drink)
        console.log(drink);
        console.log(`
        name: ${drink.name}, 
        ingredient1: ${drink.ingredient1}, 
        ingredient2: ${drink.ingredient2}, 
        ingredient3: ${drink.ingredient3}, 
        img: ${drink.img}, 
        amount1: ${drink.amount1},
        amount2: ${drink.amount2},
        amount3: ${drink.amount3},
        instruction: ${drink.in},
        id: ${drink._id}
        `)
    })
    buildList()
}
getData()

function buildList() {
    let html = ``;
    listAllDrinks.forEach(drink => {
        html += ` 
<div class="flex-container">
    <div class="flex-item" style="justify-content:space-between;">
             
    <img src="./images/icons/element-line.png" width="150px" height="10px" margin="0" alt="">
    <div class="imgHolder">    <img id="favouriteThumb" src="${drink.img}"
            style="max-width: 250px; display:block; margin-left:40px; " alt="">
           <span id="nameDr"> ${drink.name} </span> </div>
    </div>
    <div class="flex-item">
        <div id="ingredients4">
   
            <div id="all1in4">
            
                <img id="ingredientsImg" src="https://www.thecocktaildb.com/images/ingredients/${drink.ingredient1}-Small.png" alt="">
                <div>
                    <span>${drink.ingredient1}</span><br>
                    <span>${drink.amount1}</span>
                </div>
            </div>
            <div id="all1in4">
                <img id = "ingredientsImg"
                src = "https://www.thecocktaildb.com/images/ingredients/${drink.ingredient2}-Small.png"
                alt = "" >
                <div>
                  <span>${drink.ingredient2}</span><br>
                    <span>${drink.amount2}</span>
                </div>
            </div>
            <div id="all1in4">
                <img id = "ingredientsImg"
                src = "https://www.thecocktaildb.com/images/ingredients/${drink.ingredient3}-Small.png"
                alt = "" >
                <div>
                  <span>${drink.ingredient3}</span><br>
                    <span>${drink.amount3}</span>
                </div>
            </div>
              <div id="all1in4">
                <img id = "ingredientsImg"
                src = "https://www.thecocktaildb.com/images/ingredients/${drink.ingredient4}-Small.png"
                alt = "" >
                <div>
                  <span>${drink.ingredient4}</span><br>
                    <span>${drink.amount4}</span>
                </div>
            </div>
            
        </div>
    </div>
    <div class="flex-item" id="centerOptions">
      <button  id="optionsEl">STEPS</button> 
      <button  onclick="drinkTried(${drink.id})" id="optionsEl">${drink.timesTried}<img width="30px" src="./images/icons/cocktail.png"</img></button> 
      <button onclick="deleteDrink(${drink.id})" id="optionsEl"> DELETE </button>
    </div>
    </div> `
    })
    document.getElementById('showFavorites').innerHTML = html;
}


function deleteDrink(id) {

    let deleteDrink = listAllDrinks.find(drink => drink.id == id)
    let newarray = listAllDrinks.filter(drink => drink.id != deleteDrink.id)
    listAllDrinks = newarray;
    let dbID = deleteDrink._id
    buildList()


    let url = "https://web2-courseproject-andyh.herokuapp.com/favoriteDrinks/"

    fetch(url + dbID, {
            method: 'DELETE',
        })
        .then(res => res.json()) // or res.json()
        .then(function render() {
            alert(`Succesfully deleted the drink ${drink.name} out of your favorite drinks`)

        })
        .catch(error => {
            throw (error);
        })

}


function drinkTried(id) {

    //put info 
    let triedOne = listAllDrinks.find(drink => drink.id == id)
    let amount = triedOne.timesTried;
    newAmount = amount + 1;
    let dbID = triedOne._id

    //updatearray
    console.log("beforeNewArray", listAllDrinks.length)
    let newarray = listAllDrinks.filter(drink => drink.id != triedOne.id)
    console.log("afterNewArray", newarray.length)
    listAllDrinks = newarray;

    const data = {
        name: triedOne.name,
        ingredient1: triedOne.ingredient1,
        ingredient2: triedOne.ingredient2,
        ingredient3: triedOne.ingredient3,
        img: triedOne.img,
        amount1: triedOne.amount1,
        amount2: triedOne.amount2,
        amount3: triedOne.amount3,
        instruction: triedOne.instruction,
        timesTried: newAmount,
        id: triedOne.id,

    }
    console.log("data", data)
    console.log("first1", listAllDrinks.length)
    listAllDrinks.push(data)
    console.log("first2", listAllDrinks.length)

    console.log("data", data)

    alert(`You made the drink called ${data.name}.You have drinked it ${data.timesTried} times now!`)
    const putMethod = {
        method: 'PUT', // Method itself
        headers: {
            'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
        },
        body: JSON.stringify(data) // We send data in JSON format
    }

    let url = "https://web2-courseproject-andyh.herokuapp.com/favoriteDrinks/"
    // // make the HTTP put request using fetch api
    fetch(url + dbID, putMethod)
        .then(response => response.json())
        .then(data => buildList()) // Manipulate the data retrieved back, if we want to do something with it
        .catch(err => console.log(err)) // Do something with the error
    // 


}