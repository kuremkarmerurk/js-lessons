let num = 33721; // Создаю переменную num со значением 33721 
let str = num.toString();
let nums = str.split("");
let product = 1;
let i = 0;

nums.forEach(function(element) {
    product *= parseInt(element);
  });

let result = product;

while (i < 3){ result *= product; i++; }

console.log(product);
console.log(result);

while (result >= 100){ 
    result = parseInt(result /= 10); 
}

console.log(result);