function showVideo(){
    let overlay = document.querySelector('.overlay'),
        close = overlay.querySelector('.close'),
        showup = document.querySelector('.showup'),
        play = showup.querySelector('.play'),

        moduleApp = document.querySelector('.moduleapp'),
        playCircle = [...moduleApp.querySelectorAll('.play')],
        frame = document.querySelector('#frame');

        overlay.style.zIndex = "100";

    play.addEventListener('click',()=>{
        frame.src = play.dataset.url;
        overlay.style.display = "flex"; 
        document.body.style.overflow = 'hidden';        
    });

    close.addEventListener('click',()=>{
        frame.src = play.dataset.url;
        frame.style.display = "flex";
        if(document.querySelector('.status')){document.querySelector('.status').remove();}
        overlay.style.display = "none";
        document.body.style.overflow = '';
    });


}

module.exports = showVideo;