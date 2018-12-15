function mainSlider(){
    let slider = document.querySelector('.showup__content-slider'),
        slides = [...slider.querySelectorAll('.card')],
        arrowRight = document.querySelector('.slider-right'),
        arrowLeft = document.querySelector('.slider-left'),
        arrowSlider = [...slider.querySelectorAll('.card__controls-arrow')],
        plus = document.querySelector('.showup__content-side'),
        noclick = false;
        slider.style.display = "flex";

        for(let i = 4; i < slides.length; i++){
            slides[i].style.display = "none";                    
        }
        
        function sliderLeft() {
            noclick = true;
            for(let i = 0 ; i < 4 ; i++){
                slides[i].classList.add('card-left');
            } 
            setTimeout(function(){
                slides[0].style.display = "none"; 
                for(let i = 0 ; i < 4 ; i++){
                    slides[i].classList.remove('card-left');
                } 
                slides[4].style.display = "block"; 
                slides[0].classList.remove('card-active'); 
                slides[1].classList.add('card-active');
                slider.appendChild(slides[0]);
                slides.push(slides.shift());
                noclick = false; 
            }, 2500);

        }

        function sliderRight() {
            noclick = true;
            slides.unshift(slides.pop());
            slider.insertBefore(slides[0], slider.childNodes[0]);
            slides[0].style.display = "block";
            slides[4].style.display = "none";
            slides[1].classList.remove('card-active'); 
            slides[0].classList.add('card-active');
            for(let i = 0 ; i < 4 ; i++){
                slides[i].classList.add('card-right');
            } 
            setTimeout(function(){
                for(let i = 0 ; i < 4 ; i++){
                    slides[i].classList.remove('card-right');
                }  
                noclick = false;               
            }, 2700);

        }

        arrowLeft.addEventListener('click', function(){
            if(!noclick){sliderLeft();}            
        });

        arrowSlider.forEach(function(arrow){
            arrow.addEventListener('click', function(event){
                if(!noclick){sliderLeft();}                
            });
        });

        arrowRight.addEventListener('click', function(){
            if(!noclick){sliderRight();}  
        });

        slides.forEach(function(slide, index){
            slide.addEventListener('click', function(event){
                if(event.target.parentNode.nodeName != 'svg'){
                    window.location.href = "modules.html?module=" + (index + 1);
                }
            });
        });

        plus.addEventListener('click', function(event){
            window.location.href = "modules.html";
        });

}

module.exports = mainSlider;