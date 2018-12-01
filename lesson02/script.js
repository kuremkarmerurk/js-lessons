let money = +prompt("Ваш бюджет на месяц?", "0"); // бюджет 
let time = prompt("Введите дату в формате YYYY-MM-DD", "1986-03-15"); // Дата
let i = 1;

let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : false,
};
/*while(i < 3){
    let question1 = prompt("Введите обязательную статью расходов в этом месяце", "nothing"+i); // вопрос 1
    let question2 = prompt("Во сколько обойдется?", "0"); // вопрос 2

    // проверяю не пустые ли поля не нажата ли отмена и размер ввода
    if(!!question1 && !!question2 && question1.length < 50 && question2.length < 50){
        appData.expenses[question1] = question2; // добавляю новые свойства в объект
    }else{
        i--;
    }
    i++;
}
do{
    let question1 = prompt("Введите обязательную статью расходов в этом месяце", "nothing"+i); // вопрос 1
    let question2 = prompt("Во сколько обойдется?", "0"); // вопрос 2

    // проверяю не пустые ли поля не нажата ли отмена и размер ввода
    if(!!question1 && !!question2 && question1.length < 50 && question2.length < 50){
        appData.expenses[question1] = question2; // добавляю новые свойства в объект
    }else{
        i--;
    }
    i++;
}while(i < 3); */
for(; i < 3; i++ ){ // Задаю пользователю по 2 раза вопросы


    let question1 = prompt("Введите обязательную статью расходов в этом месяце", "nothing"+i); // вопрос 1
    let question2 = prompt("Во сколько обойдется?", "0"); // вопрос 2

    // проверяю не пустые ли поля не нажата ли отмена и размер ввода
    if(!!question1 && !!question2 && question1.length < 50 && question2.length < 50){
        appData.expenses[question1] = question2; // добавляю новые свойства в объект
    }else{
        i--;
    }
    
}

appData.monyPerDay = appData.budget/30;

alert("Ежедневный бюджет: " + appData.monyPerDay ); // бюджет на 1 день

console.log(appData);

if(appData.monyPerDay < 100){
    console.log("Минимальный уновень достатка!");
}else if(appData.monyPerDay > 100 && appData.monyPerDay < 2000){
    console.log("Cредний уновень достатка!");
}else if(appData.monyPerDay > 2000){
    console.log("Высокий уновень достатка!");
}else {
    console.log("Что-то я не уверен)");
}