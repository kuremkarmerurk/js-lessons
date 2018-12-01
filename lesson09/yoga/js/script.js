'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(a) {
        if (tabContent[a].classList.contains('hide')) {
            tabContent[a].classList.remove('hide');
            tabContent[a].classList.add('show');
        }
    }

    hideTabContent(1);

    info.addEventListener('click', function (event) {
        if (event.target.classList.contains('info-header-tab')) {
            for (var i = 0; i < tab.length; i++) {
                if (event.target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Smooth Scrolling

    function smoothScrolling() {
        var menu = [].concat(_toConsumableArray(document.getElementsByTagName('nav')[0].getElementsByTagName('a')));
        menu.forEach(function (element) {
            element.addEventListener('click', function (event) {
                if (element.hash !== "") {
                    var go = function go() {
                        step = Math.abs(destination) < step ? Math.abs(destination) : step;
                        if (destination > 0) {
                            scrollBy(0, step);
                            destination = destination - step;
                        } else if (destination < 0) {
                            scrollBy(0, -step);
                            destination = destination + step;
                        } else {
                            clearInterval(scrollInterval);
                            window.location.hash = hash;
                        }
                    };

                    event.preventDefault();
                    var hash = element.hash,
                        destination = document.querySelector(hash).getBoundingClientRect().top,
                        step = 50,
                        scrollInterval = setInterval(go, 20);
                }
            });
        });
    }

    smoothScrolling();

    // timer

    var deadline = '2018-12-21';

    function getTimeRemaining(endtime) {
        var t = Date.parse(deadline) - Date.parse(new Date()),
            seconds = 0,
            minutes = 0,
            hours = 0;
        if (t > 0) {
            seconds = Math.floor(t / 1000 % 60);
            minutes = Math.floor(t / 1000 / 60 % 60);
            hours = Math.floor(t / (1000 * 60 * 60));
        }

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        var timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            var t = getTimeRemaining(endtime);
            hours.textContent = t.hours > 9 ? t.hours : "0" + t.hours;
            minutes.textContent = t.minutes > 9 ? t.minutes : "0" + t.minutes;
            seconds.textContent = t.seconds > 9 ? t.seconds : "0" + t.seconds;

            if (t.total < 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadline);

    // Modal   

    var more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabMore = document.querySelectorAll('.description-btn'),
        md = new MobileDetect(window.navigator.userAgent);

    function openMore() {

        var opacity = 0,
            step = 0;

        function fade() {
            opacity = opacity + 0.02;
            overlay.style.opacity = opacity.toString();
            if (opacity < 1) {
                requestAnimationFrame(fade);
            }
        }

        function detectIE() {
            var ua = window.navigator.userAgent;

            var msie = ua.indexOf('MSIE ');
            if (msie > 0) {
                // IE 10 or older => return version number
                return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
            }

            var trident = ua.indexOf('Trident/');
            if (trident > 0) {
                // IE 11 => return version number
                var rv = ua.indexOf('rv:');
                return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
            }

            var edge = ua.indexOf('Edge/');
            if (edge > 0) {
                // Edge (IE 12+) => return version number
                return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
            }

            // other browser
            return false;
        }

        overlay.style.display = "block";
        this.classList.add('more-splach');

        if (md.mobile() || screen.width < 993) {
            overlay.classList.remove('fade');
            console.log('mobile');
        } else if (!detectIE()) {
            overlay.style.opacity = "0";
            overlay.classList.remove('fade');
            requestAnimationFrame(fade);
            console.log('not IE');
        } else {
            console.log('IE');
        }

        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', openMore);

    tabMore.forEach(function (element) {
        element.addEventListener('click', openMore);
    });

    close.addEventListener('click', function () {
        overlay.style.display = "none";
        more.classList.remove('more-splach');
        document.body.style.overflow = '';
    });
});