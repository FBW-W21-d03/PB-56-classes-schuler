// # javascript-classes-schuler


// Wir möchten eine Klasse Schueler schreiben, um die Schüler "Nataly", "Penny" und "Jimmy" zu modellieren.

// ## Aufgabenstellung - Teil 1
// Die Klasse Schueler soll an ein Objekt drei Eigenschaften übergeben.
// 1. Vor- und Nachname (String)
// 2. Klassenstufe (String)
// 3. Abschlussnote (Zahl)
class Schueler{
    constructor(name, nachname, classes, note){
        this.VorName = name;
        this.NachName = nachname;
        this.Classenstufe = classes;
        this.Abschlussnote = note;
    };
};
// ## Aufgabenstellung - Teil 2
// Erzeuge mittels der Klasse nun die drei Schüler
let schuler1 = new Schueler("Nataly", "Miller", "10A", 2.8);
// 1. Nataly heißt mit ganzem Namen "Nataly Miller", ist in der Klassenstufe "10A" und hat die Abschlussnote 2.8
let schuler2 = new Schueler("Penny", "Blease", "9B", 3.1);
// 2. Penny heißt mit ganzem Namen "Penny Blaese", ist in der Klassenstufe "9B" und hat die Abschlussnote 3.1
let schuler3 = new Schueler("Jimmy", "Moore", "12D", 1.4);
// 3. Jimmy heißt mit ganzem Namen "Jimmy Moore", ist in der Klassenstufe "12D" und hat die Abschlussnote 1.4

// ## Aufgabenstellung - Teil 3
// Füge die Schüler nun einem Array hinzu und gib das ganze Array auf der Konsole aus.
const schuler = [schuler1, schuler2, schuler3]
console.log(schuler);