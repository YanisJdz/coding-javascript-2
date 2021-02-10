
//Add event listener on whole page
let course_liste = document.querySelector('.big_container');
course_liste.addEventListener("click" , add_to_cart);
let cart = getLocalStorage();
window.onload = displayCart(cart);

/**
 * Add selected item from user to cart
 * @param {*} event 
 */
function add_to_cart(event){
    //Get list of all buttons
    buttons = document.querySelectorAll('.add-to-cart');
    let discountBool = false;
    //Iterate on all buttons
    for (let i = 0; i < buttons.length; i++ ){
        //If user clicked on one of the buttons
        if (event.target == buttons[i]){
            if($((buttons[i]).parentNode.parentNode).hasClass("discounted") ){
                discountBool = true;}
            //Get the course infos
            let course = getCourseInfos(buttons[i],discountBool);
            //Push infos in the cart
            cart = getLocalStorage();
            cart.push(course);
            //Set cart in localStorage
            setCart(cart);
            displayCart(cart);
        }
    }    
}

/**
 * Get the correct course infos from a specific button
 * @param {*} button specific button
 */
function getCourseInfos(button,discountBool){
    //Get Parent div
    let parent = button.parentNode;
    //Get grandparent div
    let grandParent = parent.parentNode;
    //Get all infos from course in variables
    let title = parent.querySelector('h4').innerHTML;
    let price = parent.querySelector('.price').innerHTML;
    let discount = parent.querySelector('.discount').innerHTML;
    let image = grandParent.querySelector('img').src;
    let expiration = parent.querySelector('.demo').innerHTML;
    let stock = parent.querySelector('.stock').innerHTML
    
    //Remove one quantity of item
    change_quantity(button, remove_one_quantity(title))

    if(discountBool === true){
        //Create course object
        const course = {
            title : title,
            price : discount,
            image : image,
            expire : expiration
        }; 
        //return the course object
        return course
    }else{
        const course = {
            title : title,
            price : price,
            image : image,
            expire : expiration
        }; 
        //return the course object
        return course
    }
           
}
/**
 * Get cart from local storage
 */
function getLocalStorage(){
    //If local storage is not empty
    if (localStorage.getItem('cart')){
        //We add the old local storage to our cart
        table = JSON.parse(localStorage.getItem('cart'))
        return table
    }
    //If local storage is empty, we create and return an empty table
    else{
        return table = [];
    }
}

/**
 * Set current cart in localStorage
 * @param {*} cart JSON parsed LocalStorage
 */
function setCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}


/**
 * Display cart if not empty
 * @param {*} cart JSON parsed LocalStorage
 */
function displayCart(cart) {
    //Selecting innercart node
    let tr = $('#innercart');  

    //Remove old cart displayed
    $('tr').remove('#tr');
    
    //If cart isn't empty, diplay it 
    if(cart){
        //Then display new cart with all his objects
        cart.forEach(element => {
            let td = '<tr id="tr"><td><img src="'+element.image+'" style="width:30%"></td><td>'+element.title+'</td><td>'+element.price+'</td><td>1</td><td><i class="fa fa-times delete_btn" style="color:red;cursor:pointer"></i></td></tr>';
            tr.append(td);
        });
    }    
}



function remove_one_quantity(title){
    let size = Object.size(COURSES);
    for (let index = 1; index <= size; index++) {
        if (title == COURSES[index].title){
            if(COURSES[index].stock == 0){
                return COURSES[index].stock   
            }
            else{
                COURSES[index].stock -= 1
            return COURSES[index].stock       
            }
        }    
    }
}

function change_quantity(button, new_quantity){
    let parent = button.parentNode
    let grandParent = parent.parentNode;
    if (new_quantity == 0){
        $(grandParent).css('display', 'none');
    }
    else{
        $(grandParent).css('display', 'flex');
        parent.querySelector('.stock').innerHTML = new_quantity

    }
}