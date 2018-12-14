function mainSlider(){
    let slider = document.querySelector('.showup__content-slider'),
        slides = [...slider.querySelectorAll('.card')],
        arrowRight = document.querySelector('.slider-right'),
        arrowLeft = document.querySelector('.slider-left');
        slider.style.display = "flex";

        for(let i = 4; i < slides.length; i++){
            slides[i].style.display = "none";                    
        }
        
        function sliderMove() {
            for(let i = 0 ; i < 4 ; i++){
                slides[i].classList.add('card-left');
            }                                            
        }

        arrowLeft.addEventListener('click', function(){
            sliderMove();
            console.log(slides[1].offsetLeft);
        });

        arrowRight.addEventListener('click', function(){
            console.log('test');
        });

        console.log(slides[0].offsetLeft);
        console.log(slides[1].offsetLeft);

}

module.exports = mainSlider;