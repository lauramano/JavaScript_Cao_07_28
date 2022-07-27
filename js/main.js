'use strict';
console.log('Pavyko, oop bandau');

class Cars {
    constructor(brand, model, engine) {
        this.prekesZenklas = brand;
        this.model = model;
        this.variklis = engine;
        this.turnOn = function(){
            alert('vrooom');
        }
        }
       
}

const c1 = new Cars('BMW', 'OP', 2.7);
const c2 = new Cars ('Moscvic', 'C2', 2.2);
console.log(c1, c2 );
c1.turnOn();
c2.turnOn();
// [c1, c2].forEach((uOb) => console.log(uOb instanceof Cars)); // jei  sukurti objektai is class tai rodo true

