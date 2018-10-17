let menuItems = document.getElementsByClassName('menu-item');
let menu = document.querySelector('.menu');

menu.insertBefore(menuItems[2], menuItems[1]);

document.body.style.backgroundImage = "url('../img/apple_true.jpg')";

let title = document.getElementById('title');

title.innerText = "Мы продаем только \"подлинную\" технику Apple";

let adv = document.querySelectorAll('.adv');

adv.forEach(function(item){
    item.remove();
});

document.getElementById('prompt').innerText = prompt("Ваше отношение к технике apple","");