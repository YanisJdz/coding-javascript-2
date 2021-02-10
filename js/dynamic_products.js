Object.size = function(obj) {
    let size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

let json = COURSES;
let size = Object.size(json)


//Iterate on data object
//Start from one since our object index starts at 1 and not 0
for (let i = 1; i <= size; i++){
    //Get all infos from data object
    let title = json[i].title;
    let initial_price = json[i].initial_price;
    let price = json[i].price;
    let stock = json[i].stock;
    let img = json[i].img;
    let mark = json[i].mark;

    //Create item div
    let course_item = document.createElement('div');
    //Add class for css
    course_item.classList.add('course__item');
    //Choose our cards container
    let container = document.getElementById('courses__container');
    //Add template to our innerHTML
    course_item.innerHTML =       ` <figure class='course_img '>
                                        <img class='logo' src='${img}', alt=${img}> 
                                    </figure> 
                                    <div class='info__card'> 
                                        <h4>${title}</h4> 
                                        <figure class='mark m_${mark}'> 
                                           <img src='img/rates.png'> 
                                        </figure>
                                        <p> <span class='price'>${initial_price} €</span><span class="demo" style="color:red"></span><span class='discount'>${price} €</span> </p>
                                        <p> Disponible: <span class='stock'>${stock}</span></p>                                      
                                        <a class='add-to-cart' data-id='1' style='cursor: pointer;'><i class='fa fa-cart-plus'></i>Ajouter au panier</a> 
                                </div> `

    //We add every item to our container 
    container.appendChild(course_item)

}
