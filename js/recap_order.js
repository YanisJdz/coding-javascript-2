let cart = JSON.parse(localStorage.getItem('cart'));

let tbody = $('#finalcart');

for (let i = 0; i < cart.length; i ++){
    
    let tr = '<tr><td><img src="'+ cart[i].image +'" style = "width: 100px"></td><td>'+ cart[i].title +'</td><td>'+ cart[i].price +'</td><td>1</td></tr>'
    tbody.append(tr);
    
    
}

