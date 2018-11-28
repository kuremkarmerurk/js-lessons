window.addEventListener('DOMContentLoaded', function(){    
    let board = document.getElementById('content'),
        goButton = document.getElementById('go'),
        y = Math.floor((Math.random() * (board.offsetHeight - 52)) + 2),
        x = Math.floor((Math.random() * (board.offsetWidth - 52)) + 2),
        stepX = Math.floor((Math.random() * 10) + 1),
        stepY = Math.floor((Math.random() * 10) + 1),
        go = false,
        requestId;

    function drawBall() {
        let ball = document.createElement('div');
        ball.id = "ball";
        ball.style.top = y + "px";
        ball.style.left = x + "px";
        board.innerHTML = '';
        board.appendChild(ball);
    }

    function loop() {
        drawBall();
        x += stepX; 
        y += stepY;

        if ( x <= 0 ){
            x = 0;
            stepX = - stepX;
        }

        if ( y <= 0 ){
            y = 0;
            stepY = - stepY;
        }

        if ( x >= (board.offsetWidth - 52) ){
            x = board.offsetWidth - 52;
            stepX = - stepX;
        }

        if ( y >= (board.offsetHeight - 52) ){
            y = board.offsetHeight - 52;
            stepY = - stepY;
        }

        if(go){
            requestAnimationFrame(loop);
        }
        
    }

    goButton.addEventListener('click', function(e){
        if(!go){
            e.target.textContent = 'Stop!!!';
            requestAnimationFrame(loop);
            go = true;
        }else{
            e.target.textContent= 'Go!';
            requestId = undefined;
            go = false;
        }
    })
    


});


