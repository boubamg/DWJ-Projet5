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
        var teddie = JSON.parse(response)
        
    // Create element 

        var imgProductDiv = document.createElement("div")
            imgProductDiv.classList.add("imgProduct");
        var infoProductDiv = document.createElement("div")
            infoProductDiv.classList.add("infoProduct");
        var teddieImg = document.createElement("img")
            teddieImg.setAttribute("src", teddie.imageUrl);
        var teddieName = document.createElement("h1")
            teddieName.textContent(teddie.name);
        var teddieDescription = document.createElement("p")
            teddieDescription.textContent(teddie.description);
        var teddiePrice = document.createElement("span")
            teddiePrice.classList.add("price")
            teddiePrice.textContent(teddie.price);
        var buttonAdd = document.createElement("button")
            buttonAdd.classList.add("btn");

        var container = document.querySelector(".container2");
    

    },
    function(error){
        console.log(error)
    });
}

getSpecifictTeddie();