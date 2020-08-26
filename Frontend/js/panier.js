// Articles in Basket
const basket = localStorage.getItem('basket') ? localStorage.getItem('basket') : "";
const basketParsed = localStorage.getItem('basket') ? JSON.parse(basket) : "";

// Main Function 
const basketManagement = () => {
    if (basketParsed != 0){
        getBasketNb();
        getBasket();
        orderTeddie();
    } else {
        emptyBasket();
    }
}

 // See Nb Item in Basket
const getBasketNb = () => { 
    var basketNb = document.querySelector(".fa-shopping-bag");
    NbItem = localStorage.getItem("basket") ? JSON.parse(localStorage.basket) : 0;
    basketNb.textContent = NbItem.length;
}

// Get all articles in Basket
const getBasket = () => {

    var container = document.querySelector(".container");

    // Creation of elements
    var h1Element = document.createElement("h1");
        h1Element.textContent = "Orinoco - Panier";
    var ulElement = document.createElement("ul");
        ulElement.classList.add("basketList");
    var totalPrice = document.createElement("p");
        totalPrice.classList.add("totalPrice", "text-right");
        totalPrice.textContent = "Montant Total : " + getTotalPrice() + "€";

    container.appendChild(h1Element);
    deleteBasket();
    container.appendChild(ulElement);
    container.appendChild(totalPrice);

    for(var i = 0; i < basketParsed.length; i++){

        var selectTeddie = basketParsed[i];

        // Create Element
        var liElement = document.createElement("li");

        var divImgBasket = document.createElement("div");
            divImgBasket.classList.add("imgBasket");
        var divInfoBasket = document.createElement("div");
            divInfoBasket.classList.add("infoBasket");
        var divPriceBasket = document.createElement("div");
            divPriceBasket.classList.add("priceBasket");

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

const deleteBasket = () => {

    var container = document.querySelector(".container");

    var deleteAll = document.createElement("a");
        deleteAll.textContent = "Vider le panier";
        deleteAll.classList.add("btn", "btn-danger", "deleteAllButton");
        
        deleteAll.href = "javascript:window.location.reload()";
    
    deleteAll.addEventListener("click", function(){
        localStorage.clear();
        getBasketNb();
    });

    container.appendChild(deleteAll)
}

// Order teddies
const orderTeddie = () => {

    const inputFirstname = document.querySelector("#firstname");
    const inputLastname = document.querySelector("#lastname");
    const inputEmail = document.querySelector("#email");
    const inputAddress = document.querySelector("#address");
    const inputCity = document.querySelector("#city");
    const orderingForm = document.querySelector("form");

    orderingForm.addEventListener("submit", function(event){
        event.preventDefault();

        const contact = {
            firstName: inputFirstname.value,
            lastName: inputLastname.value,
            address: inputAddress.value,
            city: inputCity.value,
            email: inputEmail.value,
        }

        const products = [];
        for(i = 0; i < basketParsed.length; i++){
            products.push(basketParsed[i].id);
        }  

        var orderingInformation = {contact, products}

        StringOrderingInformation = JSON.stringify(orderingInformation)

        fetch("http://localhost:3000/api/teddies/order",{
            method: 'POST',
            body: StringOrderingInformation,
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(order =>  {
            localStorage.setItem("order", JSON.stringify(order));
            window.location.href = "confirmation.html";
        })
        .catch(err => console.log(err))
    })
    
} 

// Get total order price 
const getTotalPrice = () => {
    var price = 0;
    for(var i = 0; i < basketParsed.length; i++){
        price += basketParsed[i].price;
    }
    return price;
}

// If basket is empty : 

const emptyBasket = () => {

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

    disableForm();
}
const disableForm = () => {
    
    var allInput = document.querySelectorAll("input");
    allInput.forEach(function(input){
        input.setAttribute("disabled","");
    });
    const orderingButton = document.querySelector("#orderingButton");
    orderingButton.setAttribute("disabled","");
}

basketManagement();