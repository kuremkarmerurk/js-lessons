window.addEventListener('DOMContentLoaded', function(){    
    let phone = document.getElementById('phone');

    //phone.value = "+49(___)______-__";
    phone.placeholder = "+49(___)______-__";

    phone.addEventListener('click', function(){
        if(!phone.value){
            phone.value = '+49(';
        }
    });

    phone.addEventListener('input', function(){
        let val = (phone.value.length < 4) ? '+49('.split('') : phone.value.split(''),
            map = "+49(___)______-___".split('');
            if( val.length < map.length ){
                if( val[val.length-1].match(/[0-9]/) ){
                    //map[val.length-1] == '_'
                    if(map[val.length - 1] != '_'){
                        val.splice(val.length - 1, 0 ,map[val.length - 1]);
                    }
                    phone.value = val.join('');
                } else {                    
                    if (val.length > 4){
                        val.pop();
                    }                    
                    phone.value = val.join('');
                }
            } else {
                val.pop();
                phone.value = val.join('');
            }
    });

    phone.addEventListener('focusout', function(){
        if ( phone.value == "+49(" ){
            phone.value = '';
        }
    });

});


