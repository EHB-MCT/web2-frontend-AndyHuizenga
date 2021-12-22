let listAllDrinks = [];
async function getData() {
    //get the list

    const response = await fetch(`https://web2-courseproject-andyh.herokuapp.com/favoriteDrinks`)
    const data = await response.json();
    console.log("data", data)


    console.log("hello", data);

    data.forEach(drink => {

        listAllDrinks.push(drink)
        console.log("drink", drink);
        console.log("alldrinks", listAllDrinks);
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
        <img id="favouriteThumb" src="${drink.img}"
            style="max-width: 250px; display:block; margin-left:40px; " alt="">
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
        <div id="optionsEl">STEPS</div>
        <div id="optionsEl">TRIED</div>
        <div id="optionsEl">DELETE</div>
    </div>
    </div>
          `
    })
    document.getElementById('showFavorites').innerHTML = html;
}