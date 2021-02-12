// Recover items which is in the cart
let cart = JSON.parse(localStorage.getItem('cart'));

let tbody = $('#finalcart');

let total = 0;

// For each round of loop we add the price of each item to the total price and display items informations
for (let i = 0; i < cart.length; i ++){
    
    total += parseFloat(cart[i].price)
    
    let tr = '<tr><td><img src="'+ cart[i].image +'" style = "width: 100px"></td><td>'+ cart[i].title +'</td><td>'+ cart[i].price +'</td><td>1</td></tr>'
    tbody.append(tr);
}

// Display the total price
let totalPrice = '<h2> Prix de la Commande: '+ total +'€</h2>'
tbody.append(totalPrice);
