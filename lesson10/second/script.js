window.addEventListener('DOMContentLoaded', function(){    

    function randomStr(m) {
        m = m || 9; s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
        return s;
    };

    class options {

        constructor(height = "auto", width = "100%", bg = "#fff", color = "#000", fontSize = "12px", textAlign = "left") {
          this.height = height;
          this.width = width;
          this.bg = bg;
          this.color = color;
          this.fontSize = fontSize;
          this.textAlign = textAlign;
        }

        makeNewDiv() {
            let div = document.createElement("div");

            div.innerText = randomStr(Math.floor(Math.random() * 1000) + 1);
            div.style.cssText = `line-height: 22px;border-radius: 10px;color:${this.color};margin: 5px auto; padding: 10px; word-break: break-all;background-color:${this.bg};font-size:${this.fontSize};height:${this.height};width:${this.width};text-align:${this.textAlign};`

            return div;
        }
        
    }

    let container = document.querySelector('.container'),
        div = new options("auto", "80%", "#000", "rgb(57, 230, 18)", "14px");

    container.appendChild(div.makeNewDiv());
});


