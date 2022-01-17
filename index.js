// TEIL-1
class Schueler {
    constructor(fullname,klassenstufe,abschlußnote) {
        this.fullname =fullname;
        this.klassenstufe =klassenstufe;
        this.abschlußnote =abschlußnote;
    }
}

// TEIL-2
let schuler_2 = new Schueler("Penny Blaese", "9B", 3.1);
let schuler_3 = new Schueler("Jimmy Moore", "12D", 1.4);
let schuler_1 = new Schueler("Nataly Miller", "10A", 2.8);

// TEIL-3
const alleSchueler =[];
let schueler = alleSchueler.push(schuler_1, schuler_2, schuler_3);

console.log(alleSchueler);