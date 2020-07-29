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

            var liElement = document.createElement("li");
            var imgElement = document.createElement("img");
            var h3Element = document.createElement("h3");
            var pElement = document.createElement("p");
            var price = document.createElement("span");
                price.classList.add("price");


            imgElement.setAttribute("src", response[i].imageUrl);
            h3Element.textContent = response[i].name;
            pElement.textContent = response[i].description;
            price.textContent = response[i].price;

            liElement.appendChild(imgElement);
            liElement.appendChild(h3Element);
            liElement.appendChild(pElement);
            liElement.appendChild(price);

            ulElement.appendChild(liElement);
        }

    }
}

request.open("GET", "http://localhost:3000/api/teddies");
request.send();