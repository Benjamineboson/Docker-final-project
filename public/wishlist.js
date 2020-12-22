const form = document.querySelector('form');
const wish = document.querySelector('#wish');
var wishCounter = 0;

if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}

for (let index = 1; index < 100; index++) {
    if (localStorage.getItem(index) === null){
        wishCounter = index-1;
        break;
    }
}

window.addEventListener('load', e =>{
    for (let i = 1; i < wishCounter; i++){
        newTr = document.createElement('tr');
        newTd = document.createElement('td');
        newWish = document.createTextNode(localStorage.getItem(i));
        newTd.appendChild(newWish)
        newTr.appendChild(newTd);
        document.getElementById('wishlist').appendChild(newTr);
    }
})


function updateList () {
    newTr = document.createElement('tr');
    newTd = document.createElement('td');
    newWish = document.createTextNode(wish.value);
    newTd.appendChild(newWish)
    newTr.appendChild(newTd);
    document.getElementById('wishlist').appendChild(newTr);    
}

form.addEventListener('submit', e  =>{
    e.preventDefault();
    localStorage.setItem(++wishCounter, wish.value);
    updateList();
    document.getElementById("form").reset();
})