let menuItem = document.getElementsByClassName("menu-item"); // нахожу пункты меню по имени класса
let menu = document.querySelector('.menu'); // нахожу меню по имени класса
let clnItem = menuItem[1].cloneNode(true); // создаю покопию второго пункта
menu.insertBefore(menuItem[2], menuItem[1]); // переставляю местами третий и второй пункты
clnItem.innerHTML = "Пятый пункт"; // меняю содержимое клона
menu.appendChild(clnItem); // вставляю клон в конец списка

document.body.style.backgroundImage = "url('img/apple_true.jpg')"; // Замена фона

let title = document.getElementById("title").innerHTML.trim().split(' '); // Получаем строку из элемента "title", удаляем лишние пробелы и разбиваем на слова
title.splice(3, 0, '"подлинную"'); // добавляем слово "подлинную"
document.getElementById("title").innerHTML = title.join(' '); // Вставляем изменненую строку в элемент "title" 

// но проще было бы сжульничать:
// title.innerText = "Мы продаем только \"подлинную\" технику Apple";

let adv = document.querySelectorAll('.adv'); // нахожу рекламу по имени класса...


// ... и удаляю все к чертям собачьим!
adv.forEach(function(item){
    item.remove();
});

document.getElementById('prompt').innerText = prompt("Ваше отношение к технике apple",""); // делюсь мнением