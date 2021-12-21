let favoriteDrinks = [];


window.addEventListener('load', () => {
    console.log('page is fully loaded');
    getfavoriteDrinks()
});

function getfavoriteDrinks() {
    const url = 'https://web2-courseproject-andyh.herokuapp.com/favoriteDrinks';
    // post body data 


    // request options


    // send Get request
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("step1:incoming data",data)
            favoriteDrinks.push(data)
            buildList()
        }).catch(err => {
            console.error('Error: ', err);
        });

    console.log("favoriteAdded")



}

function buildList() {
    let html = ``;
    favoriteDrinks.forEach(drink => {
        console.log("step1", drink)
        html += ` ${drink.strDrink} `
    })
    document.getElementById('showFavorites').innerHTML = html;

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