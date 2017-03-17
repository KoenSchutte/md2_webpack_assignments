/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
 * Je mag me bij elke opdracht om hulp vragen
 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
 */
/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 * 
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 * 
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
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
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
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
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
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
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
 * console.log( value * multiplier)
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
 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
 * roep deze functie aan en console.log() de waarde
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
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
 */

var student2 = {};

/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien
 */

var students = ['Koen', 'Indy', 'Dzabir', 'Chris', 'Stijn', 'Coen', 'Gerwin', 'Nino', 'Wesley', 'Rick'];

for(i = 0; i < 11; i++){
    students[i]
};

