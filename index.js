class Schueler {
  constructor(sName, kStufe, aNote) {
    this.schuelerName = sName;
    this.klassenstufe = kStufe;
    this.abschlussnote = aNote;
  }
};

let schueler_1 = new Schueler("Nataly", "10-B", 2.1);
let schueler_2 = new Schueler("Penny", "10-D", 1.1);
let schueler_3 = new Schueler("Jimmy", "10-H", 3.0);

console.log(schueler_1);
console.log(schueler_2);
console.log(schueler_3);