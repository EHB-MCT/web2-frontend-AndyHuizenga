async function loadUser(user) {
    const response = await fetchUser("https://web2-courseproject-andyh.herokuapp.com/users");
    const users = await response.json();

    return users;


}


document.addEventListener('DOMContentLoaded', async () => {
    let users = [];

    try {
        const user = await loadUser();

    } catch (e) {
        console.log("Error")
        console.log(e);
    }

    console.log(users);
})