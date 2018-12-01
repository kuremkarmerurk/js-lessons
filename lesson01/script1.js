let money = prompt("Ваш бюджет на месяц?", "0"); // бюджет 
let time = prompt("Введите дату в формате YYYY-MM-DD", "1986-03-15"); // Дата
let expenses = {}; // создаю пустой объект
for(let i = 1; i < 3; i++ ){ // Задаю пользователю по 2 раза вопросы

    let question1 = prompt("Введите обязательную статью расходов в этом месяце", "nothing"+i); // вопрос 1
    let question2 = prompt("Во сколько обойдется?", "0"); // вопрос 2

    expenses[question1] = question2; // добавляю новые свойства в объект
}
    
let appData = {
    budget : money,
    timeData : time,
    expenses: expenses,
    optionalExpenses : {},
    income : [],
    savings : false,
};

alert(+appData.budget/30); // бюджет на 1 день

console.log(appData);