//definicja obiektu
let person = {
//    klucz dwuczlonowy
//    "first-name": 'Marcin',
    name: "Marcin",
    height: '170',
    print() {
        console.log(this.name + ' ' + this.height);
    }
}

//odwolac sie do wartosci ktora utrzymujemy pod kluczem mozemy poprzez uzycie .klucz lub ["klucz"]
//console.log(person.[first-name]);

//wyjecie kluczy
//console.log(person);

person.print();

//klasy
class Person {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    
    printInfo() {
        console.log(this.name + ' ' + this.height);
    }
}

let marcin = new Person("Marcin", 170);

//console.log(marcin.name);
marcin.printInfo();

let ania = new Person("Ania", 170);
ania.printInfo();


//Napisz funkcje, ktora jako parametr przyjmuje r kola i zwraca p

function poleKola(r) {
    return Math.PI * Math.pow(r,2);
}

console.log(poleKola(4));











