var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText)
    }
}

request.open("GET", "http://localhost:3000/api/teddies");
request.send();