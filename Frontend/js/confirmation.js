// Variable
const ordered = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : "";
const basketParsed = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : "";

var displayCommand = () => {

    if(localStorage.getItem("order") && localStorage.getItem("basket")){

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
    var validateSection = document.querySelector(".validate");
    var summarySection = document.querySelector(".summary");

    // Construction Structure
    validateSection.appendChild(thanksDiv);

    summarySection.appendChild(orderIdDiv);
    summarySection.appendChild(totalPriceDiv);

    localStorage.clear();

    } else {

        var svgElement = document.querySelector("svg");
        svgElement.classList.add("d-none");
        var h2Error = document.createElement("h2");
        h2Error.textContent = "Une erreur s'est produite";
        h2Error.classList.add("error");

        var SummarySection = document.querySelector(".summary");
        SummarySection.appendChild(h2Error);
    }

    var backHomeLink = document.createElement("a");
        backHomeLink.href = "../index.html";
        backHomeLink.textContent = "Retour à l'accueil";
        backHomeLink.classList.add("text-center")

    var container = document.querySelector(".container");
        container.appendChild(backHomeLink)

    
}

var getTotalPrice = function(){
    var price = 0;
    for(var i = 0; i < basketParsed.length; i++){
        price += basketParsed[i].price;
    }
    return price;
}

displayCommand();