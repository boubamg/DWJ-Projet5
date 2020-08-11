const basket = localStorage.getItem('basket');

const basketManagement = function(){
    if (basket){
        getBasket();
    } else {
        emptyBasket();
    }
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

basketManagement();