//tablice
let zmienna = ['Krystian', 'Ania', 'Adam'];

//wyciaganie elementu z tablicy poprzez podanie numeru indeksu w nawiasie kwadratowym
console.log(zmienna[1]);

//dodawanie wartosci na koniec tablicy
zmienna[3] = 'Marcin';
console.log(zmienna);

zmienna.push('Michał');
console.log(zmienna);

//dodawanie elemntow wartosci na poczatek tablicy
zmienna.unshift('Monika');
console.log(zmienna);

//usuwanie elementow
//metoda pop() usuwa element z konca
zmienna.pop();
console.log(zmienna);

//zmienna shift() usuwa pierwszy Element z tablic
zmienna.shift();
console.log(zmienna);

//sprawdzenie dlugosci tablicy
//lenght()


//laczenie kolejnych elemntow w jeden tekst
//join() - zwraca wszystkie lementy wypisane jako tekst, w nawiasach opcjonalnie mozemy dodac separator ','
console.log(zmienna.join());

//jak wykonujesz metode reverse to niezaleznie od tego gdzie zostala wykonana zawsze i wszedzie tablica jest odwrocona to samo tyczy sie sort