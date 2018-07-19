//deklaracja funkcji
//function wypiszDoKonsoli() {
//    console.log('123');
//}
//
//wypiszDoKonsoli();


//wyrazenie funkcyjne
const wypiszDoKonsoli = function() {
    console.log('123');
}

wypiszDoKonsoli();

//funkcje parametrowe
function dodawanie(parametr1, parametr2) {
   
//          return - pozwala na wykorzystanie wartosci w pozniejszym miejscu w skrypcie
return parametr1 + parametr2
}
//jesli chcemy zoabczyc wartisc zwrocona to console.log i w srodku funkcja albo zaraz przed return
//          console.log(dodawanie (1, 2));

//funkcje strzalkowe
const dodawanie2 = (parametr1, parametr2) => {
    console.log(parametr1 + parametr2);
    return parametr1 + parametr2;
}

console.log(dodawanie2(1, 2));

