//zmienna globalna dostepna jest z kazdego miejsca w skrypcie, definiowana poza jakimkolwiek blokiem kodu
let zmiennaGlobalna= 10;

//zmienna lokalna zdefiniowana jest w bloku kodu i tylko w nim jest dostepna
function zalogujDoKonsoli() {
    let zmiennaLokalna= 5;
    console.log(zmiennaLokalna);
    if(1 > 0) {
        var zmienna3= 100;
        zmiennaLokalna = 10;
        zmiennaGlobalna = 15;
    }
    console.log(zmiennaLokalna);
//    console.log(zmienna3);
}

zalogujDoKonsoli();
console.log(zmiennaGlobalna);
//console.log(zmiennaLokalna);