let str = "урок-3-был слишком легким";
str = str.replace("у","У");
str = str.replace(/-/g," ");
str = str.substr(0, str.length - 2) + "о";

let arr = [20, 33, 1, "Человек", 2, 3];

let result = 0;

for(let i = 0; i < arr.length; i++){
    if(!isNaN(arr[i])){
        result += arr[i]**3;
    }
}

function editStr(str){    
    if(typeof(str) == "string"){
        str = str.trim();
        if(str.length > 50){
            str = str.substr(0, 50) + "...";
        }
        console.log("После функции editStr(): '" + str + "'");
    }else{
        console.log("Ошибка. Аргумент не является строкой!!!");
    }
}

// вывод данных
console.log(str);
console.log(Math.sqrt(result));
console.log("До функции editStr(): ' 0123456789 0123456789 0123456789 0123456789 0123456789 '");
editStr(' 0123456789 0123456789 0123456789 0123456789 0123456789 ');
alert(str);
