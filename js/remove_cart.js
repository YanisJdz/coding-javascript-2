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
            //Get cart before removing an item in order to get which item we're targetting in database
            let cart = getLocalStorage();
            //Get title from every item in the cart
            let title = cart[i].title
            //Add one quantity to our database and then change displayed quantity 
            change_quantity_from_cart(title, add_one_quantity(title))
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
 * @param {*} index Specified index
 */
function delete_item_from_cart(index){
    //Get cart
    let cart = getLocalStorage();
    delete_dialog_box(index);
    //Delete item from cart
    cart.splice(index, 1)
    //Set new cart from localStorage
    setCart(cart);
}

function empty_display_cart(){
    setEmptyCart();
    displayCart();
}

/**
 * Set an empty cart
 */
function setEmptyCart(){
    let cart = [];
    setCart(cart);
}

/**
 * Change our item stock
 * We get track all DOM infos from original title within the cart
 * @param {*} title the title of our item
 * @param {*} new_quantity our new and updated stock quantity
 */
function change_quantity_from_cart(title, new_quantity){
    //Get all items from our cart
    let course__items = document.getElementsByClassName('course__item')
    //Iterate on every items in our cart
    for (let i = 0; i < course__items.length; i++){
        let item_title =  course__items[i].querySelector('h4').innerHTML;
        //Find cart item in our list of items by comparing titles
        if (title == item_title){
            //Get stock div from this item
            let stock_div = course__items[i].getElementsByClassName('stock')[0];
            //Replace old quantity by updated quantity from our items stock
            stock_div.innerHTML = new_quantity;
            //Display item since quantity can only > 0
            course__items[i].style.display = "flex";
        }
    }
}


function add_one_quantity(title){
    let size = Object.size(COURSES);
    for (let index = 1; index <= size; index++) {
        if (title == COURSES[index].title){
            COURSES[index].stock += 1;
            return COURSES[index].stock;       
        }    
    }
}
