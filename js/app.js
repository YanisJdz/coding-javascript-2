localStorage.setItem('article','MySQL');
localStorage.setItem('price',9.99);
localStorage.setItem('quantity',1);

// console.log(localStorage.getItem('article') + ' - ' +localStorage.getItem('price')+ ' - ' + localStorage.getItem('quantity'));

let tr = document.querySelectorAll('tbody');

console.log(tr);

tr.innerHTML = ('<tr><td>'+localStorage.getItem('article')+'</td><td>'+localStorage.getItem('price')+'</td><td>'+localStorage.getItem('quantity')+'</td></tr>')