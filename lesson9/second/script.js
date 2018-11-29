window.addEventListener('DOMContentLoaded', function(){    
    let age = document.getElementById('age');
 
    function showUser(surname, name) {
            alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    }
    
    let userShow = showUser.bind(age);

    userShow('Евгений','Третьяк');

    age.addEventListener('change', function(){
        userShow('Евгений','Третьяк');
    });

});


