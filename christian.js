// Teil 1

class Schüler {
  constructor(name, klasse, note) {
    this.name = name;
    this.klasse = klasse;
    this.note = note;
  }
}

// Teil 2

let nataly = new Schüler("Nataly Miller", "10A", 2.8);
let penny = new Schüler("Penny Blaese", "9B", 3.1);
let jimmy = new Schüler("Jimmy Moore", "12D", 1.4);

// Teil 3

let gruppe = [nataly, penny, jimmy];

console.log(gruppe);

// Teil 3 - Alternative mit push()

let array = []; // Erstellt ein leeres Array

array.push(nataly, penny, jimmy); // pusht in das leere Array

console.log(array); // Ausgabe
