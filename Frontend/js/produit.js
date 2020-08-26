// Find 'id' parameter in Url 
const urlParams = window.location.search;
const searchParams = new URLSearchParams(urlParams);
const id = searchParams.get("id");

// Connect to API
fetch("http://localhost:3000/api/teddies/" + id)
    .then(response => response.json())
    .then(teddie => {
        displaySpecifictTeddie(teddie);
        getBasketNb();
    }).catch(err => console.log(err))

// Display Specific Teddie
const displaySpecifictTeddie = (teddie) => {
    
    // Create element 

        // Image Div
        var imgProductDiv = document.createElement("div");
            imgProductDiv.classList.add("imgProduct");

        // Info Div
        var infoProductDiv = document.createElement("div");
            infoProductDiv.classList.add("infoProduct");

        // teddie Image
        var teddieImg = document.createElement("img");
            teddieImg.setAttribute("src", teddie.imageUrl);
            teddieImg.classList.add("img-fluid");

        // teddie Name
        var teddieName = document.createElement("h1");
            teddieName.textContent = teddie.name + " - Ours en peluche";

        // teddie Description
        var teddieDescription = document.createElement("p")
            teddieDescription.textContent = teddie.description;

        // teddie Price
        var teddiePrice = document.createElement("span");
            teddiePrice.classList.add("price");
            teddiePrice.textContent = "Prix : " + teddie.price/100 + " €";

            // Dropdown list
            var labelDropdownColor = document.createElement("label");
                labelDropdownColor.setAttribute("for", "colorSelector");
                labelDropdownColor.textContent = "Choisissez une couleur : ";

            var SelectColor = document.createElement("select");
                SelectColor.setAttribute("name", "colors");
                SelectColor.setAttribute("id", "colorSelector");

            for(i = 0; i < teddie.colors.length; i++) {
                var optionList = document.createElement("option");
                    optionList.setAttribute("value", teddie.colors[i]);
                    optionList.textContent = teddie.colors[i];
                    SelectColor.appendChild(optionList);
            }
            
        // Button Add To Basket
        var buttonAdd = document.createElement("button");
            buttonAdd.textContent = "Ajouter au panier";
            buttonAdd.classList.add("btn");
            addToBasket(SelectColor ,buttonAdd, teddie);

        var container = document.querySelector(".container2");
    
    // Create structure

        container.appendChild(imgProductDiv);
        container.appendChild(infoProductDiv);

        imgProductDiv.appendChild(teddieImg);

        infoProductDiv.appendChild(teddieName);
        infoProductDiv.appendChild(teddiePrice);
        infoProductDiv.appendChild(teddieDescription);
        infoProductDiv.appendChild(labelDropdownColor);
        infoProductDiv.appendChild(SelectColor);
        infoProductDiv.appendChild(buttonAdd);

}

var addToBasket = function(selectColor, button, teddie){

        // Click Listener
        button.addEventListener("click", function(){

            // Array of Teddies for basket
            var teddieArray = localStorage.getItem("basket") ? JSON.parse(localStorage.getItem("basket")) : [];

            // Teddie object
            var teddieObj = {
                id : teddie._id,
                image : teddie.imageUrl,
                name : teddie.name,
                price : teddie.price/100,
                color : selectColor.value,
            }
            
            // Add Teddie object in Array
            teddieArray.push(teddieObj);

            // Save teddie array in localstorage basket
            localStorage.setItem("basket", JSON.stringify(teddieArray));

            getBasketNb()
       
        });
}

var getBasketNb = function(){
     // See Nb Item in Basket
     var basketNb = document.querySelector(".fa-shopping-bag");
     NbItem = localStorage.getItem("basket") ? JSON.parse(localStorage.basket) : 0;
     basketNb.textContent = NbItem.length;
}