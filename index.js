class Schueler {
  constructor(sName, kStufe, aNote) {
    this.schuelerName = sName;
    this.klassenstufe = kStufe;
    this.abschlussnote = aNote;
  }
};

let schueler = [];

let schueler_1 = new Schueler("Nataly Miller", "10A", 2.8);
let schueler_2 = new Schueler("Penny Blaese", "9B", 3.1);
let schueler_3 = new Schueler("Jimmy Moore", "12D", 1.4);


schueler.push(schueler_1, schueler_2, schueler_3);

console.log(schueler);
