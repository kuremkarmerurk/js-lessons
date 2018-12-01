window.addEventListener('DOMContentLoaded', function(){    
    let result = document.getElementById('date');
    setInterval( function(){
        let d = new Date(),
            h = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours(),
            m = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes(),
            s = (d.getSeconds() < 10) ? "0" + d.getSeconds() : d.getSeconds(),
            t = document.createTextNode(h + " : " + m + " : " + s),
            h1 = document.createElement("h1");
            result.innerHTML = '';
            h1.appendChild(t);
            result.appendChild(h1);
        console.clear();
        console.log(h + " : " + m + " : " + s);        
    }, 1000);    
});