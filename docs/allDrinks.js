/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/allDrinks.js":
/*!**************************!*\
  !*** ./src/allDrinks.js ***!
  \**************************/
/***/ (() => {

eval("let listAllDrinks = [];\nlet favoriteDrinks = [];\nlet onlyThisletter = \"a\";\n\n\nconsole.log('listAllDrinks', listAllDrinks)\nconsole.log('favoriteDrinks', favoriteDrinks)\nconsole.log('onlythisletter', onlyThisletter)\n\ngetData()\n\n\n//Filter \nvar selectorAZ = document.getElementById(\"chosenLetter\");\n\nfunction show() {\n    var letter = document.getElementById('chosenLetter').value;\n    console.log(\"letter\", letter);\n    onlyThisletter = letter;\n    console.log(\"filterletter\", onlyThisletter);\n    listAllDrinks = [];\n    getData(onlyThisletter)\n}\nselectorAZ.onchange = show;\nshow();\n\n//Fetch all drinks \nasync function getData(onlyThisletter) {\n    //get the list\n\n    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${onlyThisletter}`)\n    const data = await response.json();\n    console.log(\"data\", data)\n    list = data.drinks;\n\n    console.log(\"hello\", list);\n\n    list.forEach(drink => {\n\n        listAllDrinks.push(drink)\n        console.log(`\n        name: ${drink.strDrink}, \n        ingredient1: ${drink.strIngredient1}, \n        ingredient2: ${drink.strIngredient2}, \n        ingredient3: ${drink.strIngredient3}, \n        img: ${drink.strDrinkThumb}, \n        amount1: ${drink.strMeasure1},\n        amount2: ${drink.strMeasure2},\n        amount3: ${drink.strMeasure3},\n        instruction: ${drink.strInstructions},\n        id: ${drink.idDrink}\n        `)\n    })\n    buildList()\n}\n\n//create HTML with all drinks \nfunction buildList() {\n    let html = ``;\n    listAllDrinks.forEach(drink => {\n        html += `   <div>\n                        <h2>${drink.strDrink}</h2>\n                    <div class=\"addHolder\"><img id='oneDrinkImg'src=\"${drink.strDrinkThumb}\" alt=\"\">\n                             <btn href=\"#\" id=\"${drink.idDrink}\" class=\"btn\">+</btn>\n                             </div>\n                             <div class=\"ingredientShow\">\n                             <img id=\"ingredientImg\" src = \"https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient1}-Small.png\" alt = \"\">\n                        <span> ${drink.strIngredient1}</span></div>\n                             <div class=\"ingredientShow\">  <img id=\"ingredientImg\" src = \"https://www.thecocktaildb.com/images/ingredients/${drink.strIngredient2}-Small.png\" alt = \"\">\n                        <span> ${drink.strIngredient2}</span></div>\n                    </div>`\n    })\n    document.getElementById('row4').innerHTML = html;\n\n    document.querySelectorAll('.btn').forEach(item => {\n        item.addEventListener('click', event => {\n            //Get the id of the clicked item\n            let id = event.target.id;\n            console.log(\"ID of the drink\", id)\n            let addToFav = listAllDrinks.find(drink => drink.idDrink == id);\n            //Add the favoriteDrink to the Array of drinks and start Fetch post\n            favoriteDrinks.push(addToFav);\n\n            uploadFavoriteDrinks(addToFav);\n            console.log(\"Array with favoriteDrinks\", favoriteDrinks)\n        });\n    });\n}\n\nfunction uploadFavoriteDrinks(drink) {\n    const url = 'https://web2-courseproject-andyh.herokuapp.com/favoriteDrinks';\n    // post body data \n    const newFavDrink = {\n\n        name: drink.strDrink,\n        ingredient1: drink.strIngredient1,\n        ingredient2: drink.strIngredient2,\n        ingredient3: drink.strIngredient3,\n        img: drink.strDrinkThumb,\n        amount1: drink.strMeasure1,\n        amount2: drink.strMeasure2,\n        amount3: drink.strMeasure3,\n        instruction: drink.strInstructions,\n        timesTried: 0,\n        id: drink.idDrink\n\n    };\n    console.log(\"step2 fav:\", newFavDrink)\n\n    // request options\n    const options = {\n        method: 'POST',\n        body: JSON.stringify(newFavDrink),\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    }\n\n    // send POST request\n    fetch(url, options)\n        .then(res => res.json())\n        .then(res => alert(`Succesfully added the drink ${newFavDrink.name} in favorites`));\n\n\n\n}\n\n\n\n\n\n// document.querySelectorAll('.btn-tried').forEach(item => {\n//     item.addEventListener('click', event => {\n//         //Get the id of the clicked item\n//         let id = event.target.id;\n//         console.log(\"step1\", id)\n\n//     });\n\n//     const putMethod = {\n//         method: 'PUT', // Method itself\n//         headers: {\n//             'Content-type': 'application/json; charset=UTF-8' // Indicates the content \n//         },\n//         body: JSON.stringify(drinktochange) // We send data in JSON format\n//     }\n\n//     // make the HTTP put request using fetch api\n\n//# sourceURL=webpack://webpack-demo/./src/allDrinks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/allDrinks.js"]();
/******/ 	
/******/ })()
;