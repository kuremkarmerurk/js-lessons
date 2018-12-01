var d = new Date();
var week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Если выпендриваться

/*week.forEach(function(item, index){

    let node = document.createElement("p");
    var textnode = document.createTextNode(item);
    if(index == 5 || index == 6){
        node.style.fontStyle = "italic";
    }

    if(index == (d.getDay() + 6) % 7){
        node.style.fontWeight = "900";
    }
    
    node.appendChild(textnode);
    document.getElementById("content").appendChild(node);
});*/

// Если выпендриваться не выпендриваться

for(let i = 0; i < 7; i++){

    let node = document.createElement("p");
    var textnode = document.createTextNode(week[i]);
    if(i == 5 || i == 6){        
        node.style.fontWeight = "900";
    }

    if(i == (d.getDay() + 6) % 7){
        node.style.fontStyle = "italic";
    }
    
    node.appendChild(textnode);
    document.getElementById("content").appendChild(node);

}

let arr = ["59135", "62756", "73554", "36292", "88171", "36308", "60781"];

for(let i = 0; i < 7; i++){
    if(+arr[i].charAt(0) == 3 || +arr[i].charAt(0) == 7){
        console.log(arr[i]);
    }    
}