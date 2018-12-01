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

    let more = document.querySelector('.more'),
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
    });
});
