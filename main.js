class Schueler {
  constructor(name, kl,endnote) {
    this.kompletterName = name;
    this.klassenstufe = kl;
    this.abschlussNote = endnote;
    
  }
};
let schueler1 = new Schueler("Nataly Miller", "10-A", 2.8);
let schueler2 = new Schueler("Penny Blaese", "9-B", 3.1);
let schueler3 = new Schueler("Jimmy Moore", "12-D", 1.4);

console.log(schueler1);
console.log(schueler2);
console.log(schueler3);