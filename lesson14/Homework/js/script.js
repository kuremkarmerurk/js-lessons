$(document).ready(function(){
    let position = $('.modal').position();
    $('.modal').offset({ top: -500, left: -position.left});

    $('.main_nav nav ul li:eq(1), .main_btna, .main_btn').on('click', function() {
        if ( $( ".status" ).length ) { 
            $('.status').remove();  
            $('.form form').show(); 
      
        } 

        $('.overlay').animate(
            {
                opacity: 'toggle',
            }, "slow"            
        );
        $('.modal').animate(
            {
                opacity: 'toggle',
                top: -position.top,
            }, "slow"           
        );
    });

    $('.modal .close').on('click', function() {
        $('.overlay').animate(
            {
                opacity: 'toggle',
            }, "slow"            
        );
        $('.modal').animate(
            {
                opacity: 'toggle',
                top: -500,
            }, "slow"           
        ); 
    });
    $('.form form').on('submit', function(event) {
        event.preventDefault();

        let formData = $('.form form').serializeArray(),
            obj = {},
            message = {
                success: {
                    img: 'img/success.png',
                    txt: 'Спасибо! скоро мы с вами свяжемся!'
                }, 
                failure: {
                    img: 'img/bug.png',
                    txt: 'Что-то пошло не так...'
                } 
            },
            statusMessage = document.createElement('div'),        
            statusImg = statusMessage.appendChild(document.createElement('div').appendChild(document.createElement('img'))),
            statusTxt = statusMessage.appendChild(document.createElement('div'));

            
            statusMessage.classList.add('status');
            statusTxt.classList.add('status-txt');
            statusImg.classList.add('status-img');
            $('.form').append(statusMessage);

        formData.forEach(function(element){
            obj[element.name] = element.value;
        });
        let json = JSON.stringify(obj);

        $.ajax({
            type: "POST",
            url: 'server.php',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            data: json,
            success: function() {
                statusImg.src = message.success.img;
                statusTxt.innerHTML = message.success.txt;
                $('.form form').hide();
                $('.status').show();
            },
            error: function() {
                statusImg.src = message.failure.img;
                statusTxt.innerHTML = message.failure.txt;
                $('.form form').hide();
                $('.status').show();
            },
        });    
    });
});

