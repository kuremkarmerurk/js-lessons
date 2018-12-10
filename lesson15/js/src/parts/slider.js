function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    for( let i = 0; i < slides.length; i++){
        slides[i].classList.remove('fade');
        slides[i].classList.add('tada');
    }

    showSlides(slideIndex);

    function showSlides(n){

        if( n > slides.length ){
            slideIndex = 1
        }

        if( n < 1 ){
            slideIndex = slides.length;
        }

        for( let i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
        }  
        for( let i = 0; i < dots.length; i++){
            dots[i].style.display = 'none';
        }  
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
}

module.exports = slider;
