function smoothScrolling(){

    function smoothScroll() {
        let menu = document.getElementsByTagName('nav')[0].getElementsByTagName('a');

        for(let i = 0; i < menu.length; i++){
            menu[i].addEventListener('click', function(event){                
                if(menu[i].hash !== ""){
                    event.preventDefault();
                    let hash = menu[i].hash,
                        destination = document.querySelector(hash).getBoundingClientRect().top,
                        step = 50, 
                        go = function() {
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
                        },
                        scrollInterval = setInterval(go, 20);
                }
            });
        }
    }

    smoothScroll();
}

module.exports = smoothScrolling;