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

