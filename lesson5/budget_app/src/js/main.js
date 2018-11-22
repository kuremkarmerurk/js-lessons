let startCount = document.getElementById('start'); // Получаем кнопку "Начать расчет" через id

// Получаем блоки в правой части программы через классы
let valuesList = {}, values = document.querySelectorAll('[class$="-value"]');

function toCamelCase(arr){
    arr.forEach(function(element,index){
        if(index != 0){
            arr[index] = element.charAt(0).toUpperCase() + element.slice(1);
            
        }
    });
}

values.forEach(function(val){
    //Переписываем имена переменных в стиле CamelCase
    let valName = val.className.trim().split('-');
    toCamelCase(valName);
    valName = valName.join('');
    //Добавляем переменные в класс valuesList
    valuesList[valName] = document.getElementsByClassName(val.className)[0];
});
console.log(valuesList);

// Получаем поля(input) c обязательными расходами через класс. 
let expensesItem = document.getElementsByClassName('expenses-item');
console.log(expensesItem);

// Получаем кнопки “Утвердить” и “Рассчитать” через Tag. 
let buttonsList = {}, buttons = [...document.getElementsByTagName('button')]; 

buttons.forEach(function(but){
    if(but.id != "start"){
        //Переписываем имена переменных в стиле CamelCase
        let butName = but.className.trim().split('-');
        toCamelCase(butName);
        butName = butName.join('');
        //Добавляем переменные в класс buttonsList
        buttonsList[butName] = document.getElementsByClassName(but.className)[0];
    }    
});
console.log(buttonsList);

// Получаем поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll.
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
console.log(optionalexpensesItem);


// Получить оставшиеся поля через querySelector.
let chooseIncome = document.querySelector('#income');
let checkBox = document.querySelector('#savings');
let sumLabel = document.querySelector("label[for='sum']");
let sum = document.querySelector("#sum");
let percentLabel = document.querySelector("label[for='percent']");
let percent = document.querySelector("#percent");
let year = document.querySelector('.year');
let month = document.querySelector('.month');
let day = document.querySelector('.day');