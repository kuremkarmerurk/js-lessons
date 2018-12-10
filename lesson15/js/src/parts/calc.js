function calc(){
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place =  document.getElementById('select'),
        placeMod = +place.options[place.selectedIndex].value,
        totalValue =  document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

    function spinNum(oldN, newN){
        let max = (oldN > newN) ? oldN : newN,
            min = (oldN < newN) ? oldN : newN,
            step = Math.ceil((max - min) / 100);
           
        if ( min == oldN){
            let interval = setInterval(()=>{
                min = ((min + step) <= max) ? (min + step) : max ;
                totalValue.innerHTML = min;
                if(min == max){
                    clearInterval(interval);
                }
            },0);
        }else{
            let interval = setInterval(()=>{
                max = ((max - step) >= min) ? (max - step) : min ;
                totalValue.innerHTML = max;
                if(min == max){
                    clearInterval(interval);
                }
            },0);
        }
            
    }

    function calcChange(activeInput, passiveInput){
        if(activeInput.value == '' || passiveInput.value == ''){
            totalValue.innerHTML = 0;
        } else {
            personsSum = +activeInput.value;
            daysSum = +passiveInput.value;
            total = (daysSum + personsSum)*4000*placeMod;

            spinNum(+totalValue.innerHTML, total);
        }
    }

    persons.addEventListener('change', () => {calcChange(persons, restDays)});
    restDays.addEventListener('change', () => {calcChange(restDays, persons)});

    function calcInput(){
        if (this.validity.valid) {
            this.setAttribute('current-value', this.value.replace(/[^\d]/g, ""));
        }
        this.value = this.getAttribute('current-value');
    }

    persons.addEventListener('input', calcInput);
    restDays.addEventListener('input', calcInput); 

    
        
    place.addEventListener('change', function(){
        placeMod = +place.options[place.selectedIndex].value;
        calcChange(persons, restDays);
    }); 
}

module.exports = calc;
