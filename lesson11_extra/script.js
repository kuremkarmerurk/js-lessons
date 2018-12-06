window.addEventListener('DOMContentLoaded', function(){   
    class carCard {
        constructor(img, name, description, price) {
          this.card = document.createElement('div');
          this.card.classList.add('col-md-3', 'car-wrapper');
          this.car = document.createElement('div'); 
          this.car.classList.add('car');
          this.img = this.car.appendChild(document.createElement('img'));
          this.img.src = img;
          this.car.appendChild(document.createElement('hr'));
          this.carName = this.car.appendChild(document.createElement('div'));
          this.carName.classList.add('name');
          this.carName.textContent = name;
          this.descript = this.car.appendChild(document.createElement('div'));
          this.descript.classList.add('description');
          this.descript.textContent = description;
          this.price = this.car.appendChild(document.createElement('p'));
          this.price.classList.add('price');
          this.price.textContent = price;
          this.card.appendChild(this.car);
        }
    }

    let land = document.getElementById('land'),
        sort = document.getElementById('sort'),
        go = document.getElementById('go'),
        field = document.getElementById('field');
    
    function sortByName(a, b){
            var keyA = a.name,
                keyB = b.name;
            if(keyA < keyB) return -1;
            if(keyA > keyB) return 1;
            return 0;
    }

    function loadJSON(sort,land) {   

        let xobj = new XMLHttpRequest();
        xobj.open('GET', 'cars.json'); 
        xobj.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xobj.send();
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                let carFile = JSON.parse(xobj.responseText);

                switch(sort) {
                    case 'от А до Z':
                        carFile.cars.sort(function(a, b){ return sortByName(a, b)});
                        break;
                    case 'от Z до А':
                        carFile.cars.sort(function(a, b){ return sortByName(b, a)});
                        break;
                    case 'цены по возрастанию':
                        carFile.cars.sort(function(a, b){ return a.price - b.price});
                        break;
                    case 'цены по убыванию':
                        carFile.cars.sort(function(a, b){ return b.price - a.price});
                        break;
                }
                field.innerHTML = '';
                carFile.cars.forEach(function(element){
                    switch(land) {
                        case 'Германия':
                            if(element.category == 'germany'){
                                let cC = new carCard(element.img,element.name,element.description,element.price);
                                field.appendChild(cC.card);
                            }                            
                            break;
                        case 'Франция':
                            if(element.category == 'france'){    
                                let cC = new carCard(element.img,element.name,element.description,element.price);
                                field.appendChild(cC.card);
                            }
                            break;
                        case 'Италия':
                            if(element.category == 'italian'){    
                                let cC = new carCard(element.img,element.name,element.description,element.price);
                                field.appendChild(cC.card);
                            }
                            break;
                        default :
                            let cC = new carCard(element.img,element.name,element.description,element.price);
                            field.appendChild(cC.card);
                    }                    
                });
              }
        };          
     }

    loadJSON('от А до Z','init');
    go.addEventListener('click', function(){
        loadJSON(sort.options[sort.selectedIndex].text,land.options[land.selectedIndex].text);
    });    

});


