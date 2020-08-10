// Connect to API
var get = function(url, success, error){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(this.readyState === 4 && this.status == 200){
            success(this.responseText);
        } else {
            error(request)
        }
    }
    request.open("GET", url);
    request.send();
}

// Find 'id' parameter in Url 
const urlParams = window.location.search;
const searchParams = new URLSearchParams(urlParams);
const id = searchParams.get("id");

// Display Specific Teddie

var getSpecifictTeddie = function(){
    get("http://localhost:3000/api/teddies/" + id, 
    function(response){
        var teddie = JSON.parse(response);
        
    // Create element 

        var imgProductDiv = document.createElement("div");
            imgProductDiv.classList.add("imgProduct");

        var infoProductDiv = document.createElement("div");
            infoProductDiv.classList.add("infoProduct");

        var teddieImg = document.createElement("img");
            teddieImg.setAttribute("src", teddie.imageUrl);
            teddieImg.classList.add("img-fluid");

        var teddieName = document.createElement("h1");
            teddieName.textContent = teddie.name + " - Ours en peluche";

        var teddieDescription = document.createElement("p")
            teddieDescription.textContent = teddie.description;

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
            

        var buttonAdd = document.createElement("button");
            buttonAdd.textContent = "Ajouter au panier";
            buttonAdd.classList.add("btn");

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

    },
    function(error){
        console.log(error);
    });
}

var addToBasket = function(){
    get("http://localhost:3000/api/teddies/" + id,

    function(response){

        var teddie = JSON.parse(response);
        var selectColor = document.querySelector("select");
        var buttonAdd = document.querySelector("button");
        var basketNb = document.querySelector(".fa-shopping-bag");

        // Click Listener
        buttonAdd.addEventListener("click", function(){

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
       
        });
    }, 

    function(error){
        console.log(error)
    });
}

getSpecifictTeddie();
addToBasket();