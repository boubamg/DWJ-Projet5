// Articles in Basket
const basket = localStorage.getItem('basket');
const basketParsed = JSON.parse(basket);

// Main Function 
const basketManagement = function(){
    if (basketParsed != 0){
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
        h1Element.textContent = "Orinoco - Panier";
    var ulElement = document.createElement("ul");
        ulElement.classList.add("basketList");

    container.appendChild(h1Element);
    DeleteBasket();
    container.appendChild(ulElement);

    for(var i = 0; i < basketParsed.length; i++){

        var selectTeddie = basketParsed[i];

        // Create Element
        var liElement = document.createElement("li");

        var divImgBasket = document.createElement("div");
            divImgBasket.classList.add("imgBasket");
        var divInfoBasket = document.createElement("div");
            divInfoBasket.classList.add("infoBasket");
        var divPriceBasket = document.createElement("div");
            divPriceBasket.classList.add("priceBasket")

        var imgTeddie = document.createElement("img");
            imgTeddie.classList.add("img-fluid");
        var infoTeddie = document.createElement("h3");
        var priceTeddie = document.createElement("span");
            priceTeddie.classList.add("price");
        var deleteButton = document.createElement("a");
            deleteButton.href = "javascript:window.location.reload()";


        deleteButton.addEventListener("click", function(){

            // Array of Teddies for basket
            var teddieArray = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [];
            
            // Delete Teddie object in Array
            teddieArray.splice( selectTeddie, 1 );

            // Save teddie array in localstorage basket
            localStorage.setItem("basket", JSON.stringify(teddieArray));

            getBasketNb()
        });
        

        // Element Content
        imgTeddie.src = selectTeddie.image;
        infoTeddie.textContent = selectTeddie.name + " - " + selectTeddie.color;
        priceTeddie.textContent = selectTeddie.price + '€';
        deleteButton.textContent = "Supprimer";

        // Structure
        divImgBasket.appendChild(imgTeddie);
        divInfoBasket.appendChild(infoTeddie);
        divInfoBasket.appendChild(deleteButton);
        divPriceBasket.appendChild(priceTeddie);

        liElement.appendChild(divImgBasket);
        liElement.appendChild(divInfoBasket);
        liElement.appendChild(divPriceBasket);

        ulElement.appendChild(liElement);
    }
    
}

const emptyBasket = function(){

    var container = document.querySelector(".container");

    var h1Element = document.createElement("h1");
    var emptyBasketText = document.createElement("p");
        emptyBasketText.classList.add("text-center");
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

var DeleteBasket = function(){

    var container = document.querySelector(".container");

    var deleteAll = document.createElement("a");
        deleteAll.textContent = "Vider le panier";
        deleteAll.href = "javascript:window.location.reload()";
    
    deleteAll.addEventListener("click", function(){
        localStorage.clear();
    });

    container.appendChild(deleteAll)
}

basketManagement();