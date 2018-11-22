function addZero(dateStr) {

    if (typeof(dateStr) !== 'string'){
        dateStr.toString();
    }

    let strParts = dateStr.split(".");

    for(let i = 0; i < 3; i++){
        if( parseInt(strParts[i]) < 10 ){
            strParts[i] = '0' + parseInt(strParts[i]);
        }
    } 

    return strParts[0] + "." + strParts[1] + "." + strParts[2];

}

function todayOfTheWeek() {
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

    let node = document.createElement("p");
    let textnode = document.createTextNode(week[(d.getDay() + 6) % 7]);
    node.appendChild(textnode);
    document.getElementById("content").appendChild(node);

}

let d = new Date();
let y = d.toLocaleDateString();
let t = d.toLocaleTimeString();

let node = document.createElement("p");
let textnode = document.createTextNode(t + " " + y);
node.appendChild(textnode);
document.getElementById("content").appendChild(node);

let node2 = document.createElement("p");
let textnode2 = document.createTextNode(addZero("1.1.2019"));
node2.appendChild(textnode2);
document.getElementById("content").appendChild(node2);

todayOfTheWeek();

function getDiff() {
    let dateDiffInDays = function(date1, date2) {
        dt1 = new Date(date1);
        dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
        
    let date1 = document.getElementById('startDate').value;
    let date2 = document.getElementById('endDate').value;
    
    document.getElementById('output').value = dateDiffInDays(date1, date2);
}



