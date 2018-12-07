window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(a) {
        if(tabContent[a].classList.contains('hide')){            
            tabContent[a].classList.remove('hide');
            tabContent[a].classList.add('show');
        }
    }

    hideTabContent(1);

    info.addEventListener('click', function(event){
        if(event.target.classList.contains('info-header-tab')){
            for(let i = 0 ; i < tab.length ; i++){
                if( event.target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Smooth Scrolling

    function smoothScrolling() {
        let menu = [...document.getElementsByTagName('nav')[0].getElementsByTagName('a')];
        menu.forEach(function(element){
            element.addEventListener('click', function(event){
                if(element.hash !== ""){
                    event.preventDefault();
                    let hash = element.hash,
                        destination = document.querySelector(hash).getBoundingClientRect().top,
                        step = 50,
                        scrollInterval = setInterval(go, 20);
                    function go() {
                        step = ( Math.abs(destination) < step) ? Math.abs(destination) : step;
                        if (destination > 0) {
                            scrollBy(0, step);
                            destination = destination - step;
                        } else if (destination < 0) {
                            scrollBy(0,-step);
                            destination = destination + step;
                        } else {
                            clearInterval(scrollInterval);
                            window.location.hash = hash;
                        }
                    }
                    
                }                
            });
        });
    }

    smoothScrolling();

    // timer

    let deadline = '2018-12-21';

    function getTimeRemaining(endtime){
        let t = Date.parse(deadline) -Date.parse(new Date()),
            seconds = 0,
            minutes = 0,
            hours = 0;
        if ( t > 0 ){
            seconds = Math.floor((t/1000) % 60);
            minutes = Math.floor((t/1000/60) % 60);
            hours = Math.floor(t/(1000*60*60));
        }
        

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = (t.hours > 9) ? t.hours : `0${t.hours}`;
            minutes.textContent = (t.minutes > 9) ? t.minutes : `0${t.minutes}`;
            seconds.textContent = (t.seconds > 9) ? t.seconds : `0${t.seconds}`; 

            if(t.total < 0){
                clearInterval(timeInterval);
            }
        }
    }
    
    setClock('timer', deadline);

    // Modal   

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
        //popupForm.innerHTML = '';
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

    // Slider

    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    slides.forEach((element) =>{
        element.classList.remove('fade');
        element.classList.add('tada');
    });   

    showSlides(slideIndex);

    function showSlides(n){

        if( n > slides.length ){
            slideIndex = 1
        }

        if( n < 1 ){
            slideIndex = slides.length;
        }

        slides.forEach((item)=>{item.style.display = 'none'});
        dots.forEach((item) => { item.classList.remove('dot-active')});
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n){
        showSlides(slideIndex += n);
    }

    function currentSlide(n){
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event){
        for (let i = 0; i < dots.length; i++ ) {
            if(event.target.classList.contains('dot')&&event.target == dots[i]){
                currentSlide(i + 1);
            }
        }
    })

    //calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place =  document.getElementById('select'),
        placeMod = +place.options[place.selectedIndex].value,
        totalValue =  document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        function spinNum(oldN, newN){
            let max = (oldN > newN) ? oldN : newN,
                min = (oldN < newN) ? oldN : newN,
                step = Math.ceil((max - min) / 100);
            
            if ( min == oldN){
                let interval = setInterval(()=>{
                    min = ((min + step) <= max) ? (min + step) : max ;
                    totalValue.innerHTML = min;
                    if(min == max){
                        clearInterval(interval);
                    }
                },0);
            }else{
                let interval = setInterval(()=>{
                    max = ((max - step) >= min) ? (max - step) : min ;
                    totalValue.innerHTML = max;
                    if(min == max){
                        clearInterval(interval);
                    }
                },0);
            }
            
        }

        function calcChange(activeInput, passiveInput){
            if(activeInput.value == '' || passiveInput.value == ''){
                totalValue.innerHTML = 0;
            } else {
                personsSum = +activeInput.value;
                daysSum = +passiveInput.value;
                total = (daysSum + personsSum)*4000*placeMod;

                spinNum(+totalValue.innerHTML, total);
            }
        }

        function calcInput(){
            if (this.validity.valid) {
                this.setAttribute('current-value', this.value.replace(/[^\d]/g, ""));
            }
            this.value = this.getAttribute('current-value');
        }

        persons.addEventListener('input', calcInput);
        restDays.addEventListener('input', calcInput);

        persons.addEventListener('change', () => {calcChange(persons, restDays)});
        restDays.addEventListener('change', () => {calcChange(restDays, persons)});
        
        place.addEventListener('change', function(){
            placeMod = +place.options[place.selectedIndex].value;
            calcChange(persons, restDays);
        });

});