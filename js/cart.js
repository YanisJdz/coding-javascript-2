
//Add event listener on whole page
let course_liste = document.querySelector('.big_container');
course_liste.addEventListener("click" , add_to_cart);
let panier = getLocalStorage();


/**
 * 
 * @param {*} event 
 */
function add_to_cart(event){
    //Get list of all buttons
    buttons = document.querySelectorAll('.add-to-cart');
    //Iterate on all buttons
    for (let i = 0; i < buttons.length; i++ ){
        //If user clicked on one of the buttons
        if (event.target == buttons[i]){
            //Get the course infos
            let course = getCourseInfos(buttons[i]);
            //Push infos in the cart
            panier.push(course);
            //Set cart in localStorage
            localStorage.setItem('panier', JSON.stringify(panier));
        }
    }    
}

/**
 * Get the correct course infos from a specific button
 * @param {*} button specific button
 */
function getCourseInfos(button){
    //Get Parent div
    let parent = button.parentNode;
    //Get grandparent div
    let grandParent = parent.parentNode;
    //Get all infos from course in variables
    let title = parent.querySelector('h4').innerHTML;
    let price = parent.querySelector('.price').innerHTML;
    let discount = parent.querySelector('.discount').innerHTML;
    let image = grandParent.querySelector('img').src;

    //Create course object
    const course = {
        title : title,
        price : price,
        discount : discount,
        image : image
    }; 
    //return the course object
    return course
           
}
/**
 * Get cart from local storage
 */
function getLocalStorage(){
    //If local storage is not empty
    if (localStorage.getItem('panier')){
        //We add the old local storage to our cart
        table = JSON.parse(localStorage.getItem('panier'))
        return table
    }
    //If local storage is empty, we create and return an empty table
    else{
        return table = [];
    }
}