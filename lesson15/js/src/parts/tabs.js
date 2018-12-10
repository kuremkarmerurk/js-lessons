function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(a) {
        if(tabContent[a].classList.contains('hide')){            
            tabContent[a].classList.remove('hide');
            tabContent[a].classList.add('show');
        }
    }

    hideTabContent(1);

    info.addEventListener('click', function(event){
        if(event.target.classList.contains('info-header-tab')){
            for(let i = 0 ; i < tab.length ; i++){
                if( event.target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
}

module.exports = tabs;