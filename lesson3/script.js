let money, time;

function start(){
    money = prompt("Ваш бюджет на месяц?"); // бюджет     
    while(money === null || money === "" || isNaN(money) ){
        money = prompt("Ваш бюджет на месяц?"); // бюджет 
    }
    money = +money;
    time = prompt("Введите дату в формате YYYY-MM-DD", "1986-03-15"); // Дата
    while(time === null || time === "") {
        time = prompt("Введите дату в формате YYYY-MM-DD", "1986-03-15"); // Дата
    }
}

start();

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : true,
};

// Создать функцию для определения обязательных расходов (chooseOptExpenses):

function chooseExpenses(numberOfExpenses) {
    if(numberOfExpenses > 0){        // если кол-во итераций больше 0
        let j = 0; // инициализируем смещение номера свойства
        for(let i = 1; i < (numberOfExpenses + 1); i++){
            if(!appData.optionalExpenses[i+j]){  // если такое свойство существует
                let question1 = prompt("Введите обязательную статью расходов в этом месяце №" + (i+j)+":", "nothing"+i); // вопрос 1
                let question2 = prompt("Во сколько обойдется?", "0"); // вопрос 2

                // проверяю не пустые ли поля не нажата ли отмена и размер ввода
                if(!!question1 && !!question2 && question1.length < 50 && question2.length < 50){
                    appData.expenses[question1] = question2; // добавляю новые свойства в объект
                }else{
                    i--;
                }
            }else{
                j++; // увеличиваем смещение номера свойства
                i--; // повторяем итерацию
            }
        }
    }
}

chooseExpenses(2);

// Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget):

function detectDayBudget(monthBudget){
    let dayBudget = monthBudget/30;
    alert("Ежедневный бюджет: " + dayBudget ); // бюджет на 1 день
    return dayBudget.toFixed(5);
}

// Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel):

function detectLevel(moneyPerDay){
    if(moneyPerDay < 100){
        return "Минимальный уновень достатка!";
    }else if(moneyPerDay > 100 && moneyPerDay < 2000){
        return "Cредний уновень достатка!";
    }else if(moneyPerDay > 2000){
        return "Высокий уновень достатка!";
    }else {
        return "Что-то я не уверен)";
    }
}

// Создать функцию для определения необязательных расходов (chooseOptExpenses):

function chooseOptExpenses(numberOfExpenses){
    if(numberOfExpenses > 0){        // если кол-во итераций больше 0
        let j = 0; // инициализируем смещение номера свойства
        for(let i = 1; i < (numberOfExpenses + 1); i++){
            if(!appData.optionalExpenses[i+j]){  // если такое свойство существует
                let optQuestion = prompt("Статья необязательных расходов №" + (i+j) + " ?", "Нету такой!"); //Необязательный вопрос
                // проверяю не пустое ли поле не нажата ли отмена и размер ввода
                if(!!optQuestion && optQuestion.length < 50){
                    appData.optionalExpenses[i+j] = optQuestion; // добавляю новые свойства в объект
                }else{
                    i--;
                }
            }else{
                j++; // увеличиваем смещение номера свойства
                i--; // повторяем итерацию
            }
        }
    }
}

chooseOptExpenses(1); // просто для демонстрации, можно было бы и просто 3 написать
chooseOptExpenses(2);

function checkSavings(){
    if(appData.savings){
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?"); 
        appData.monthIncome = save/100/12*persent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

// Выаод данных

appData.moneyPerDay = detectDayBudget(appData.budget);
console.log(appData);
console.log(detectLevel(appData.moneyPerDay));
checkSavings();