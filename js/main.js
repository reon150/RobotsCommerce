var products = {
    //Professionals
    "arm_kl864" : {'name': "Arm KL-864",'price': 1599.99, 'img': "./img/page_professionals/arm_kl864.jpg", 'sectionID': "professionals"}, 
    "arm_lop5000": {'name': "Arms lop-5000", 'price': 950.50, 'img': "./img/page_professionals/arm_lop5000.png", 'sectionID': "professionals"}, 
    "arm_pt13": {'name': "Arm PT-13", 'price': 1000.56, 'img': "./img/page_professionals/arm_pt13.jpeg", 'sectionID': "professionals"},
    "explore_fl50000": {'name': "Explore FL-50000", 'price': 1499.99, 'img': "./img/page_professionals/explore_fl50000.jpg", 'sectionID': "professionals"},
    "hand_tr9000": {'name': "Hand TR-9000", 'price': 499, 'img': "./img/page_professionals/hand_tr9000.jpg", 'sectionID': "professionals"} ,
    "lawn_trl450": {'name': "Lawn Robot Tr-1450", 'price': 11499.99, 'img': "./img/page_professionals/lawn_trl450.webp", 'sectionID': "professionals"},
    "medical_system": {'name': "Medical System", 'price': 99999.99, 'img': "./img/page_professionals/medical_system.jpg", 'sectionID': "professionals"},
    "telepresence_pt3000": {'name': "Telepresence Robot pt-3000", 'price': 900, 'img': "./img/page_professionals/telepresence_pt3000.jpg", 'sectionID': "professionals"},
    "telepresence_tpl15": {'name': "Telepresence Robot tp-115", 'price': 750, 'img': "./img/page_professionals/telepresence_tpl15.jpg", 'sectionID': "professionals"},

    //toys
    "airplane_ap5000" : {'name': "Airplane ap-5000",'price': 50, 'img': "./img/page_toys/airplane_ap5000.jpg", 'sectionID': "toys"},
    "big_trak_3000" : {'name': "Big Trak 3000",'price': 24.99, 'img': "./img/page_toys/big_trak_3000.jpeg", 'sectionID': "toys"},
    "cleaner_5000" : {'name': "Cleaner 5000",'price': 199.99, 'img': "./img/page_toys/cleaner_5000.jpg", 'sectionID': "toys"},
    "dog_wd3000" : {'name': "Dog wd-3000",'price': 1499.99, 'img': "./img/page_toys/dog_wd3000.jpg", 'sectionID': "toys"},
    "helicopter_hp500" : {'name': "Helicopter hp-500",'price': 999.99, 'img': "./img/page_toys/helicopter_hp500.jpg", 'sectionID': "toys"},
    "tank_tf4500" : {'name': "Tank tf-4500",'price': 149.99, 'img': "./img/page_toys/tank_tf4500.jpg", 'sectionID': "toys"},
    "tomy_armatron_3" : {'name': "Tomy Armatron 3",'price': 49, 'img': "./img/page_toys/tomy_armatron_3.jpeg", 'sectionID': "toys"},
    "warbot_2000" : {'name': "Warbot 2000",'price': 29, 'img': "./img/page_toys/warbot_2000.jpeg", 'sectionID': "toys"},
    "yamato_vf5000" : {'name': "Yamato vf-5000",'price': 79.99, 'img': "./img/page_toys/yamato_vf5000.jpg", 'sectionID': "toys"},

    //build
    "box_50000" : {'name': "Box 50000",'price': 3000, 'img': "./img/page_build/box_50000.jpg", 'sectionID': "build"},
    "falcon_ev3" : {'name': "Falcon ev3",'price': 14.99, 'img': "./img/page_build/falcon_ev3.jpeg", 'sectionID': "build"},
    "ftc_fl50" : {'name': "FTC fl-50",'price': 449.99, 'img': "./img/page_build/ftc_fl50.jpeg", 'sectionID': "build"},
    "runer_3000" : {'name': "Runer 3000",'price': 750, 'img': "./img/page_build/runer_3000.jpg", 'sectionID': "build"},

    //house
    "cat_looking_cl3000" : {'name': "Cat looking cl-3000.",'price': 3000, 'img': "./img/page_house/cat_looking_cl3000.jpeg", 'sectionID': "house"},
    "robot_clock_rc4000" : {'name': "Robot Clock rc-4000",'price': 14.99, 'img': "./img/page_house/robot_clock_rc4000.jpeg", 'sectionID': "house"},
    "vacuum_cleaner_chf5000" : {'name': "Vacuum Cleaner chf-5000",'price': 449.99, 'img': "./img/page_house/vacuum_cleaner_chf5000.jpg", 'sectionID': "house"},
    "vacuum_cleaner_rvc3000" : {'name': "Vacuum Cleaner rvc-3000",'price': 750, 'img': "./img/page_house/vacuum_cleaner_rvc3000.jpg", 'sectionID': "house"},
}



var nameCart, imgCart, itemColumn, priceColumn, quantityColumn, subTotalColumn, deleteColumn, row;
var cartStorage = []



var items = [], quantity = [], price = [], subTotal = [];
var total = 0;

function start(event){

    if(localStorage.getItem('cartStorage')==null){
        localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
    }

    console.log(JSON.parse(localStorage.getItem('cartStorage')));


    if(window.location.href.includes('shoppingCart.html')){
        insertItemCart();
    }else if(window.location.href.includes('index.html')){
        console.log(1)
    }
    else{
        makeHTMLProducts();
    }
}

function purchased(id) {
    var exist = false;
    cartStorage = JSON.parse(localStorage.getItem('cartStorage'));
    for(let x=0; x<cartStorage.length; x++){    
        if(cartStorage[x]['id']==id){
            cartStorage[x]['qty']++;
            localStorage.setItem('cartStorage', JSON.stringify(cartStorage))
            exist = true;
        }
    }
    if(!exist){
        cartStorage.push({'id':id, 'qty': 1})
        localStorage.setItem('cartStorage', JSON.stringify(cartStorage))
    }

    alert("Item added to the cart correctly")

}

function calculateTotal() {

    total = 0;
    for(let x=0; x<subTotal.length; x++){
        total += subTotal[x];      
    }  
}

function insertItemCart() {

    const table = document.getElementById("shoppingCart");

    imgCart = document.createElement('img');
    imgCart.src = './img/page_build/runer_3000.jpg';
    imgCart.className = "imgTable"

    nameCart = document.createElement('span');
    nameCart.setAttribute('class', 'nameTable');
    nameCart = "selectedText";

    var buttonDelete = document.createElement("button");
    buttonDelete.setAttribute('class', 'deleteimg');

    var buttonAdd = document.createElement("button");
    var buttonRemove = document.createElement("button");
    buttonAdd.setAttribute('class', 'addRemove');
    buttonRemove.setAttribute('class', 'addRemove');

    cartStorage = JSON.parse(localStorage.getItem('cartStorage'));


    for(var x=0; x<cartStorage.length; x++){

        row = table.insertRow(x+1);
        itemColumn = row.insertCell(0);
        priceColumn = row.insertCell(1);
        quantityColumn = row.insertCell(2);
        subTotalColumn = row.insertCell(3);
        deleteColumn = row.insertCell(4);

        price[x] = products[cartStorage[x]['id']]['price'];
        
        quantity[x] = cartStorage[x]['qty'];
        subTotal[x] = price[x] * quantity[x];
        console.log(price[x])

        imgCart = document.createElement('img');
        imgCart.src = products[cartStorage[x]['id']]['img'];
        imgCart.className = "imgTable"

        itemColumn.setAttribute('class', 'itemsCart');
        itemColumn.innerHTML = products[cartStorage[x]['id']]['name'];
        itemColumn.appendChild(imgCart);

        priceColumn.setAttribute('class', 'unitPrice');
        priceColumn.innerHTML = price[x];
        
        quantityColumn.setAttribute('class', 'qty');
        quantityColumn.innerHTML = `<button style="display:inline-block" type="button" onclick="addRemoveQuantity('${x}' ,'${"true"}')"><img src="./img/plus.png"" alt="" style="float:left;margin-right:0.5em""/></button>
        <button style="display:inline-block" type="button" onclick="addRemoveQuantity('${x}' ,'${"false"}')"><img src="./img/minus.jpeg"" alt="" style="float:left;margin-right:0.5em"/></button>
        <span id="qtyText${x}">${cartStorage[x]['qty']}</span>`
        
        subTotalColumn.setAttribute('class', 'subTotal');
        subTotalColumn.innerHTML = `<span id="subTText${x}">${Math.round(subTotal[x] * 100) / 100+"$"}</span>`;
        
        deleteColumn.innerHTML = `<button type="button" onclick="deleteItem('${x}')"><img src="./img/delete.png"" alt=""/></button>`
    }   
    calculateTotal();
    
    row = table.insertRow(x+1);
    row.insertCell(0).innerHTML = "";
    row.insertCell(1).innerHTML = "";
    totalColumnText  = row.insertCell(2);
    totalColumnValue = row.insertCell(3);
    totalColumnText.setAttribute('class', 'subTotal');
    totalColumnValue.setAttribute('class', 'subTotal');
    totalColumnText.innerHTML = "Total";
    totalColumnValue.innerHTML = Math.round(total * 100) / 100+"$";
}

function allStorage() {

    var values = [],
    i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }
    return values;
}

function deleteItem(x) {

    cartStorage = JSON.parse(localStorage.getItem('cartStorage'));
    cartStorage.splice(x, 1);
    localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
    location.reload();
}

function addRemoveQuantity(x, add) {
    if(add == "true"){  
        cartStorage = JSON.parse(localStorage.getItem('cartStorage'));
        cartStorage[x]['qty']++;
        localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
    }else if(add=="false"){
        cartStorage = JSON.parse(localStorage.getItem('cartStorage'));
        if(cartStorage[x]['qty']<=0){
            alert("You cannot have less than 0 items");
        }else{
            cartStorage[x]['qty']--;
            localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
            
        }
    }
    updateSubTotalandTotalLabel(cartStorage[x]['qty'], x);
    
}

function updateSubTotalandTotalLabel(item, x) {
    console.log(item)
    subTotal[x] = price[x] * item;
    
    document.getElementById(`qtyText${x}`).textContent= String(item);
    document.getElementById(`subTText${x}`).textContent= String(Math.round(subTotal[x] * 100) / 100)+"$";
    calculateTotal()
    totalColumnText.innerHTML = "Total";
    totalColumnValue.innerHTML = Math.round(total * 100) / 100+"$";
}



function makeHTMLProducts() {
    var section, div, img;
    var page=null;
    section = document.createElement("section");
    section.setAttribute('class', 'products')

    if(window.location.href.includes('build.html')){
        page = "build";
    }else if(window.location.href.includes('house.html')){
        page = "house";
    }else if(window.location.href.includes('toys.html')){
        page = "toys";
    }else if(window.location.href.includes('professionals.html')){
        console.log("entro")
        page = "professionals";
    }else{
        page = null;
    }
    console.log(page)

    for(let x in products){
        if(products[x]['sectionID']==page){

            div = document.createElement("div");
            div.setAttribute('class', 'item');
        
            img = document.createElement('img');
            img.src = products[x]['img'];
        
            spanName = document.createElement('span');
            spanName.setAttribute('class', 'caption')
            spanPrice = document.createElement('span');
            spanPrice.setAttribute('class', 'price');
        
            buttonAdd = document.createElement('input');
            buttonAdd.setAttribute('type', 'submit');
            buttonAdd.setAttribute('class', 'addToCart');
            buttonAdd.setAttribute('value', 'Add to cart');
            buttonAdd.setAttribute('id', x);
            buttonAdd.setAttribute('onclick', 'purchased(id)');

            spanName.innerHTML= products[x]['name'];
            spanPrice.innerHTML= products[x]['price'];
        
            div.appendChild(img);
            div.appendChild(spanName);
            div.appendChild(spanPrice);
            
            div.appendChild(buttonAdd)
            
            section.appendChild(div)
        }     
    }

    var body = document.getElementById("body")
    body.appendChild(section)
}


window.addEventListener("load", start, false);
