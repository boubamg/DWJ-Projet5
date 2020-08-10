
const basketManagement = function(){
    if (localStorage.length != 0){
        getBasket();
    } else {
        emptyBasket();
    }
}