let zmienna = 10;

console.log(zmienna); 
//10
console.log(++zmienna);
//11
console.log(zmienna++);
//11 najpierw wypisuje zmienna potem dodaje do niej dlatego nastepne jest 12
console.log(zmienna);
//12

//operatory przypisania
zmienna += 10;
//zmienna = zmienna + 10
console.log(zmienna);

if(2 ==='2') {
    console.log("2 == '2'");
}

//operatory logiczne
//&& - iloczyn logiczny
//|| - suma logiczna
//! - negacja czyli zmiana wartosci true na false
//
//if(2 == '2' && 3 == '3') {
//    console.log('iloczyn logiczny');
//}

if(!(2 === '2' && 3 == '3')) {
    console.log('negacja iloczynu logicznego');
}

//operator warunkowy
//x : y
//jesli warunek jest spelniony to daje x jesli nie to 
//
//let number = 100;
//let wynik = (number<0) ? -1:1;
//console.log(wynik);
//

//if, else if, else

if (1 > 10) {
    console.log('1 > 10');
}
else if (1 == 10) {
    console.log('1 == 10');
}
else {
    console.log('1 < 10');
}


//switch

let kolor = 'czerwony';

switch (kolor) {
    case 'zielony':
        console.log('Podałeś kolor zielony');
        break;
        
    case 'niebieski':
        console.log('Podałeś kolor niebieski');
        break;
    case 'zolty':
        console.log('Podałeś kolor zolty');
        break;
    default:
        console.log('Nie podałeś koloru z listy');
}

//Pętle - służa do wykonania instrukcji wielokrotnie aż zostanie spełniony określony warunek

let tablica = [10, 100, 35, 94, 105];

//od poczatku do konca
//for(let i = 0; i < tablica.length; i++) {
//    console.log(tablica[i]);
//}
//
////od konca do poczatku
//for(let i = tablica.length -1; i >=0 ; i--) {
//    console.log(tablica[i]);
//}


tablica.forEach(function(element, index){
    console.log('Index tablica: ' + index + ' ,element tablicy: ' + element);
})

//petla for in - na obeiktach dajemy klucz w obiekcie
let samochod = {
    marka: 'audi',
    kolor: 'bialy',
    pojemnosc: 5.2
}


for(let key in samochod) {
    console.log(samochod[key]);
}


//petla while nie rob na Macu :<

let liczba = 0;
while(liczba > 10) {
    console.log(liczba++);
}


//do while - najpierw wykonuje instrukcje potem sprawdza warunek
//UWAGA TO PONIZEJ TO WSTRETNA PETLA NIESKONCZONA
//let number = 0;
//do {
//    console.log(number++);
//} while (number > 2)



let numbers = 0;
while(true) {
    console.log(numbers++);
    
    if(numbers == 10) {
        break;
    }
}



for(let i=1; i<=20; i++) {
    
    if(i % 2 != 0) {
        continue;
    }
    
    console.log(i + '');
}

























