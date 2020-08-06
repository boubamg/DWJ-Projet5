// * MAIN Function * Connection to API
var get = function(url, success, error){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState === 4 && this.status == 200){
            success(this.responseText);
        } else {
            error(request);
        }
    }
    request.open("GET", url);
    request.send();
}

// * Function * Display Teddies
var getPost = function(){

    get("http://localhost:3000/api/teddies",

    // Success Params
    function(response){

        var teddies = JSON.parse(response);
        console.log(teddies)

        var container = document.querySelector(".container");

            var ulElement = document.createElement("ul");
            container.appendChild(ulElement)

        // Loop for each Teddie Object
        for(var i = 0; i < teddies.length; i++ ) {
            
            // Creation of Tag
            var liElement = document.createElement("li");
            var a1Element = document.createElement("a");
            var a2Element = document.createElement("a");
            var buttonAdd = document.createElement("button");
                buttonAdd.textContent = "Ajouter au panier";
            var imgElement = document.createElement("img");
            var divElement = document.createElement("div")
            var h3Element = document.createElement("h3");
            var price = document.createElement("span");
                price.classList.add("price");

            // Display informations for each Teddies
            liElement.setAttribute("id", teddies[i]._id);
            imgElement.setAttribute("src", teddies[i].imageUrl);
            h3Element.textContent = teddies[i].name;
            price.textContent = teddies[i].price + " €";

            // Add links
            a1Element.setAttribute("href", "./pages/produit.html?id=" + teddies[i]._id);
            a1Element.appendChild(imgElement);
            
            a2Element.setAttribute("href", "./pages/produit.html" + teddies[i]._id);
            a2Element.appendChild(h3Element);

            // Built structure
            divElement.appendChild(a2Element);
            divElement.appendChild(price);
            divElement.appendChild(buttonAdd);
            liElement.appendChild(a1Element);
            liElement.appendChild(divElement);
            ulElement.appendChild(liElement);
        }
    }, 
    // Error Params
    function(error){
        console.log("Erreur AJAX : " + error)
    })
}

// Function call
getPost();