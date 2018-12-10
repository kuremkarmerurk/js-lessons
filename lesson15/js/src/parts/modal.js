function modal() {
    let modalForm = document.querySelector('.main-form'),
        mainForm = document.querySelector('#form'),
        more = document.querySelector('.more'),
        popupForm = document.querySelector('.popup-form'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabMore = document.querySelectorAll('.description-btn'),
        md = new MobileDetect(window.navigator.userAgent);

    function openMore() {

        let opacity = 0, step = 0;

        function fade() {
            opacity = opacity + 0.02;
            overlay.style.opacity = opacity.toString();
            if( opacity < 1 ){
                requestAnimationFrame(fade);
            }        
        }

        function detectIE() {
            let ua = window.navigator.userAgent;
            
            let msie = ua.indexOf('MSIE ');
            if (msie > 0) {
              // IE 10 or older => return version number
              return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }
          
            let trident = ua.indexOf('Trident/');
            if (trident > 0) {
              // IE 11 => return version number
              let rv = ua.indexOf('rv:');
              return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }
          
            let edge = ua.indexOf('Edge/');
            if (edge > 0) {
              // Edge (IE 12+) => return version number
              return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }
          
            // other browser
            return false;
        }

        overlay.style.display = "block";
        this.classList.add('more-splach');
        
        if(md.mobile() || screen.width < 993 ){
            overlay.classList.remove('fade');
            console.log('mobile');
        }  else if(!detectIE()) {
            overlay.style.opacity = "0";
            overlay.classList.remove('fade');
            requestAnimationFrame(fade);
            console.log('not IE');
        }  else {
            console.log('IE');
        }

        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', openMore );

    tabMore.forEach(function(element){
        element.addEventListener('click', openMore );
    });

    close.addEventListener('click', function(){
        overlay.style.display = "none";
        more.classList.remove('more-splach');
        document.body.style.overflow = '';
        document.querySelector('.main-form').style.display = 'block';
        if (document.querySelector('.status')) { document.querySelector('.status').remove(); }
         
    });

    // Form

    let message = {
        loading: {
            img: 'img/loading.png',
            txt: 'Загрузка...'
        },
        success: {
            img: 'img/success.png',
            txt: 'Спасибо! скоро мы с вами свяжемся!'
        }, 
        failure: {
            img: 'img/bug.png',
            txt: 'Что-то пошло не так...'
        } 
    };

    let input = [...document.getElementsByTagName('input')],
        statusMessage = document.createElement('div'),        
        statusImg = statusMessage.appendChild(document.createElement('div').appendChild(document.createElement('img'))),
        statusTxt = statusMessage.appendChild(document.createElement('div'));

        
        statusMessage.classList.add('status');
        statusTxt.classList.add('status-txt');
        statusImg.classList.add('status-img');

    input.forEach(function(element){
        if(element.getAttribute('name') == "phone"){
            element.addEventListener('input', function(event){
                let val = element.value.toString().split('');
                val.forEach(function(el,ind){
                    if(!(el.match(/[0-9]/)||(el.match(/[+]/)&&(ind === 0)))){
                        val.splice(ind, 1);
                    }                 
                });
                element.value = val.join('');
            });
        }
    });

    function formRequest(event,f){
        event.preventDefault();
        modalForm.style.display = 'none';
        popupForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(f);

        let obj = {};
        formData.forEach(function(element,index){
            obj[index] = element;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        function clearInput() {
            input.forEach(function(element,index){
                input[index].value = '';
            });
        }

        function postData(){
            return new Promise(function(resolve,reject){
                    if(request.readyState < 4){
                        resolve();
                    } else if( request.readyState === 4 && request.status == 200){
                        resolve();
                    } else {
                        reject();
                    }
            });
      
        }

        request.addEventListener('readystatechange', function(){
            postData()
                .then(() => {
                    statusImg.src = message.loading.img;
                    statusTxt.innerHTML = message.loading.txt;
                    overlay.style.display = "block";
                })
                .then(() => {
                    statusImg.src = message.success.img;
                    statusTxt.innerHTML = message.success.txt;
                    overlay.style.display = "block";
                })
                .catch(() => {
                    statusImg.src = message.failure.img;
                    statusTxt.innerHTML = message.failure.txt;
                    overlay.style.display = "block";
                })
                .then(clearInput);
        });
    }

    modalForm.addEventListener('submit', (event) => {formRequest(event, modalForm); }); 
    mainForm.addEventListener('submit',  (event) => {formRequest(event, mainForm);  }); 
}

module.exports = modal;
