//Get list of all buttons
buttons_cart = document.querySelector('#cart-table');
buttons_cart.addEventListener("click" , delete_from_cart);


function delete_from_cart(event){
    //Get list of all buttons
    del_buttons = document.querySelectorAll('.delete_btn');
    for (let i = 0; i < del_buttons.length; i++ ){
        //If user clicked on one of the buttons
        if (event.target == del_buttons[i]){
            let table = ['jean', 'robin'];
            delete_item_from_localStorage(i);
        }
    }
}

function delete_item_from_localStorage(index){
    let panier = getLocalStorage();
    panier.splice(index, 1)
    setCart(panier)
}