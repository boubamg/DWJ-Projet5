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
        console.log(response);
    },
    function(error){
        console.log(error)
    })
}

getSpecifictTeddie()