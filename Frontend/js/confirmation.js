// Variable
const ordered = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
const basketParsed = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [];

var displayCommand = () => {
    // Create Element * SECTION VALIDATE *
    var thanksDiv = document.createElement("div");
        thanksDiv.classList.add("thankyou");
    var thanksP = document.createElement("p");
        thanksP.innerHTML = "Merci " + ordered.contact.firstName + " :) <br/> À bientot !" 
    thanksDiv.appendChild(thanksP);

    // Create Element * SECTION SUMMARY *
    var orderId = document.createElement("p");
        orderId.innerHTML = "<span class='bold'>Numéro de commande :</span> <br/>" + ordered.orderId;
    var totalPrice = document.createElement("p");
        totalPrice.innerHTML = "<span class='bold'>Prix Total :</span> <br/>" + getTotalPrice() + " €";

    var orderIdDiv = document.createElement("div");
        orderIdDiv.classList.add("orderId");
    var totalPriceDiv = document.createElement("div");
        totalPriceDiv.classList.add("totalPriceConfirmation");

    orderIdDiv.appendChild(orderId);
    totalPriceDiv.appendChild(totalPrice);

    // Html Element
    var container = document.querySelector(".container");
    var validateSection = document.querySelector(".validate");
    var summarySection = document.querySelector(".summary");

    // Construction Structure
    validateSection.appendChild(thanksDiv);

    summarySection.appendChild(orderIdDiv);
    summarySection.appendChild(totalPriceDiv);
}

var getTotalPrice = function(){
    var price = 0;
    for(var i = 0; i < basketParsed.length; i++){
        price += basketParsed[i].price;
    }
    return price;
}

displayCommand();