
$('.add-to-cart').on('click', function () {
    var cart = $('#img-cart');
    var imgToDrag = $(this).parent().parent().find('.logo').eq(0);
    if (imgToDrag.length) {
        var imgclone = imgToDrag.clone()
            .offset({
            top: imgToDrag.offset().top,
            left: imgToDrag.offset().left
        })
            .css({
            'opacity': '0.8',
                'position': 'absolute',
                'height': '150px',
                'width': '150px',
                'z-index': '100'
        })
            .appendTo($('body'))
            .animate({
            'top': cart.offset().top + 10,
                'left': cart.offset().left + 10,
                'width': 75,
                'height': 75
        }, 1000, 'easeInOutExpo');
        
        setTimeout(function () {
            cart.effect("shake", {
                times: 2
            }, 200);
        }, 1500);

        imgclone.animate({
            'width': 0,
                'height': 0
        }, function () {
            $(this).detach()
        });
    }
});    

function delete_dialog_box(index) {
    let cartArticle = JSON.parse(localStorage.getItem('cart'));
    console.log(cartArticle[index].title);
    let popup = ".popup-overlay, .popup-content";

    $(popup).addClass("active");
    $("#article").text("L'article "+cartArticle[index].title+" a été supprimé du panier");

    $("#close").on("click", function() {
        $(popup).fadeOut(1000, function() {
            $(popup).removeClass("active");      
            $(popup).css("display","");      
        });

    });
}
