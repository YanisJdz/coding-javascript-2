let time = new Date().getTime()+(1000*10);
let ending = new Date(time)
// let time = new Date().getTime()+(1000*60*5);
// let ending = new Date(time)

if(!localStorage.getItem('endTime')){
    console.log("No promotion end");
    // localStorage.setItem('endTime',time)
}
if(localStorage.getItem('endTime')){  
    let promotions = setInterval(function()
    {
        //Calculate remaining time from getTime with LocalStorage
        let currentDate = new Date().getTime();
        let remaining = (localStorage.getItem('endTime') - currentDate);
        //Checking if promotions still available
        if( remaining >= 0 )
        {
            //Display minutes and seconds remaining on DOM
            let minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
            let last = " "+ minutes + "m " + seconds + "s ";
            $('.demo').text(last);
        } else
        {
            //Display that promotions came to end
            $('.demo').text(" PROMOTION EXPIRÉE");
            //Changing CSS from Price and Discount
            $('.price')
            .css({
                'color':"black",
                'text-decoration':"none",
                'font-weight': 'bold',
                'font-size': '1.25em'
            })
            $('.discount')
            .css({
                'color':"red",
                'text-decoration':"line-through",
                'font-weight': 'normal',
                'font-style': 'italic',
                'font-size': '1em'
            })
            console.log("Promotions ended");
            clearInterval(promotions);
        }
    }, 1000);
}