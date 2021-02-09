let tr = $('#innercart');

panier = JSON.parse(localStorage.getItem('panier'));
if(panier){
    panier.forEach(element => {
        let td = '<tr><td><img src="'+element.image+'" style="width:30%"></td><td>'+element.title+'</td><td>'+element.price+'</td><td>1</td><td><i class="fa fa-times" style="color:red;cursor:pointer"></i></td></tr>'
        tr.append(td)
    });
}
