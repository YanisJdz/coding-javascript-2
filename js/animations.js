//OnClick function on 'Add to cart'
$('.add-to-cart').on('click', function () {
    //Querys
    var cart = $('#img-cart');
    var imgToDrag = $(this).parent().parent().find('.logo');
    //Checking if img has been correctly selected
    if (imgToDrag.length) {
        //Cloning img with .offset coordonates
        var imgclone = imgToDrag.clone()
            .offset({
            top: imgToDrag.offset().top,
            left: imgToDrag.offset().left
        })
            //Apply some CSS to cloned img
            .css({
            'opacity': '0.8',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
        })
            //Apply animation depending on 'cart' logo coordonates
            //for the drag and drop
            //and expected css to make clone image go tinier during the travel time
            .appendTo($('body'))
            .animate({
            'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
        }, 1000, 'easeInOutExpo');
        //Shake(x2) effect when item comes at cart coordonates
        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1400);
        //Reduce img size to 0
        imgclone.animate({
            'width': 0,
                'height': 0
        }, function () {
            $(this).detach()    //Remove imgclone from DOM
        });
    }
});    

/**
 * Display popup when item got deleted from cart
 * @param {Number} index from cart
 */
function delete_dialog_box(index) {
    //Getting localstorage
    let cartArticle = JSON.parse(localStorage.getItem('cart'));
    let popup = ".popup-overlay, .popup-content";
    //Display popup
    $(popup).addClass("active");
    //Change popup text, depends on which article is getting deleted from cart
    $("#article").text("L'article "+cartArticle[index].title+" a été supprimé du panier");
    //On 'Close' button
    $("#close").on("click", function() {
        //Make popup fadeout
        $(popup).fadeOut(1000, function() {
            //Put back class on
            $(popup).removeClass("active");      
            $(popup).css("display","");      
        });

    });
}
/**
 * Display popup when cart got completely emptied
 */
function empty_dialog_box() {
    let popup = ".popup-overlay, .popup-content";
    //Display popup
    $(popup).addClass("active");
    //Change popup text, when cart get empty
    $("#article").text("Le panier a été entièrement vidé");
    //On 'Close' button
    $("#close").on("click", function() {
        //Make popup fadeout
        $(popup).fadeOut(1000, function() {
            //Put back class on
            $(popup).removeClass("active");      
            $(popup).css("display","");      
        });

    });
}
