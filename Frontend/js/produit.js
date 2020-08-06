var request = new XMLHttpRequest();
request.onreadystatechange = function(){
    
}
request.open("GET", "http://localhost:3000/api/teddies/" + id);
request.send();