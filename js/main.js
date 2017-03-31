/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld
 * geeft van Media Development producten (apps, sites, etc.) Bijvoorbeeld een
 * string variabele met de naam 'teacherName' en als waarde 'Berend'
 */
var IDE = "intelij";
var teacherFirstName = "Berend";
var teacherLastName = "Weij";
var schoolName = "Mediacollege";
var message = "HelloWorld";

var telefoon = "0365257142";
var huisnummer = "51";
var leerlingNummer = "19844"
var mobielNummer = "0623188234";
var fax = "213712389712";

var inLes = true;
var opSchool = true;
var vroegUit = true;
var etenMee = false;
var mbo = true;

/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend',
 * "Erwin']
 */
var nivea = ['mbo', 'hbo'];
var studenten = ['Thijs', 'Bram', 'Gijs'];
var opleidingen = ['Mediadeveloper', 'Gamedeveloper', 'Vormgever'];

/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

var legeArray = [];
legeArray.push("Hey");

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

var spliceArray = ['apple', 'banaan', 'peren', 'aarbei', 'mango'];
spliceArray.splice(0, 1);
spliceArray.splice(1, 1);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type
 * en hoe oud hij is
 */

var auto = {model: "Taurus", merk: "ford"};
var persoon = {firstName: "Koen", lastName: "Schutte", leeftijd: "17"};
var vliegtuig = {model : "73h", passierPlekken: "300"};
var stoel = {materiaal: "hout"};
var bank = {materiaal: "stof", breedte: "3m"};
var glas = {materiaal: "glas", vorm: "cilinder"};
var mobiel = {merk: "samsung", type: "core"};
var laptop = {merk: "asus", type: "KH168", inch: "17.3"};
var shirt = {materiaal: "katoen", merk: "nike"};
var tas = {materiaal: "stof", merk: "highsierra"};

/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2
 * parameters value & multiplier console.log( value * multiplier)
 */

function multiply(value, multiplier) {
    return value * multiplier;
}
function multiply1(value, multiplier) {
    return value / multiplier;
}
function multiply2(value, multiplier) {
    return value - multiplier;
}
function multiply3(value, multiplier) {
    return value + multiplier;
}
//console.log(multiply(5,2));

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en
 * lastname opgeslagen roep deze functie aan en console.log() de waarde
 */

function zeven(firstName, lastName) {
    return {
        "voornaam":  firstName,
        "achternaam": lastName
     };
}
//console.log(zeven("Jaap", "Visser"  ));


/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

var student = {showName: function showName(){}};

/**
 * Opdracht 9: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien (console.log())
 */

var students = ['Koen', 'Indy', 'Dzabir', 'Chris', 'Stijn', 'Coen', 'Gerwin', 'Nino', 'Wesley', 'Rick'];

for(let i = 0; i < 11; i++){
    console.log(students[i]);
};

/**
 * Opdracht 10: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

let firstName = "Koen";
let lastName = "Schutte";
let fullName = firstName + " " + lastName;
console.log(fullName);

/**
 * Opdracht 11: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

console.log(Math.random()* 5);
console.log(Math.random()* 9 + 1);
console.log(Math.random()* 9 + 30);
console.log(Math.random()* 200 - 100);

/**
 * Opdracht 12: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
            { array : false, object : false, primitive : true });

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
            { array : false, object : true, primitive : false });

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
            { array : true, object : false, primitive : false });

console.log('Een factuur sla ik op in een:',
            { array : false, object : false, primitive : true });


console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
            { array : true, object : false, primitive : false });

/**
 * Opdracht 13: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

let autotje = "ford";
let vervoer = "fiets";
let school = "mediacollege";
let browser = "chrome";

const een = 1;
const twee = "twee";
const drie = "drieweeler";
const vier = "klaver";

/**
 * Opdracht 14: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'Wanneer je het maar 1 keer in een scope wil gebruiken');
console.log('Wanneer gebruik je de const keyword', 'Als je alleen de waarde wilt aanpassen, maar niet het type');

/**
 * Opdracht 15: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen
 * uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */


let koen = {leeftijd: "17", achternaa: "Schutte", lengte: "1.80"};

console.log("+1");
function changeNumber(number) {
    var plus1 = number+2;
    console.log(plus1);
}
var array = [0,1,2,3,4];
array.forEach(changeNumber);
console.log("__________");
console.log("-- -1");

array.forEach(function(number) {
   var minus1 = number-1;
   console.log(minus1);
});


var vermenigvuldigen = function(array, back) {
    var keer = array[4];
    back(keer);
}
console.log("__________");
console.log("Haal data uit nummer");


vermenigvuldigen([0,1,2,3,4], console.log)

/**
 * Hieronder heb ik code geschreven die je nodig hebt voor vraag 16 en 17
 * Aan deze code hoef je niets te veranderen
 */
console.log('-----------------------------');

Array.prototype.random = function() {
    let randomIndex = Math.floor(Math.random() * this.length);
    return this[ randomIndex ];
};

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};

/**
 * Opdracht 16: Custom prototype method gebruiken
 * Maak een array met meerdere namen
 * Probeer vervolgens de random() functie (die hierboven staat) te gebruiken
 * Tip: je roept deze functie op dezelfde manier aan als bijvoorbeeld push() en
 * splice().
 * console.log() de naam die deze functie returned
 */
var names1 = ['Jaap', 'Klaas', 'Sjonnie'];
console.log(names1.random());

/**
 * Opdracht 17: Custom prototype method gebruiken
 * Maak een variabele waarin je een lange tekst opslaat
 * Probeer vervolgens de replaceAll() functie te gebruiken om een bepaald woord
 * op alle plekken te vervangen voor een ander woord
 * console.log() deze gewijzigde tekst
 */

let langeTekst = 'koen chris indy zab irtim';
console.log(langeTekst.replaceAll('koen','veranderd'));


/**
 * Opdracht 18: Prototype based language
 * Geef antwoord op onderstaande vraag
 */
console.log('Waarom heet JavaScript een prototype based language?',
            'Omdat je standaard objects krijgt');

