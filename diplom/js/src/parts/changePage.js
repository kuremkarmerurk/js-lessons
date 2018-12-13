function changePage(){
    let page = document.querySelector('.page'),
        slides = [...page.childNodes],
        logos = [...page.querySelectorAll('.logo')],
        buttons = [...page.querySelectorAll('.next')];

        slides.forEach((slide,index)=>{
            if(!slide.classList){
                slides.splice(index, 1);
            }
        });

        logos.forEach((logo,index)=>{ 
            logo.addEventListener('click', function(){
                slides.forEach((slide)=>{
                    slide.style.display = "none";
                });
                slides[0].style.display = "block";
            });
        });

        buttons.forEach((button,index)=>{ 
            button.addEventListener('click', function(){
                slides[index].style.display = "none";
                if(index+1 < slides.length){
                    slides[index+1].style.display = "block";
                } else {
                    slides[0].style.display = "block";
                }
            });
        });
    
}

module.exports = changePage;