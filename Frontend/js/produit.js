var url = window.location.search;
var searchParams = new URLSearchParams(url);
var id = searchParams.get("id");
console.log(id);
