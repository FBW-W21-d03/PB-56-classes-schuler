class Schüler {
  constructor(name, klasse, note) {
    this.name = name;
    this.klasse = klasse;
    this.note = note;
  }
}

let nataly = new Schüler("Nataly Miller", "10A", 2.8);
let penny = new Schüler("Penny Blaese", "9B", 3.1);
let jimmy = new Schüler("Jimmy Moore", "12D", 1.4);

console.log(nataly);
console.log(penny);
console.log(jimmy);
