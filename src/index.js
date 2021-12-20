//GET USERS

async function loadUsers() {
    const response = await fetch("https://web2-courseproject-andyh.herokuapp.com/allUsers");
    const users = await response.json();
    return users;


}
document.addEventListener('DOMContentLoaded', async () => {
    let users = [];

    try {
        users = await loadUsers();


    } catch (e) {
        console.log("Error");
        console.log(e);
    }

    console.log(users);
})

//GET FAVORITE DRINKS

async function loadDrinks() {
    const response = await fetch("https://web2-courseproject-andyh.herokuapp.com/favoriteDrinks");
    const allDrinks = await response.json();
    return allDrinks;


}
document.addEventListener('DOMContentLoaded', async () => {
    let favoriteDrinks = [];

    try {
        favoriteDrinks = await loadDrinks();


    } catch (e) {
        console.log("Error");
        console.log(e);
    }

    console.log(favoriteDrinks);
})

//GET API 

async function getcocktails() {
    const response = await fetch("");
    const users = await response.json();
    return users;


}
document.addEventListener('DOMContentLoaded', async () => {
    let drinks = [];

    try {
        drinks = await getcocktails();


    } catch (e) {
        console.log("Error");
        console.log(e);
    }

    console.log(drinks);
})