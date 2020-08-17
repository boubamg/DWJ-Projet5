var ordered = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];

// Create Element
var thanksDiv = document.createElement("div");
thanksDiv.classList.add("thankyou");
var thanksP = document.createElement("p");
thanksDiv.textContent = "Merci " + ordered.contact.firstName + " ! À bientot" 
thanksDiv.appendChild(thanksP);

// Html Element
var container = document.querySelector(".container");
var validateSection = document.querySelector(".validate");

validateSection.appendChild(thanksDiv);