let time = $(".demo");

time.each(function (index) {
    let ending = new Date(parseInt($(this).text()))
    let promotions = setInterval(function()
    {
        //Calculate remaining time from getTime with LocalStorage
        let currentDate = new Date().getTime();
        let remaining = (ending - currentDate);
        //Checking if promotions still available
        if( remaining >= 0 ){
            //Display minutes and seconds remaining on DOM
            let days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            let hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
            let last = ' '+days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
            $(time[index]).text(last);
            $(time[index]).css('display','');
            $(time[index]).parent().parent().parent().addClass("discounted");
        }else{
            //Display that promotions came to end
            $(time[index]).text(" PROMOTION EXPIRÉE");
            $(time[index]).parent().parent().parent().removeClass("discounted");
            //Changing CSS from Price and Discount
            $(time[index]).parent().find(".price")
            .css({
                'color':"black",
                'text-decoration':"none",
                'font-weight': 'bold',
                'font-size': '1.25em',
                
            })
            $(time[index]).parent().find(".discount")
            .css({
                'display':'none'
            })
            console.log("Promotions ended");
            clearInterval(promotions);
        }
    }, 1000);
    
})