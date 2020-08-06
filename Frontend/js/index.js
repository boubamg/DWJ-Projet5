var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            // Create ul tag
            var ulElement = document.createElement("ul");

            // Put <ul> in container class
            var container = document.querySelector(".container");
            container.appendChild(ulElement);
            

        var response = JSON.parse(this.responseText); 
        for(var i = 0; i < response.length; i++ ) {

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


            liElement.setAttribute("id", response[i]._id);
            imgElement.setAttribute("src", response[i].imageUrl);
            h3Element.textContent = response[i].name;
            price.textContent = response[i].price + " €";

            a1Element.setAttribute("href", "./pages/produit.html");
            a1Element.appendChild(imgElement);
            
            a2Element.setAttribute("href", "./pages/produit.html");
            a2Element.appendChild(h3Element);

            divElement.appendChild(a2Element);
            divElement.appendChild(price);
            divElement.appendChild(buttonAdd);

            liElement.appendChild(a1Element);
            liElement.appendChild(divElement);
            ulElement.appendChild(liElement);
        }
    }
}

request.open("GET", "http://localhost:3000/api/teddies");
request.send();