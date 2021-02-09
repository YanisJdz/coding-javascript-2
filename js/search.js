window.onload;
//Stop submitting the form. To stop reloading the page
$('#search-item').submit(function () {
    return false;
   });

//Get search-bar div
let input = document.querySelector('.search-bar');
//Add eventListener on search-bar
input.addEventListener('keyup', search_courses);
input.addEventListener('search', search_courses);

//Get list of nodes containing title
let titles = document.querySelectorAll('h4');

/**
 * Search for specific courses. We compare user entry with the cards title.
 * @param {*} event We get target.value to havea
 */
function search_courses(event){
    //Get user entry
    let user_input = event.target.value.toLowerCase();
    for (let i = 0; i < titles.length; i++) {
        //Get every title divs
        let div = titles[i]
        //Get title
        let title = div.innerHTML.toLowerCase();
        //If user didnt enter anything, every container is displayed
        if (!user_input){
            //Get correct card's container div
            parent = div.parentNode.parentNode;
            //Set container to displayed
            $(parent).css('display', 'flex');
        }    

        //If the user input is not found in title
        if (!title.includes(user_input)){
            parent = div.parentNode.parentNode;
            //We hide the card
            $(parent).css('display', 'none');
        }

        // If not, it means title is found
        else {
            parent = div.parentNode.parentNode;
            $(parent).css('display', 'flex');
        }
    }    
}


