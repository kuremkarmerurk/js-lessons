let money, time, appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : false,
    detectDayBudget: function(monthBudget){
        let dayBudget = monthBudget/30;
        return dayBudget.toFixed(5);
    },
    detectLevel: function(moneyPerDay){
        if(moneyPerDay < 100){
            return "Минимальный уновень достатка!";
        }else if(moneyPerDay > 100 && moneyPerDay < 2000){
            return "Cредний уновень достатка!";
        }else if(moneyPerDay > 2000){
            return "Высокий уновень достатка!";
        }else {
            return "Что-то я не уверен)";
        }
    },
};

let startCount = document.getElementById('start'); // Получаем кнопку "Начать расчет" через id

/** Обратотка нажатия на кнопку "Начать расчет" */
startCount.addEventListener('click', function(e) {
    time = prompt("Введите дату в формате YYYY-MM-DD", "1986-03-15"); // Дата
    while(time === null || time === "") {
        time = prompt("Введите дату в формате YYYY-MM-DD", "1986-03-15"); // Дата
    }

    money = +prompt("Ваш бюджет на месяц?", '0'); // бюджет     
    while(money === null || money === "" || isNaN(money) ){
        money = +prompt("Ваш бюджет на месяц?", '0'); // бюджет 
    }

    appData.budget = money; // И на кой черт тогда переменная money!?
    appData.timeData = time; // про time тот же вопрос.
    valuesList.budgetValue.textContent = money.toFixed();
    valuesList.yearValue.value =  new Date(Date.parse(time)).getFullYear(); // a split('-') было бы просче
    valuesList.monthValue.value = new Date(Date.parse(time)).getMonth() + 1; // a split('-') было бы просче
    valuesList.dayValue.value = new Date(Date.parse(time)).getDate(); // a split('-') было бы просче
});

function toCamelCase(arr){
    arr.forEach(function(element,index){
        if(index != 0){
            arr[index] = element.charAt(0).toUpperCase() + element.slice(1);
            
        }
    });
} 





// Получаем блоки в правой части программы через классы
let valuesList = {}, values = document.querySelectorAll('[class$="-value"]');

values.forEach(function(val){
    //Переписываем имена переменных в стиле CamelCase
    let valName = val.className.trim().split('-');
    toCamelCase(valName);
    valName = valName.join('');
    //Добавляем переменные в класс valuesList
    valuesList[valName] = document.getElementsByClassName(val.className)[0];
});
console.log(valuesList);

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

// Получаем поля(input) c обязательными расходами через класс. 
let expensesItem = [...document.getElementsByClassName('expenses-item')];
console.log(expensesItem);

/** Обратотка нажатия на кнопку expensesItemBtn (Утвердить) */
buttonsList.expensesItemBtn.addEventListener('click', function(e) {

    let expensesItemErr = true;

    expensesItem.forEach(function(element){
        if(expensesItemErr){
            expensesItemErr = Boolean(element.value);
        }        
    });

    if(appData.budget != undefined && expensesItemErr){
        let sum = 0;    

        for(let i = 0; i < expensesItem.length ; i++){

            let question1 = expensesItem[i].value, // вопрос 1
                question2 = expensesItem[++i].value; // вопрос 2

            // проверяю не пустые ли поля не нажата ли отмена и размер ввода
            if(!!question1 && !!question2 && question1.length < 50 && question2.length < 50){
                appData.expenses[question1] = question2; // добавляю новые свойства в объект
                sum += +question2;
            } // Закомментировал else{    i--;    } , так как это может вызвать бесконечный цыкл

        }

        valuesList.expensesValue.textContent = sum;
    }
       
    
    

}); 

// В поля с ценами вводятся только цыфры и точка, так как теоретически и нецелые доходы бывают
expensesItem.forEach( function(item, index){
    if (index % 2 != 0){
        item.addEventListener('input', function(e) {
            let clear = e.target.value.replace(/[^0-9.]/g,'');
            e.target.value = clear;
        });
    }    
});

// Получаем поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll.
let optionalexpensesItem = [...document.querySelectorAll('.optionalexpenses-item')];
console.log(optionalexpensesItem);

buttonsList.optionalexpensesBtn.addEventListener('click', function(e) {

    if(appData.budget != undefined){
        valuesList.optionalexpensesValue.textContent = '';
        for(let i = 0; i < optionalexpensesItem.length ; i++){

            // проверяю не пустые ли поля не нажата ли отмена и размер ввода
            if(!!optionalexpensesItem[i].value && optionalexpensesItem[i].value.length < 50){
                appData.optionalExpenses[i] = optionalexpensesItem[i].value;
                valuesList.optionalexpensesValue.textContent += optionalexpensesItem[i].value + ' ';
            } // Закомментировал else{    i--;    } , так как это может вызвать бесконечный цыкл
    
        }
    }     

});

// фиг вам, а не латиница))
optionalexpensesItem.forEach( function(item){
    item.addEventListener('input', function(e) {
        let clear = e.target.value.replace(/[^а-яА-Я]/g,'');
        e.target.value = clear;
    });
});

buttonsList.countBudgetBtn.addEventListener('click', function(e) {    
        
    if(appData.budget  != undefined){

        appData.moneyPerDay = appData.detectDayBudget(appData.budget);
        valuesList.daybudgetValue.textContent = appData.moneyPerDay;
        valuesList.levelValue.textContent = appData.detectLevel(appData.moneyPerDay);

    }  else {

        alert( valuesList.daybudgetValue.textContent = "Произощла ошибка!!!");

    }

    

});



// Получить оставшиеся поля через querySelector.
let chooseIncome = document.querySelector('#income');

chooseIncome.addEventListener('input', function(e) {
    let items = chooseIncome.value;
    appData.income = items.split(",");
    appData.income.forEach(function(item, index){
        appData.income[index] = item.trim(); 
    });
    valuesList.incomeValue.textContent = appData.income;
});

let checkBox = document.querySelector('#savings');

checkBox.addEventListener('click', function(e) {
    appData.savings = checkBox.checked;    
});


let sumLabel = document.querySelector("label[for='sum']");
let sumValue = document.querySelector("#sum");
let percentLabel = document.querySelector("label[for='percent']");
let percentValue = document.querySelector("#percent");

function sumAndPersent() {
    if(appData.savings){
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        valuesList.monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        valuesList.yearsavingsValue.textContent = appData.yearIncome.toFixed(1);     
    }
}

sumValue.addEventListener('input', sumAndPersent);
percentValue.addEventListener('input', sumAndPersent);

let year = document.querySelector('.year');
let month = document.querySelector('.month');
let day = document.querySelector('.day');

console.log(appData);
