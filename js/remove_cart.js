//Get list of all buttons
buttons_cart = document.querySelector('#cart-table');
//Add event listener on cart portion
buttons_cart.addEventListener("click" , delete_from_cart);
empty_button = document.querySelector('#empty-cart')
empty_button.addEventListener("click" , empty_display_cart);


/**
 * Delete selected item from cart
 * @param {*} event 
 */
function delete_from_cart(event){
    //Get list of all buttons
    del_buttons = document.querySelectorAll('.delete_btn');
    for (let i = 0; i < del_buttons.length; i++ ){
        //If user clicked on one of the buttons
        if (event.target == del_buttons[i]){
            //Delete item from cart with specified button index
            delete_item_from_cart(i);
            //Get new cart from localStorage
            cart = getLocalStorage();
            //Display new cart
            displayCart(cart);

        }
    }
}

/**
 * Delete a specified item in local storage from its index
 * @param {Number} index Specified index
 */
function delete_item_from_cart(index){
    //Get cart
    let cart = getLocalStorage();
    //Display dialog box popup
    delete_dialog_box(index);
    //Delete item from cart
    cart.splice(index, 1)
    //Set new cart from localStorage
    setCart(cart);
}
/**
 * Empty the current cart
 */
function empty_display_cart(){
    //Empty cart
    setEmptyCart();
    //Display dialog box popup
    empty_dialog_box();
    //Refresh cart display
    displayCart();
}



/**
 * Set an empty cart
 */
function setEmptyCart(){
    let cart = [];
    setCart(cart);
}
