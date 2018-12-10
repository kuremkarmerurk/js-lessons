function timer(){
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
}

module.exports = timer;
