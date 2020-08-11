// Articles in Basket
const basket = localStorage.getItem('basket');

// Main Function 
const basketManagement = function(){
    if (basket){
        getBasketNb();
        getBasket();

    } else {
        emptyBasket();
    }
}

// Get all articles in Basket
const getBasket = () => {

    var container = document.querySelector(".container");

    // Creation of elements
    var h1Element = document.createElement("h1");

    // Elements Content
    h1Element.textContent = "Orinoco - Panier";

    // Structure
    container.appendChild(h1Element);
    
}

const emptyBasket = function(){

    var container = document.querySelector(".container");

    var h1Element = document.createElement("h1");
    var emptyBasketText = document.createElement("p");
    var homeButton = document.createElement("a");

    h1Element.textContent = "Orinoco - Panier";
    emptyBasketText.textContent = "Votre panier est vide, cliquez ci-dessous pour voir nos articles.";
    homeButton.textContent = "Tous les articles";
    homeButton.classList.add("btn");
    homeButton.href = "../index.html";

    container.appendChild(h1Element);
    container.appendChild(emptyBasketText);
    container.appendChild(homeButton);

}

 // See Nb Item in Basket
var getBasketNb = function(){ 
     var basketNb = document.querySelector(".fa-shopping-bag");
     NbItem = localStorage.getItem("basket") ? JSON.parse(localStorage.basket) : 0;
     basketNb.textContent = NbItem.length;
}

basketManagement();