function changePage(){
    let page = document.querySelector('.moduleapp'),
        modules = [...page.querySelectorAll('.module')],
        logos = [...page.querySelectorAll('.logo')];
        //buttons = [...page.querySelectorAll('.next')];

        modules.forEach((mdl)=>{
            mdl.style.display = "none";
        });

        function pageInit() {
            page.innerHTML = '';
            for( let i = 0; i < 8; i++){
                if( i < 5 ){
                    page.appendChild(modules[0].cloneNode(true));
                    modules.push(page.lastChild);
                } else {
                    page.appendChild(modules[1].cloneNode(true));
                }                
            }
            page.childNodes[0].style.display = "block";
        }
        
        pageInit();

        //console.log(modules);

    /*    logos.forEach((logo,index)=>{ 
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
        }); */
    
}

module.exports = changePage;
