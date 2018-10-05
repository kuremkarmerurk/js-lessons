let num = 33721; // Создаю переменную num со значением 33721 
let str = num.toString();
let nums = str.split("");
let product = 1;
let i = 0;

nums.forEach(function(element) {
    product *= +element;
  });

let result = product**3;

console.log(product);

while (result >= 100){ 
    result = parseInt(result /= 10); 
}

alert(result);