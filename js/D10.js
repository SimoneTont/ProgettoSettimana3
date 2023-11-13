/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("Esercizio A")
let a=10;
let b=20;
let sum=a+b;
console.log(sum)
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("Esercizio B")
let random=Math.floor(Math.random()*21)
console.log(random)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("Esercizio C")
const me = {
  name: 'Simone',
  surname: 'Tonti',
  age:24,
}
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("Esercizio D")
delete me.age;
console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("Esercizio E")
programmazione=["C++", "HTML", "CSS", "Javascript"]
me.skills=programmazione
console.log(me.skills)
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio F")
let newElement="Nuovo"
me.skills.push(newElement)
console.log(me.skills)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("Esercizio G")
me.skills.pop();
console.log(me.skills)
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("Esercizio 1")
function dice ()
{
  random=Math.ceil(Math.random()*6)
  return random
}
console.log(dice())
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("Esercizio 2")
a=7
b=9
let risultato=""
function whoIsBigger (a,b)
{
  if(a>b)
  {
    risultato= a+" è maggiore di "+b
  }
  else if (a===b)
  {
    risultato= "I due numeri sono uguali"
  }
  else
  {
    risultato= b+" è maggiore di "+a    
  }
  return risultato
}
console.log(whoIsBigger(a,b))
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("Esercizio 3")
let stringaInput="Ciao, sono una funzione Javascript"
function splitMe (stringaInput)
{
  let arr=[]
  arr=stringaInput.split(' ');
  return arr
}
console.log(splitMe(stringaInput))
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("Esercizio 4")
let bool=false
function deleteOne (stringaInput,bool)
{
  if (bool===true)
  {
    risultato=stringaInput.slice(1)
  }
  else
  {
    risultato=stringaInput.slice(0,-1)
  }
  return risultato
}
console.log(deleteOne(stringaInput,bool))
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("Esercizio 5")
stringaInput="I have 4 dogs"
function onlyLetters (stringaInput)
{
  risultato=""
  let arr=stringaInput.split(" ")
  for (let i=0;i<arr.length;i++)
  {
    if (isNaN(parseInt(arr[i])))
    {
      risultato=risultato+arr[i]+" "
    }
  }
  return risultato
}
console.log (onlyLetters (stringaInput))
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
//struttura testo@testo2.testo3
console.log("Esercizio 6")
stringaInput="Ciao@65.net"
function isThisAnEmail (stringaInput)
{
  let arr=[]
  let x=stringaInput.includes("@");
  if (x===true)
  {
    arr=stringaInput.split("@");
    if(arr[1].includes("."))
    {
      arr=stringaInput.split(".");
      if(arr[1]==="")
      {
        risultato="Not a valid email"
      }
      else
      {
        risultato="Valid email"
      }
    }
    else
    {
      risultato="Not a valid email"
    }
  }
  else
  {
    risultato="Not a valid email"
  }
  return risultato
}
console.log(isThisAnEmail(stringaInput))
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("Esercizio 7")
function whatDayIsIt ()
{
  let today = new Date()
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
  let n=today.getDay()
  return days[n]
}
console.log(whatDayIsIt ())
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("Esercizio 8")
let num = 3;
sum=0
function rollTheDices (num)
{
  let arr=[]
  let x=0;
  for (let i=0;i<num;i++)
  {
    x=dice()
    arr.push(x)
    sum=sum+x
  }
  console.log("La somma è "+sum)
  return arr
}
console.log(rollTheDices(num))
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("Esercizio 9")
let inputDate = new Date("2022-10-07")
function howManyDays (inputDate)
{
  let today = new Date()
  z=Math.floor((today-inputDate)/86400000)
  return z
}
console.log(howManyDays(inputDate))
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("Esercizio 10")
function isTodayMyBirthday ()
{
  risultato=false
  let today = new Date()
  if (today.getDate===8)
  {
    if(today.getMonth===11)
    {
      risultato=true
    }
  }
  return risultato
}
console.log(isTodayMyBirthday())
// Arrays & Oggetti
/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
stringaInput="name"
const me2 = {
  name: 'Simone',
  surname: 'Tonti',
  age:24,
}
function deleteProp (obj,string)
{
  string=string.trim()
  if (string==="name")
  {
      delete obj.name;
  }
  else if (string==="surname")
  {
      delete obj.surname;
  }
  else if (string==="age")
  {
      delete obj.age;
  }
  return obj
}
console.log (deleteProp(me2,stringaInput))
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("Esercizio 12");
let newest= {Year: '0',}
function newestMovie (movies)
{
  for (let i=0;i<movies.length;i++)
  {
    if(movies[i].Year>newest.Year)
    {
      newest=movies[i]
    }
  }
  return newest
}
console.log(newestMovie (movies))
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 13");
function countMovies (obj)
{
  let c=0
  for (let i=0;i<movies.length;i++)
  {
    if(movies[i].Type==="movie")
    {
      c++
    }
  }
  return c
}
console.log(countMovies(movies))
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 14");
function onlyTheYears (movies)
{
  let arr=[]
  for (let i=0;i<movies.length;i++)
  {
    arr.push(movies[i].Year)
  }
  return arr
}
console.log(onlyTheYears(movies))
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 15");
function onlyInLastMillennium (movies)
{
  let arr=[]
  for (let i=0;i<movies.length;i++)
  {
    if (movies[i].Year>=2000)
    {
      arr.push(movies[i])
    }
  }
  return arr
}
console.log(onlyInLastMillennium(movies))
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("Esercizio 16");
function sumAllTheYears (movies)
{
  sum=0
  for (let i=0;i<movies.length;i++)
  {
    sum=sum+(parseInt(movies[i].Year))
  }
  return sum
}
console.log(sumAllTheYears(movies))
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("Esercizio 17");
let givenTitle="Avengers: Endgame"
function searchByTitle (movies,givenTitle)
{
  let arr=[]
  for (let i=0;i<movies.length;i++)
  {
    if (movies[i].Title===givenTitle)
    {
      arr.push(movies[i])
    }
  }
  return arr
}
console.log(searchByTitle(movies,givenTitle))
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("Esercizio 18");
givenTitle="Avengers"
function searchAndDivide (string)
{
  let result = {
    match: [],
    unmatch: [],
  };
  for (let i=0;i<movies.length;i++)
  {
    if (movies[i].Title.includes(string))
    {
      result.match.push(movies[i]);
    }
    else
    {
      result.unmatch.push(movies[i]);
    }
  }
  return result
}
console.log(searchAndDivide(givenTitle))
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("Esercizio 19");
numero=-1
function removeIndex(number)
{
  for (let i=0;i<movies.length;i++)
  {
    if(i===numero)
    {
      delete movies[i];
    }
  }
  return movies
}
console.log(removeIndex(numero))
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("Esercizio 20");
const selectContainer = function ()
{
  let div = document.getElementById("container")
  console.log(div)
}
selectContainer()
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("Esercizio 21");
const selectTd = function ()
{
  let td = document.getElementsByTagName("td")
  console.log(td)
}
selectTd()
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("Esercizio 22");
const printTd = function ()
{
  let td = document.getElementsByTagName("td")
  let arr=[]
  for (let i=0;i<td.length;i++)
  {
    arr.push(td[i].innerText)
  }
  console.log(arr)
}
printTd()
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("Esercizio 23");
const redLink = function ()
{
  let a = document.querySelectorAll("a")
  console.log(a)
  a.forEach(element => {
    element.style.backgroundColor = "red"
  });
}
redLink()
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("Esercizio 24");
const newLi = function ()
{
  let myList = document.getElementById("myList");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("Nuovo"));
  myList.appendChild(li);
}
newLi()
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const myListEmpty = function ()
{
  let liMyList = document.querySelectorAll("#myList>li");
  liMyList.forEach(li => {
    li.remove()
  });
}
myListEmpty()
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("Esercizio 26");
const trTest = function ()
{
  let tr=document.getElementsByTagName("tr");
  for (let i=0;i<tr.length;i++)
  {
    tr[i].className ='test'
  }
  console.log(tr)
}
trTest()
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("Esercizio 27");
let n=5
risultato=""
function halfTree (n)
{
  for (let i=0;i<n;i++)
  {
    risultato=risultato+"*"
    console.log(risultato)
  }
}
halfTree (n)
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("Esercizio 28");
risultato="*"
function Tree (n)
{
  let primariga="*"
  for (let a=0;a<=n;a++)
  {
    primariga=" "+primariga
    
  }
  console.log(primariga)
  for (let i=0;i<n;i++)
  {
    for (let c=0;c<(n-i);c++)
    {
      risultato=" "+risultato
    }
    risultato=risultato+"**"
    
    console.log(risultato)
    risultato=risultato.trim()
  }
  
}
Tree (n)
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("Esercizio 29");
n=0
risultato=""
function isItPrime (n)
{
  let divisori=0
  for(let i=2;i<n;i++)
  {
    if((n%i)===0)
    {
      divisori++;
    }
  }
  if (divisori===0)
  {
    risultato="Il numero "+ n +" è un numero primo"
  }
  else
  {
    risultato="Il numero "+ n +" non è un numero primo"
  }
  if(n===0||n===1)
  {
    risultato="Il numero "+ n +" non è un numero primo"
  }
  console.log(risultato)
  
}
isItPrime (n)